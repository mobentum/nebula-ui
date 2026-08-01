'use client';

import { type ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { DocSection } from '@/lib/docs';

interface DocsLayoutProps {
  navigation: DocSection[];
  children: ReactNode;
}

export function DocsLayout({ navigation, children }: DocsLayoutProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-1">
      <button
        type="button"
        className="fixed bottom-4 left-4 z-50 rounded-full bg-nb-primary p-3 text-nb-primary-fg shadow-lg md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto border-r border-nb-border bg-nb-bg p-4 transition-transform md:sticky md:top-0 md:z-0 md:block md:h-screen md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="space-y-6">
          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="mb-1.5 px-1 text-xs font-semibold uppercase tracking-wider text-nb-muted-fg">
                {section.title}
              </h3>
              <ul className="ml-2 space-y-0.5 border-l border-nb-border">
                {section.pages.map((page) => {
                  const href = page.slug.length === 0 ? '/docs' : '/docs/' + page.slug.join('/');
                  const isActive = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`block py-1.5 pl-3 pr-2 text-[14px] transition-colors ${
                          isActive
                            ? '-ml-px border-l-2 border-nb-primary bg-nb-primary/10 font-medium text-nb-primary rounded-r-md'
                            : 'text-nb-muted-fg hover:bg-nb-accent hover:text-nb-fg rounded-md'
                        }`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        {page.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <main className="min-w-0 flex-1 px-4 py-8 md:px-8 lg:px-12">
        {children}
      </main>
    </div>
  );
}
