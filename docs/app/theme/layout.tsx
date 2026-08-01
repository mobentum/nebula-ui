import { SectionLayout } from '@/components/section-layout';
import { getThemeNavigation } from '@/lib/theme';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const navigation = getThemeNavigation();

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-nb-border bg-nb-bg/95 backdrop-blur">
        <div className="mx-auto flex h-14 items-center gap-6 px-4">
          <a href="/" className="text-lg font-bold text-nb-fg">
            Nebula UI
          </a>
          <nav className="flex items-center gap-4 text-sm">
            <a href="/docs" className="text-nb-muted-fg hover:text-nb-fg transition-colors">
              Docs
            </a>
            <a
              href="/docs/charts/overview"
              className="text-nb-muted-fg hover:text-nb-fg transition-colors"
            >
              Charts
            </a>
            <a
              href="/docs/flow/workflow-builder"
              className="text-nb-muted-fg hover:text-nb-fg transition-colors"
            >
              Flow
            </a>
            <a href="/theme/tokens" className="text-nb-fg font-medium">
              Theme
            </a>
          </nav>
        </div>
      </header>
      <SectionLayout navTitle="Theme" basePath="/theme" navigation={navigation}>
        {children}
      </SectionLayout>
    </>
  );
}
