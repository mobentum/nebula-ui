'use client';

import { Avatar, Badge, Button, Input, Kbd } from '@nebula/ui';
import {
  Bell,
  CaretRight,
  CreditCard,
  FolderOpen,
  GearSix,
  HouseSimple,
  List,
  MagnifyingGlass,
  Planet,
  UsersThree,
} from '@phosphor-icons/react';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: HouseSimple },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'team', label: 'Team', icon: UsersThree },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'settings', label: 'Settings', icon: GearSix },
];

const navLinkClass = (active: boolean) =>
  `flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary ${
    active
      ? 'bg-nb-primary/10 font-medium text-nb-primary'
      : 'text-nb-muted-fg hover:bg-nb-accent hover:text-nb-fg'
  }`;

/* ───────────────────────── 1. Sidebar ───────────────────────── */

export function SidebarNav() {
  return (
    <div className="flex h-[420px] w-full max-w-64 overflow-hidden rounded-lg border border-nb-border bg-nb-card">
      <aside className="flex w-full flex-col">
        <div className="flex h-12 items-center gap-2 border-b border-nb-border px-4">
          <Planet className="h-5 w-5 text-nb-primary" aria-hidden />
          <span className="text-sm font-bold text-nb-fg">Acme</span>
        </div>
        <nav className="flex-1 space-y-1 p-3" aria-label="Primary">
          <p className="px-3 pb-1 pt-2 text-xs font-medium uppercase tracking-wide text-nb-muted-fg">
            Workspace
          </p>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                type="button"
                key={item.id}
                data-active={item.id === 'dashboard' ? true : undefined}
                className={navLinkClass(item.id === 'dashboard')}
              >
                <Icon className="h-4 w-4" aria-hidden />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="border-t border-nb-border p-3">
          <div className="flex items-center gap-3 rounded-md px-2 py-1.5">
            <Avatar fallback="AL" className="h-8 w-8 text-xs" />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-nb-fg">Alex Lee</p>
              <p className="truncate text-xs text-nb-muted-fg">alex@acme.com</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

/* ───────────────────────── 2. Compact sidebar ───────────────────────── */

export function CompactSidebarNav() {
  return (
    <div className="flex h-[420px] w-full max-w-16 overflow-hidden rounded-lg border border-nb-border bg-nb-card">
      <aside className="flex w-full flex-col items-center py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-nb-primary/10 text-nb-primary">
          <Planet className="h-5 w-5" aria-hidden />
        </div>
        <nav className="mt-4 flex flex-1 flex-col items-center gap-1" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                type="button"
                key={item.id}
                aria-label={item.label}
                data-active={item.id === 'projects' ? true : undefined}
                title={item.label}
                className={`flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary ${
                  item.id === 'projects'
                    ? 'bg-nb-primary/10 text-nb-primary'
                    : 'text-nb-muted-fg hover:bg-nb-accent hover:text-nb-fg'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden />
              </button>
            );
          })}
        </nav>
        <div className="mt-2 flex flex-col items-center gap-1">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md text-nb-muted-fg transition-colors hover:bg-nb-accent hover:text-nb-fg"
            aria-label="Settings"
          >
            <GearSix className="h-4 w-4" aria-hidden />
          </button>
          <Avatar fallback="AL" className="h-8 w-8 text-xs" />
        </div>
      </aside>
    </div>
  );
}

/* ───────────────────────── 3. Top nav ───────────────────────── */

export function TopNav() {
  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-lg border border-nb-border bg-nb-card">
      <header className="flex h-14 items-center gap-4 border-b border-nb-border px-4">
        <div className="flex items-center gap-2">
          <Planet className="h-5 w-5 text-nb-primary" aria-hidden />
          <span className="text-sm font-bold text-nb-fg">Acme</span>
        </div>
        <nav className="ml-4 hidden items-center gap-1 sm:flex" aria-label="Primary">
          {NAV_ITEMS.slice(0, 4).map((item) => (
            <button
              type="button"
              key={item.id}
              data-active={item.id === 'dashboard' ? true : undefined}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                item.id === 'dashboard'
                  ? 'bg-nb-primary/10 text-nb-primary'
                  : 'text-nb-muted-fg hover:bg-nb-accent hover:text-nb-fg'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden md:block">
            <MagnifyingGlass
              className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-nb-muted-fg"
              aria-hidden
            />
            <Input aria-label="Search" placeholder="Search…" className="h-8 w-48 pl-8" />
          </div>
          <button
            type="button"
            className="relative flex h-9 w-9 items-center justify-center rounded-md text-nb-muted-fg transition-colors hover:bg-nb-accent hover:text-nb-fg"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" aria-hidden />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-nb-primary" />
          </button>
          <Avatar fallback="AL" className="h-8 w-8 text-xs" />
        </div>
      </header>
      <div className="flex h-32 items-center justify-center bg-nb-bg/50">
        <p className="text-sm text-nb-muted-fg">Page content</p>
      </div>
    </div>
  );
}

/* ───────────────────────── 4. Floating nav ───────────────────────── */

export function FloatingNav() {
  return (
    <div className="relative flex h-[320px] w-full max-w-3xl items-start justify-center overflow-hidden rounded-lg border border-nb-border bg-nb-bg/60 p-6">
      <nav
        aria-label="Primary"
        className="mx-auto flex items-center gap-1 rounded-full border border-nb-border bg-nb-card/90 px-2 py-1.5 shadow-lg backdrop-blur"
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <button
              type="button"
              key={item.id}
              data-active={item.id === 'dashboard' ? true : undefined}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                item.id === 'dashboard'
                  ? 'bg-nb-primary text-nb-primary-fg'
                  : 'text-nb-muted-fg hover:bg-nb-accent hover:text-nb-fg'
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden />
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

/* ───────────────────────── 5. Tabs nav ───────────────────────── */

export function TabsNav() {
  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-lg border border-nb-border bg-nb-card">
      <div className="flex items-center gap-2 border-b border-nb-border px-4 pt-3">
        {NAV_ITEMS.slice(0, 4).map((item) => {
          const Icon = item.icon;
          return (
            <button
              type="button"
              key={item.id}
              data-active={item.id === 'dashboard' ? true : undefined}
              className={`-mb-px flex items-center gap-2 border-b-2 px-3 py-2 text-sm font-medium transition-colors ${
                item.id === 'dashboard'
                  ? 'border-nb-primary text-nb-fg'
                  : 'border-transparent text-nb-muted-fg hover:text-nb-fg'
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden />
              {item.label}
            </button>
          );
        })}
        <div className="ml-auto pb-2">
          <Button size="sm">New</Button>
        </div>
      </div>
      <div className="flex h-40 items-center justify-center bg-nb-bg/50">
        <p className="text-sm text-nb-muted-fg">Tab content</p>
      </div>
    </div>
  );
}

/* ───────────────────────── 6. Sidebar + header ───────────────────────── */

export function SidebarHeaderNav() {
  return (
    <div className="flex h-[420px] w-full max-w-4xl overflow-hidden rounded-lg border border-nb-border bg-nb-card">
      <aside className="hidden w-52 shrink-0 flex-col border-r border-nb-border sm:flex">
        <div className="flex h-12 items-center gap-2 border-b border-nb-border px-4">
          <Planet className="h-5 w-5 text-nb-primary" aria-hidden />
          <span className="text-sm font-bold text-nb-fg">Acme</span>
        </div>
        <nav className="flex-1 space-y-1 p-3" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                type="button"
                key={item.id}
                data-active={item.id === 'projects' ? true : undefined}
                className={navLinkClass(item.id === 'projects')}
              >
                <Icon className="h-4 w-4" aria-hidden />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="border-t border-nb-border p-3">
          <Avatar fallback="AL" className="h-8 w-8 text-xs" />
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-12 items-center gap-3 border-b border-nb-border px-4">
          <List className="h-4 w-4 text-nb-muted-fg sm:hidden" aria-hidden />
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-nb-muted-fg"
          >
            <button type="button" className="hover:text-nb-fg">
              Workspace
            </button>
            <CaretRight className="h-3 w-3" aria-hidden />
            <span className="font-medium text-nb-fg">Projects</span>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Badge variant="outline">Pro</Badge>
            <Avatar fallback="AL" className="h-7 w-7 text-xs" />
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-3 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-nb-fg">Projects</h3>
              <p className="text-sm text-nb-muted-fg">All of your resources in one place.</p>
            </div>
            <Button size="sm">New project</Button>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-3">
            <div className="rounded-lg border border-nb-border bg-nb-bg/50" />
            <div className="rounded-lg border border-nb-border bg-nb-bg/50" />
            <div className="rounded-lg border border-nb-border bg-nb-bg/50" />
            <div className="rounded-lg border border-nb-border bg-nb-bg/50" />
          </div>
        </main>
      </div>
    </div>
  );
}

/* ───────────────────────── 7. Command-palette nav ───────────────────────── */

export function CommandNav() {
  return (
    <div className="flex h-[320px] w-full max-w-2xl flex-col items-center justify-start p-8">
      <div className="flex w-full items-center gap-2 rounded-lg border border-nb-border bg-nb-card px-3 py-2.5 shadow-lg">
        <MagnifyingGlass className="h-4 w-4 text-nb-muted-fg" aria-hidden />
        <span className="flex-1 text-sm text-nb-muted-fg">Search the workspace…</span>
        <span className="flex items-center gap-0.5">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </span>
      </div>
      <div className="mt-2 w-full overflow-hidden rounded-lg border border-nb-border bg-nb-card py-2 shadow-lg">
        <p className="px-3 pb-1 pt-2 text-xs font-medium uppercase tracking-wide text-nb-muted-fg">
          Quick actions
        </p>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <button
              type="button"
              key={item.id}
              className="flex items-center gap-3 px-3 py-2 text-sm text-nb-fg transition-colors hover:bg-nb-accent"
            >
              <Icon className="h-4 w-4 text-nb-muted-fg" aria-hidden />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
