import Link from 'next/link';
import type { Metadata } from 'next';
import { Badge } from '@nebula/ui';

export const metadata: Metadata = {
  title: 'Nebula UI — Accessible React Components Built on Base UI & Tailwind CSS',
  description:
    'Nebula UI is an accessible, composable React component library built on Base UI and Tailwind CSS v4. 50+ components, light & dark themes, and fully customizable design tokens.',
  keywords: [
    'react components',
    'tailwind css',
    'base ui',
    'ui library',
    'headless ui',
    'accessible components',
    'design system',
    'react ui kit',
  ],
  openGraph: {
    title: 'Nebula UI — Accessible React Components',
    description:
      'An accessible, composable React component library built on Base UI and Tailwind CSS v4.',
    type: 'website',
  },
};

const features = [
  {
    title: 'Accessible by default',
    description:
      'Built on Base UI, every component ships with WAI-ARIA patterns, keyboard navigation, and focus management out of the box.',
    href: '/docs',
    icon: 'M12 3l1.9 5.6L19 10l-5 3.7 1.9 5.6-4-3.3-4 3.3 1.9-5.6-5-3.7 5.1-1.4L12 3z',
  },
  {
    title: 'Tailwind CSS v4 tokens',
    description:
      'A single source of truth for colors, borders, spacing, and typography. Override any token to theme the entire library.',
    href: '/theme/tokens',
    icon: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z',
  },
  {
    title: 'Semantic colors',
    description:
      'Success, warning, info, and danger tokens across Badge, Button, Alert, Callout, Progress, and more — themeable in light and dark.',
    href: '/theme/tokens#semantic-palette',
    icon: 'M12 3l1.9 5.6L19 10l-5 3.7 1.9 5.6-4-3.3-4 3.3 1.9-5.6-5-3.7 5.1-1.4L12 3z',
  },
  {
    title: 'Light & dark themes',
    description:
      'Class-based dark mode with a customizable radius scale and WCAG AA contrast. Toggle themes per subtree or app-wide.',
    href: '/theme/create-theme',
    icon: 'M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.4 1.4m9.9 9.9 1.4 1.4M18.4 5.6l-1.4 1.4m-9.9 9.9-1.4 1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  },
  {
    title: 'Blocks & templates',
    description:
      'Production-ready pages — SaaS template, pricing, login, banners, and more — built entirely from Nebula components.',
    href: '/docs/blocks',
    icon: 'M4 5h16v14H4zM9 9h6M9 13h6',
  },
  {
    title: 'Fully customizable',
    description:
      'Every component accepts className via tailwind-merge and forwards render props — override anything without fighting the API.',
    href: '/docs',
    icon: 'M4 7h16M4 12h10M4 17h7',
  },
];

const categories = [
  { title: 'Actions', href: '/docs/actions/button', count: 4 },
  { title: 'Forms', href: '/docs/forms/input', count: 17 },
  { title: 'Data Display', href: '/docs/data-display/card', count: 7 },
  { title: 'Feedback', href: '/docs/feedback/alert', count: 7 },
  { title: 'Overlay', href: '/docs/overlay/dialog', count: 6 },
  { title: 'Navigation', href: '/docs/navigation/menu', count: 9 },
  { title: 'Layout', href: '/docs/layout/scroll-area', count: 5 },
  { title: 'Blocks', href: '/docs/blocks/page-shells', count: 7 },
];

export default function HomePage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Nebula UI',
            description:
              'An accessible, composable React component library built on Base UI and Tailwind CSS v4.',
            applicationCategory: 'DeveloperApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative px-4 pb-20 pt-24 text-center sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-nb-border bg-white/60 px-3 py-1 text-xs font-medium text-nb-muted-fg backdrop-blur">
            Built on Base UI · Tailwind CSS v4
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-nb-fg sm:text-5xl lg:text-6xl">
            Build better interfaces with{' '}
            <span className="bg-gradient-to-r from-nb-primary to-indigo-500 bg-clip-text text-transparent">
              Nebula UI
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-nb-muted-fg">
            An accessible, composable React component library. 50+ production-ready
            components styled with Tailwind CSS v4 and powered by Base UI — theme it
            once, use it everywhere.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/docs/getting-started/installation"
              className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-nb-primary px-8 text-sm font-medium text-nb-primary-fg shadow-sm transition-colors hover:bg-nb-primary/90 sm:w-auto"
            >
              Get Started
            </Link>
            <Link
              href="/docs"
              className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-nb-border bg-white/60 px-8 text-sm font-medium text-nb-fg backdrop-blur transition-colors hover:bg-nb-accent sm:w-auto"
            >
              Browse Components
            </Link>
          </div>
          <p className="mt-6 text-xs text-nb-muted-fg">
            Free &amp; open source · MIT licensed
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <Badge variant="subtle" color="success">Success</Badge>
            <Badge variant="subtle" color="warning">Warning</Badge>
            <Badge variant="subtle" color="info">Info</Badge>
            <Badge variant="subtle" color="danger">Danger</Badge>
            <Badge variant="outline" color="primary">Primary</Badge>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold text-nb-fg">
            Why developers choose Nebula UI
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="group rounded-xl border border-nb-border bg-white/60 p-6 backdrop-blur transition-all hover:border-nb-primary/50 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-nb-primary/10 text-nb-primary">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                    <path d={f.icon} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-medium text-nb-fg group-hover:text-nb-primary">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-nb-muted-fg">{f.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-nb-border bg-white/40 px-4 py-16 backdrop-blur">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold text-nb-fg">Explore the library</h2>
            <Link href="/docs" className="text-sm font-medium text-nb-primary hover:text-nb-primary/80">
              View all →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="flex items-center justify-between rounded-lg border border-nb-border bg-nb-card px-5 py-4 transition-colors hover:border-nb-primary/50"
              >
                <span className="text-sm font-medium text-nb-fg">{c.title}</span>
                <span className="rounded-full bg-nb-muted px-2 py-0.5 text-xs text-nb-muted-fg">
                  {c.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-nb-primary/20 bg-nb-primary/5 p-10 text-center">
          <h2 className="text-2xl font-semibold text-nb-fg">Start building today</h2>
          <p className="mx-auto mt-3 max-w-xl text-nb-muted-fg">
            Install Nebula UI, wire up Tailwind CSS v4, and ship accessible interfaces in minutes.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/docs/getting-started/installation"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-nb-primary px-8 text-sm font-medium text-nb-primary-fg shadow-sm transition-colors hover:bg-nb-primary/90"
            >
              Install Nebula UI
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
