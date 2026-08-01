import { build } from 'esbuild';
import { cp, mkdir, readdir, readFile, rename, rm, writeFile, watch } from 'node:fs/promises';
import { readdirSync, existsSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';

const WATCH = process.argv.includes('--watch');
const STAGING = '.nebula-build';
const FORMATS = [
  ['esm', '.mjs'],
  ['cjs', '.cjs'],
];

const ESM_RE = /(from\s+|import\s*)(["'])(\.{1,2}\/[^"']+)\2/g;
const CJS_RE = /require\((["'])(\.{1,2}\/[^"']+)\1\)/g;
const BARE_RE = /(?:from\s+|import\s*|require\()(["'])(@?[^."'][^"']*)\1/g;

function collectFiles(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '__tests__') continue;
      collectFiles(full, acc);
    } else if (/\.(ts|tsx)$/.test(entry.name)) acc.push(full);
  }
  return acc;
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function resolveSpec(fromFile, spec, ext) {
  const base = resolve(dirname(fromFile));
  return (
    [resolve(base, spec + ext), resolve(base, spec + '/index' + ext)].find((c) =>
      existsSync(c),
    ) ?? null
  );
}

async function rewriteAllImports(outDir) {
  for await (const file of walk(outDir)) {
    const ext = file.endsWith('.mjs') ? '.mjs' : file.endsWith('.cjs') ? '.cjs' : null;
    if (!ext) continue;
    const isEsm = ext === '.mjs';
    const re = isEsm ? ESM_RE : CJS_RE;

    const content = await readFile(file, 'utf-8');
    let next = content;
    for (const match of content.matchAll(re)) {
      const spec = isEsm ? match[3] : match[2];
      if (/\.[a-z0-9]+$/i.test(spec)) continue;
      const resolved = resolveSpec(file, spec, ext);
      if (!resolved) continue;
      const rel = relative(dirname(file), resolved).replace(/\\/g, '/');
      const target = rel.startsWith('.') ? rel : `./${rel}`;
      next = next.replace(
        match[0],
        isEsm
          ? `${match[1]}${match[2]}${target}${match[2]}`
          : `require(${match[1]}${target}${match[1]})`,
      );
    }
    if (next !== content) await writeFile(file, next);
  }
}

async function copyCss() {
  await mkdir('css', { recursive: true });
  await cp('src/styles/tailwind.css', 'css/tailwind.css');
  await cp('src/styles/theme.css', 'css/default-theme.css');
}

/* ─────────────────────────── Validation ─────────────────────────── */

async function validate(outDir) {
  const issues = [];

  // 1. Every relative import must resolve to an actual output file.
  for await (const file of walk(outDir)) {
    const ext = file.endsWith('.mjs') ? '.mjs' : file.endsWith('.cjs') ? '.cjs' : null;
    if (!ext) continue;
    const isEsm = ext === '.mjs';
    const re = isEsm ? ESM_RE : CJS_RE;
    const content = await readFile(file, 'utf-8');
    for (const match of content.matchAll(re)) {
      const spec = isEsm ? match[3] : match[2];
      if (/\.[a-z0-9]+$/i.test(spec)) {
        if (!existsSync(join(dirname(file), spec))) {
          issues.push(`dangling import: ${relative('.', file)} → "${spec}"`);
        }
        continue;
      }
      if (!resolveSpec(file, spec, ext)) {
        issues.push(`unresolvable import: ${relative('.', file)} → "${spec}"`);
      }
      if (/\.(ts|tsx)$/.test(spec) || spec.includes('@/') || /src\//.test(spec)) {
        issues.push(`source leakage: ${relative('.', file)} → "${spec}"`);
      }
    }
  }

  // 2. Client modules must preserve the "use client" directive.
  for (const src of collectFiles('src')) {
    const raw = await readFile(src, 'utf-8');
    if (!raw.includes('"use client"')) continue;
    for (const [format, ext] of FORMATS) {
      const outFile = join(outDir, src.replace(/\.(ts|tsx)$/, ext));
      if (!existsSync(outFile)) {
        issues.push(`missing output for client module: ${src} (${format})`);
        continue;
      }
      const head = (await readFile(outFile, 'utf-8')).split('\n').slice(0, 3).join('\n');
      if (!head.includes('"use client"')) {
        issues.push(`missing "use client" directive: ${relative('.', outFile)} (${format})`);
      }
    }
  }

  // 3. Bare imports must be declared dependencies or peer dependencies.
  const pkg = JSON.parse(await readFile('package.json', 'utf-8'));
  const allowed = new Set([
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
  ]);
  for await (const file of walk(outDir)) {
    if (!file.endsWith('.mjs') && !file.endsWith('.cjs')) continue;
    const content = await readFile(file, 'utf-8');
    for (const match of content.matchAll(BARE_RE)) {
      const spec = match[2];
      const root = spec.startsWith('@') ? spec.split('/').slice(0, 2).join('/') : spec.split('/')[0];
      if (!allowed.has(root) && !allowed.has(spec) && !spec.startsWith('node:')) {
        issues.push(`undeclared dependency: ${relative('.', file)} imports "${spec}"`);
      }
    }
  }

  // 4. Entry points must exist.
  for (const [format, ext] of FORMATS) {
    if (!existsSync(join(outDir, `index${ext}`))) {
      issues.push(`missing entry output: dist/index${ext} (${format})`);
    }
  }

  return issues;
}

function findDuplicateOuts(entries) {
  const seen = new Map();
  for (const e of entries) {
    if (seen.has(e.out)) seen.get(e.out).push(e.in);
    else seen.set(e.out, [e.in]);
  }
  return [...seen.entries()].filter(([, v]) => v.length > 1);
}

/* ─────────────────────────── Build pipeline ─────────────────────────── */

async function buildModule(format, ext) {
  await build({
    entryPoints,
    bundle: false,
    format,
    outdir: STAGING,
    outExtension: { '.js': ext },
    sourcemap: true,
    logLevel: 'silent',
  });
}

async function buildAll() {
  await rm(STAGING, { recursive: true, force: true });
  await mkdir(STAGING, { recursive: true });

  for (const [format, ext] of FORMATS) {
    await buildModule(format, ext);
  }
  await rewriteAllImports(STAGING);

  const issues = await validate(STAGING);
  if (issues.length) {
    throw new Error(`build validation failed:\n  - ${issues.join('\n  - ')}`);
  }

  await rm('dist', { recursive: true, force: true });
  await rename(STAGING, 'dist');
  await copyCss();
}

/* ─────────────────────────── Entry ─────────────────────────── */

const files = collectFiles('src').filter((f) => f !== 'src/index.ts');
const entryPoints = files.map((f) => {
  const out = f.replace(/\.(ts|tsx)$/, '');
  return { in: f, out };
});
entryPoints.push({ in: 'index.ts', out: 'index' });

const duplicates = findDuplicateOuts(entryPoints);
if (duplicates.length) {
  console.error(
    `[nebula] duplicate output paths:\n  - ${duplicates
      .map(([out, ins]) => `${out} ← ${ins.join(', ')}`)
      .join('\n  - ')}`,
  );
  process.exit(1);
}

if (WATCH) {
  await buildAll().catch((err) => console.error(`[nebula] ${err.message}`));
  console.log(`[nebula] watching ${entryPoints.length} modules…`);

  let timer = null;
  const rebuild = () => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      try {
        await buildAll();
        console.log('[nebula] rebuilt');
      } catch (err) {
        console.error(`[nebula] ${err.message}`);
      }
    }, 150);
  };

  const watcher = watch('src', { recursive: true });
  const shutdown = () => {
    watcher.close?.();
    process.exit(0);
  };
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);

  for await (const event of watcher) {
    const name = String(event.filename ?? '');
    if (/\.(ts|tsx)$/.test(name)) rebuild();
  }
} else {
  try {
    await buildAll();
    console.log(`[nebula] built ${entryPoints.length} modules (esm + cjs)`);
  } catch (err) {
    console.error(`[nebula] ${err.message}`);
    process.exit(1);
  }
}
