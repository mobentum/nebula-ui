import type { ReactNode } from 'react';
import { DocsLayout } from '@/components/docs-layout';
import { getNavigation } from '@/lib/docs';

export default function Layout({ children }: { children: ReactNode }) {
  const navigation = getNavigation();

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-nb-border bg-nb-bg/95 backdrop-blur">
        <div className="mx-auto flex h-14 items-center gap-6 px-4">
          <a href="/" className="text-lg font-bold text-nb-fg">
            Nebula UI
          </a>
          <nav className="flex items-center gap-4 text-sm">
            <a href="/docs" className="text-nb-fg font-medium">
              Docs
            </a>
            <a href="/patterns/button-organization" className="text-nb-muted-fg hover:text-nb-fg transition-colors">
              Patterns
            </a>
            <a href="/theme/tokens" className="text-nb-muted-fg hover:text-nb-fg transition-colors">
              Theme
            </a>
          </nav>
        </div>
      </header>
      <DocsLayout navigation={navigation}>{children}</DocsLayout>
    </>
  );
}
