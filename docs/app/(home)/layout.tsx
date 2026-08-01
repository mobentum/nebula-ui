import { NebulaBackground } from '@/components/nebula-background';
import { appName } from '@/lib/shared';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NebulaBackground />
      <header className="sticky top-0 z-30 border-b border-nb-border bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-6 px-4">
          <Link href="/" className="text-lg font-bold text-nb-fg">
            {appName}
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/docs" className="text-nb-muted-fg hover:text-nb-fg transition-colors">
              Docs
            </Link>
            <Link
              href="/docs/charts/overview"
              className="text-nb-muted-fg hover:text-nb-fg transition-colors"
            >
              Charts
            </Link>
            <Link
              href="/docs/flow/workflow-builder"
              className="text-nb-muted-fg hover:text-nb-fg transition-colors"
            >
              Flow
            </Link>
            <Link
              href="/theme/tokens"
              className="text-nb-muted-fg hover:text-nb-fg transition-colors"
            >
              Theme
            </Link>
          </nav>
        </div>
      </header>
      {children}
    </>
  );
}
