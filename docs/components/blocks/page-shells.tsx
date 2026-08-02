'use client';

import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger,
  Button,
  CardRoot,
  Input,
  SelectIcon,
  SelectItem,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@nebula/ui';
import { useState } from 'react';

function ContentPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-md bg-nb-muted/50 ${className ?? ''}`}
    >
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
      <svg className="absolute inset-0 h-full w-full stroke-nb-border" fill="none" aria-hidden>
        <defs>
          <pattern
            id="shell-pattern"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
          </pattern>
        </defs>
        <rect stroke="none" fill="url(#shell-pattern)" width="100%" height="100%" />
      </svg>
    </div>
  );
}

function TimeRangeSelect() {
  return (
    <SelectRoot defaultValue="1">
      <SelectTrigger className="h-8 w-full sm:w-40">
        <SelectValue />
        <SelectIcon />
      </SelectTrigger>
      <SelectPortal>
        <SelectPositioner>
          <SelectPopup>
            <SelectItem value="1">Today</SelectItem>
            <SelectItem value="2">Last 7 days</SelectItem>
            <SelectItem value="3">Last 4 weeks</SelectItem>
            <SelectItem value="4">Last 12 months</SelectItem>
          </SelectPopup>
        </SelectPositioner>
      </SelectPortal>
    </SelectRoot>
  );
}

function RegionSelect() {
  return (
    <SelectRoot defaultValue="1">
      <SelectTrigger className="h-8 w-full sm:w-36">
        <SelectValue />
        <SelectIcon />
      </SelectTrigger>
      <SelectPortal>
        <SelectPositioner>
          <SelectPopup>
            <SelectItem value="1">US-West</SelectItem>
            <SelectItem value="2">US-East</SelectItem>
            <SelectItem value="3">EU-Central-1</SelectItem>
          </SelectPopup>
        </SelectPositioner>
      </SelectPortal>
    </SelectRoot>
  );
}

/* ─── Shell 01: Tabbed report with content grid ─── */

export function PageShellTabs() {
  const [tab, setTab] = useState<'overview' | 'detail'>('overview');
  return (
    <div className="w-full p-4 sm:p-6 lg:p-8">
      <header>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-semibold text-nb-fg">Report</h3>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <TimeRangeSelect />
            <RegionSelect />
          </div>
        </div>
      </header>
      <main>
        <div className="mt-6 flex items-center gap-4 border-b border-nb-border" role="tablist">
          {(['overview', 'detail'] as const).map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`-mb-px border-b-2 px-1 pb-3 pt-2 text-sm font-medium capitalize transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary rounded-sm ${
                tab === t
                  ? 'border-nb-primary text-nb-primary'
                  : 'border-transparent text-nb-muted-fg hover:text-nb-fg'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        {tab === 'overview' ? (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((n) => (
              <CardRoot key={n} className="h-36 p-2">
                <ContentPlaceholder />
              </CardRoot>
            ))}
          </div>
        ) : (
          <CardRoot className="mt-4 h-72 p-2">
            <ContentPlaceholder />
          </CardRoot>
        )}
      </main>
    </div>
  );
}

/* ─── Shell 02: Split layout with titled cards ─── */

export function PageShellSplit() {
  return (
    <div className="w-full p-4 sm:p-6 lg:p-8">
      <header>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-semibold text-nb-fg">Report</h3>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <TimeRangeSelect />
            <RegionSelect />
          </div>
        </div>
      </header>
      <div className="mt-6 rounded-lg border border-nb-border">
        <div className="grid-cols-12 divide-y divide-nb-border md:grid md:divide-x md:divide-y-0">
          <div className="divide-y divide-nb-border px-2 md:col-span-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-28 py-2">
                <ContentPlaceholder />
              </div>
            ))}
          </div>
          <div className="h-56 p-2 md:col-span-8 md:h-auto">
            <ContentPlaceholder />
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {['Title', 'Title', 'Title', 'Title'].map((t) => (
          <CardRoot key={t} className="overflow-hidden p-0">
            <div className="border-b border-nb-border px-4 py-2">
              <h3 className="text-sm font-medium text-nb-fg">{t}</h3>
            </div>
            <div className="h-60 p-2">
              <ContentPlaceholder />
            </div>
          </CardRoot>
        ))}
      </div>
    </div>
  );
}

/* ─── Shell 03: Top nav + overview ─── */

export function PageShellWithNav() {
  const nav = ['Dashboard', 'Workspaces', 'Settings'];
  return (
    <div className="w-full">
      <div className="border-b border-nb-border">
        <div className="px-4 sm:px-6">
          <div className="flex h-14 items-center sm:gap-7">
            <div className="hidden shrink-0 sm:flex sm:items-center">
              <button
                type="button"
                className="rounded-md p-1.5 text-nb-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary"
                aria-label="Nebula"
              >
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                </svg>
              </button>
            </div>
            <nav className="flex items-center gap-6" aria-label="Tabs">
              {nav.map((item, i) => (
                <button
                  type="button"
                  key={item}
                  aria-current={i === 0 ? 'page' : undefined}
                  className={`-mb-px inline-flex items-center border-b-2 px-1 pb-3 pt-2 text-sm font-medium transition-colors ${
                    i === 0
                      ? 'border-nb-primary text-nb-primary'
                      : 'border-transparent text-nb-muted-fg hover:border-nb-border hover:text-nb-fg'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <header>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-semibold text-nb-fg">Overview</h3>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <TimeRangeSelect />
              <RegionSelect />
            </div>
          </div>
        </header>
        <main>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <CardRoot key={n} className="h-36 p-2">
                <ContentPlaceholder />
              </CardRoot>
            ))}
          </div>
          <CardRoot className="mt-4 h-96 p-2">
            <ContentPlaceholder />
          </CardRoot>
        </main>
      </div>
    </div>
  );
}

/* ─── Shell 04/05: Reports with hero header ─── */

const reports = [
  { name: 'Q3 Revenue', description: 'Quarterly revenue by region' },
  { name: 'User Growth', description: 'Monthly active users' },
  { name: 'Infrastructure', description: 'Compute and storage usage' },
  { name: 'Billing Summary', description: 'Invoices and credits' },
  { name: 'Support Tickets', description: 'Volume and resolution time' },
  { name: 'Security Audit', description: 'Access and policy events' },
];

function ReportCards({ items }: { items: typeof reports }) {
  return (
    <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((r) => (
        <CardRoot key={r.name} className="p-2 transition-colors hover:border-nb-primary/50">
          <div className="h-20">
            <ContentPlaceholder />
          </div>
          <h4 className="mt-2 px-1 text-sm font-medium text-nb-fg">
            <button
              type="button"
              className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary"
            >
              {r.name}
            </button>
          </h4>
          <p className="mt-0.5 px-1 text-sm text-nb-muted-fg">{r.description}</p>
        </CardRoot>
      ))}
    </div>
  );
}

export function PageShellReports() {
  return (
    <div className="w-full">
      <div className="p-4 sm:p-6">
        <header>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-nb-fg">Report</h3>
            <Button>
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
              <svg
                className="-ml-1 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
              Add report
            </Button>
          </div>
          <Input className="mt-4 h-9 max-w-sm" placeholder="Search reports..." />
        </header>
        <main>
          <AccordionRoot defaultValue={['recent']} className="mt-6 space-y-6">
            <AccordionItem value="recent">
              <AccordionHeader>
                <AccordionTrigger className="text-sm font-medium text-nb-fg">
                  Recent (3)
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionPanel>
                <ReportCards items={reports.slice(0, 3)} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="all">
              <AccordionHeader>
                <AccordionTrigger className="text-sm font-medium text-nb-fg">
                  All (6)
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionPanel>
                <ReportCards items={reports} />
              </AccordionPanel>
            </AccordionItem>
          </AccordionRoot>
        </main>
      </div>
    </div>
  );
}

/* ─── Shell 05: Hero header + docs cards + reports ─── */

export function PageShellHero() {
  return (
    <div className="w-full">
      <div className="border-b border-nb-border bg-nb-muted/40 p-4 sm:p-6 lg:p-8">
        <header>
          <h1 className="text-xl font-semibold text-nb-fg">Report</h1>
          <p className="text-sm text-nb-muted-fg">Explore and manage your reports</p>
          <div className="mt-8 w-full gap-4 md:flex md:max-w-3xl md:items-stretch">
            <CardRoot className="w-full p-4 md:w-7/12">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-nb-border text-nb-muted-fg">
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path
                    d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-medium text-nb-fg">
                <button
                  type="button"
                  className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary"
                >
                  Documentation
                </button>
              </h3>
              <p className="text-sm text-nb-muted-fg">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </CardRoot>
            <CardRoot className="mt-4 w-full p-4 md:mt-0 md:w-5/12">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-nb-border text-nb-muted-fg">
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path
                    d="M12 3l3 6 6.5.9-4.7 4.6 1.1 6.5L12 18l-5.9 3 1.1-6.5L2.5 9.9 9 9l3-6z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-medium text-nb-fg">
                <button
                  type="button"
                  className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary"
                >
                  Models
                </button>
              </h3>
              <p className="text-sm text-nb-muted-fg">Lorem ipsum dolor sit amet.</p>
            </CardRoot>
          </div>
        </header>
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <main>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-nb-fg">Your reports</h2>
            <Button>
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
              <svg
                className="-ml-1 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
              Add report
            </Button>
          </div>
          <AccordionRoot defaultValue={['recent']} className="mt-6 space-y-6">
            <AccordionItem value="recent">
              <AccordionHeader>
                <AccordionTrigger className="text-sm font-medium text-nb-fg">
                  Recent (3)
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionPanel>
                <ReportCards items={reports.slice(0, 3)} />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="all">
              <AccordionHeader>
                <AccordionTrigger className="text-sm font-medium text-nb-fg">
                  All (6)
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionPanel>
                <ReportCards items={reports} />
              </AccordionPanel>
            </AccordionItem>
          </AccordionRoot>
        </main>
      </div>
    </div>
  );
}

/* ─── Shell 06: Hero header + sortable report list ─── */

export function PageShellList() {
  return (
    <div className="w-full">
      <div className="border-b border-nb-border bg-nb-muted/40 p-4 sm:p-6 lg:p-8">
        <header>
          <h1 className="text-xl font-semibold text-nb-fg">Report</h1>
          <p className="text-sm text-nb-muted-fg">Explore and manage your reports</p>
        </header>
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <main>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-nb-fg">Your reports</h2>
            <div className="flex items-center gap-2">
              <SelectRoot defaultValue="1">
                <SelectTrigger className="h-10 w-36">
                  <SelectValue />
                  <SelectIcon />
                </SelectTrigger>
                <SelectPortal>
                  <SelectPositioner>
                    <SelectPopup>
                      <SelectItem value="1">Name</SelectItem>
                      <SelectItem value="2">Last edited</SelectItem>
                      <SelectItem value="3">Size</SelectItem>
                    </SelectPopup>
                  </SelectPositioner>
                </SelectPortal>
              </SelectRoot>
              <Button>
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
                <svg
                  className="-ml-1 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
                Add report
              </Button>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {reports.map((r) => (
              <CardRoot key={r.name} className="p-4 transition-colors hover:bg-nb-muted/50">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4">
                    <h4 className="truncate text-sm font-medium text-nb-fg">
                      <button
                        type="button"
                        className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary"
                      >
                        {r.name}
                      </button>
                    </h4>
                    <p className="hidden truncate text-sm text-nb-muted-fg sm:block">
                      {r.description}
                    </p>
                  </div>
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
                  <svg
                    className="h-5 w-5 shrink-0 text-nb-muted-fg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </CardRoot>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
