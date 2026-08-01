'use client';

import { Avatar, Input } from '@nebula/ui';
import { useState } from 'react';
import { navItems } from './data';
import { NavIcon } from './nav-icon';
import { NewResourceDrawer } from './new-resource-drawer';
import { BillingView } from './views/billing-view';
import { DashboardView } from './views/dashboard-view';
import { ProjectsView } from './views/projects-view';
import { SettingsView } from './views/settings-view';
import { TeamView } from './views/team-view';

export function SaaSTemplate({ fullPage = false }: { fullPage?: boolean }) {
  const [active, setActive] = useState('dashboard');
  return (
    <div
      className={`flex w-full overflow-hidden bg-nb-bg ${fullPage ? 'min-h-screen flex-1' : 'rounded-lg border border-nb-border'}`}
    >
      {/* Sidebar */}
      <aside className="hidden w-56 shrink-0 flex-col border-r border-nb-border bg-nb-card md:flex">
        <div className="flex h-14 items-center gap-2 border-b border-nb-border px-4">
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative logo, hidden from screen readers */}
          <svg
            className="h-5 w-5 text-nb-primary"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          </svg>
          <span className="text-sm font-bold text-nb-fg">Acme</span>
        </div>
        <nav className="flex-1 space-y-1 p-3" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              aria-current={active === item.id ? 'page' : undefined}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary ${
                active === item.id
                  ? 'bg-nb-primary/10 font-medium text-nb-primary'
                  : 'text-nb-muted-fg hover:bg-nb-accent hover:text-nb-fg'
              }`}
            >
              <NavIcon path={item.icon} />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="border-t border-nb-border p-4">
          <div className="flex items-center gap-3">
            <Avatar fallback="AL" className="h-8 w-8 text-xs" />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-nb-fg">Alex Lee</p>
              <p className="truncate text-xs text-nb-muted-fg">alex@acme.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile nav */}
        <nav
          className="flex items-center gap-1 overflow-x-auto border-b border-nb-border bg-nb-card px-2 py-1.5 md:hidden"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              aria-current={active === item.id ? 'page' : undefined}
              className={`flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary ${
                active === item.id
                  ? 'bg-nb-primary/10 text-nb-primary'
                  : 'text-nb-muted-fg hover:bg-nb-accent hover:text-nb-fg'
              }`}
            >
              <NavIcon path={item.icon} />
              {item.label}
            </button>
          ))}
        </nav>
        <header className="flex h-14 items-center justify-between border-b border-nb-border bg-nb-card px-4">
          <div className="md:hidden">
            <span className="text-sm font-bold text-nb-fg">Acme</span>
          </div>
          <div className="hidden w-full max-w-sm md:block">
            <Input placeholder="Search..." aria-label="Search" className="h-9" />
          </div>
          <div className="flex items-center gap-2">
            <NewResourceDrawer />
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-nb-fg capitalize">
                {navItems.find((n) => n.id === active)?.label}
              </h1>
              <p className="text-sm text-nb-muted-fg">
                {active === 'dashboard' && 'An overview of your workspace.'}
                {active === 'projects' && 'All of your resources in one place.'}
                {active === 'team' && 'Manage members and their roles.'}
                {active === 'billing' && 'Manage your plan and invoices.'}
                {active === 'settings' && 'Workspace preferences and governance.'}
              </p>
            </div>
          </div>
          {active === 'dashboard' && <DashboardView />}
          {active === 'team' && <TeamView />}
          {active === 'billing' && <BillingView />}
          {active === 'settings' && <SettingsView />}
          {active === 'projects' && <ProjectsView />}
        </main>
      </div>
    </div>
  );
}
