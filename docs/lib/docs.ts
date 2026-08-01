import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const contentDir = join(process.cwd(), 'content', 'docs');

export interface DocPage {
  slug: string[];
  title: string;
  description?: string;
  path: string;
  content: string;
}

export interface DocSection {
  title: string;
  pages: { slug: string[]; title: string }[];
}

function readMeta(dir: string): { title: string; pages: string[] } | null {
  const metaPath = join(dir, 'meta.json');
  if (!existsSync(metaPath)) return null;
  const raw = readFileSync(metaPath, 'utf-8');
  return JSON.parse(raw);
}

export function getDocPage(slug: string[]): DocPage | null {
  const parts = slug.length === 0 ? ['index'] : slug;
  const filePath = join(contentDir, ...parts) + '.mdx';
  if (!existsSync(filePath)) return null;
  const raw = readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug.join(' / '),
    description: data.description,
    path: slug.join('/') + '.mdx',
    content,
  };
}

export function getNavigation(): DocSection[] {
  const sections: DocSection[] = [];

  function walk(dir: string, parentSlug: string[]) {
    const meta = readMeta(dir);
    if (!meta) return;

    const pages: { slug: string[]; title: string }[] = [];

    for (const entry of meta.pages) {
      const entryPath = join(dir, entry);
      const slug = parentSlug.length === 0 && entry === 'index' ? [] : [...parentSlug, entry];

      if (existsSync(entryPath + '.mdx')) {
        const raw = readFileSync(entryPath + '.mdx', 'utf-8');
        const { data } = matter(raw);
        pages.push({ slug, title: data.title ?? entry });
      } else if (existsSync(join(entryPath, 'meta.json'))) {
        walk(entryPath, slug);
      }
    }

    if (pages.length > 0) {
      sections.push({ title: meta.title, pages });
    }
  }

  walk(contentDir, []);
  return sections;
}

export async function getDocPaths(): Promise<string[][]> {
  const paths: string[][] = [];

  function walk(dir: string, parentSlug: string[]) {
    const meta = readMeta(dir);
    if (!meta) return;

    for (const entry of meta.pages) {
      const entryPath = join(dir, entry);
      const slug = [...parentSlug, entry];

      if (existsSync(entryPath + '.mdx')) {
        if (slug.length === 1 && slug[0] === 'index') {
          paths.push([]);
        } else {
          paths.push(slug);
        }
      } else if (existsSync(join(entryPath, 'meta.json'))) {
        walk(entryPath, slug);
      }
    }
  }

  walk(contentDir, []);
  return paths;
}
