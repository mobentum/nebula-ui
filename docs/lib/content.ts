import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

export interface ContentPage {
  slug: string[];
  title: string;
  description?: string;
  content: string;
}

export interface ContentSection {
  title: string;
  pages: { slug: string[]; title: string }[];
}

function readMeta(dir: string): { title: string; pages: string[] } | null {
  const metaPath = join(dir, 'meta.json');
  if (!existsSync(metaPath)) return null;
  const raw = readFileSync(metaPath, 'utf-8');
  return JSON.parse(raw);
}

export function createContentLoader(contentDir: string) {
  function walk(dir: string, parentSlug: string[], sections: ContentSection[]) {
    const meta = readMeta(dir);
    if (!meta) return;

    const pages: { slug: string[]; title: string }[] = [];
    const subdirs: { entry: string; entryPath: string }[] = [];
    for (const entry of meta.pages) {
      const entryPath = join(dir, entry);
      const slug = [...parentSlug, entry];

      if (existsSync(`${entryPath}.mdx`)) {
        const raw = readFileSync(`${entryPath}.mdx`, 'utf-8');
        const { data } = matter(raw);
        pages.push({ slug, title: data.title ?? entry });
      } else if (existsSync(join(entryPath, 'meta.json'))) {
        subdirs.push({ entry, entryPath });
      }
    }

    if (pages.length > 0) {
      sections.push({ title: meta.title, pages });
    }

    for (const { entry, entryPath } of subdirs) {
      walk(entryPath, [...parentSlug, entry], sections);
    }
  }

  return {
    getPage(slug: string[]): ContentPage | null {
      const parts = slug.length === 0 ? ['index'] : slug;
      const filePath = `${join(contentDir, ...parts)}.mdx`;
      if (!existsSync(filePath)) return null;
      const raw = readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? slug.join(' / '),
        description: data.description,
        content,
      };
    },

    getNavigation(): ContentSection[] {
      const sections: ContentSection[] = [];
      walk(contentDir, [], sections);
      return sections;
    },

    getPaths(): string[][] {
      const paths: string[][] = [];

      function collect(dir: string, parentSlug: string[]) {
        const meta = readMeta(dir);
        if (!meta) return;

        for (const entry of meta.pages) {
          const entryPath = join(dir, entry);
          const slug = [...parentSlug, entry];

          if (existsSync(`${entryPath}.mdx`)) {
            paths.push(slug);
          } else if (existsSync(join(entryPath, 'meta.json'))) {
            collect(entryPath, slug);
          }
        }
      }

      collect(contentDir, []);
      return paths;
    },
  };
}
