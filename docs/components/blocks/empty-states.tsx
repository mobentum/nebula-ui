'use client';

import { Button } from '@mobentum/nebula-ui';

export function EmptyStateCentered() {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-lg border border-dashed border-nb-border px-6 py-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-nb-muted text-nb-muted-fg">
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <rect x="3" y="4" width="18" height="16" rx="2" strokeLinecap="round" />
          <path d="M3 9h18" strokeLinecap="round" />
        </svg>
      </div>
      <h3 className="mt-4 text-base font-medium text-nb-fg">No projects yet</h3>
      <p className="mt-1 max-w-sm text-sm text-nb-muted-fg">
        Create your first project to start building and tracking your work.
      </p>
      <Button className="mt-6">
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
        <svg
          className="mr-2 h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
        New project
      </Button>
    </div>
  );
}

export function EmptyStateInline() {
  return (
    <div className="flex w-full items-center gap-4 rounded-lg border border-dashed border-nb-border p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-nb-muted text-nb-muted-fg">
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <circle cx="11" cy="11" r="8" strokeLinecap="round" />
          <path d="m21 21-4.3-4.3" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium text-nb-fg">No results found</h4>
        <p className="mt-0.5 text-sm text-nb-muted-fg">Try adjusting your search or filters.</p>
      </div>
      <Button size="sm" variant="outline">
        Clear filters
      </Button>
    </div>
  );
}

export function EmptyStateFullPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-lg border border-dashed border-nb-border bg-nb-bg/50 px-6 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-nb-accent">
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
        <svg
          className="h-6 w-6 text-nb-muted-fg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M4 7h16M4 12h10M4 17h7" strokeLinecap="round" />
        </svg>
      </div>
      <h3 className="mt-4 text-base font-semibold text-nb-fg">No projects yet</h3>
      <p className="mt-1 max-w-sm text-sm text-nb-muted-fg">
        Get started by creating your first project. It will appear here with live metrics and
        deployments.
      </p>
      <div className="mt-5 flex items-center gap-2">
        <Button>Create project</Button>
        <Button variant="outline">Import existing</Button>
      </div>
    </div>
  );
}
