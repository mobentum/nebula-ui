import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
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
  return {
    getPage(slug: string[]): ContentPage | null {
      const parts = slug.length === 0 ? ['index'] : slug;
      const filePath = join(contentDir, ...parts) + '.mdx';
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
      const meta = readMeta(contentDir);
      if (!meta) return [];

      const pages: { slug: string[]; title: string }[] = [];
      for (const entry of meta.pages) {
        const entryPath = join(contentDir, entry);
        const slug = [entry];

        if (existsSync(entryPath + '.mdx')) {
          const raw = readFileSync(entryPath + '.mdx', 'utf-8');
          const { data } = matter(raw);
          pages.push({ slug, title: data.title ?? entry });
        }
      }

      return [{ title: meta.title, pages }];
    },

    async getPaths(): Promise<string[][]> {
      const meta = readMeta(contentDir);
      if (!meta) return [];

      return meta.pages
        .filter((entry) => existsSync(join(contentDir, entry) + '.mdx'))
        .map((entry) => [entry]);
    },
  };
}
