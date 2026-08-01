'use client';

import { Button } from '@nebula/ui';

export function BannerDismissible() {
  return (
    <div className="w-full rounded-lg border border-nb-border bg-nb-card p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-nb-primary/10 text-nb-primary">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M12 9v4m0 4h.01" strokeLinecap="round" />
            <circle cx="12" cy="12" r="9" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-medium text-nb-fg">New feature available</h4>
          <p className="mt-1 text-sm text-nb-muted-fg">
            Try the redesigned dashboard with faster insights and better filters.
          </p>
          <div className="mt-3 flex items-center gap-3">
            <Button size="sm">View what's new</Button>
            <Button size="sm" variant="ghost">Dismiss</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BannerAlert() {
  return (
    <div className="w-full rounded-lg border border-nb-destructive/30 bg-nb-destructive/5 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-nb-destructive/10 text-nb-destructive">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M12 9v4m0 4h.01" strokeLinecap="round" />
            <circle cx="12" cy="12" r="9" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-medium text-nb-fg">Action required</h4>
          <p className="mt-1 text-sm text-nb-muted-fg">
            Your payment method is expiring soon. Update it to avoid service interruption.
          </p>
          <div className="mt-3">
            <Button size="sm" variant="danger">Update payment</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
