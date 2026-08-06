import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import { getThemePage, getThemePaths } from '@/lib/theme';
import { useMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';

function stripMdxImports(content: string): string {
  return content.replace(/^import\s+.*?from\s+['"].*?['"];?\s*\n/gm, '');
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  const page = getThemePage(slug);
  if (!page) notFound();

  const { content } = await compileMDX({
    source: stripMdxImports(page.content),
    components: useMDXComponents(),
    options: {
      parseFrontmatter: false,
      blockJS: false,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
  });

  return (
    <article className="max-w-3xl">
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight text-nb-fg">
        {page.title}
      </h1>
      {page.description && (
        <p className="mt-2 text-lg text-nb-muted-fg">{page.description}</p>
      )}
      <div className="mt-8">{content}</div>
    </article>
  );
}

export async function generateStaticParams() {
  const paths = await getThemePaths();
  return paths.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug = [] } = await params;
  const page = getThemePage(slug);
  if (!page) notFound();

  return {
    title: page.title,
    description: page.description,
  };
}
