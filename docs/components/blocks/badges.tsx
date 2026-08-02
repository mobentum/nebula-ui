'use client';

import { Badge, CardRoot } from '@nebula/ui';

const colors = ['primary', 'success', 'warning', 'danger', 'info'] as const;
const variants = ['solid', 'outline', 'subtle'] as const;

export function BadgeShowcase() {
  return (
    <CardRoot className="w-full max-w-2xl p-6">
      <div className="space-y-5">
        {variants.map((variant) => (
          <div key={variant} className="flex flex-wrap items-center gap-2">
            <span className="w-16 text-xs font-medium uppercase tracking-wide text-nb-muted-fg">
              {variant}
            </span>
            {colors.map((color) => (
              <Badge key={color} variant={variant} color={color}>
                {color}
              </Badge>
            ))}
          </div>
        ))}
      </div>
    </CardRoot>
  );
}

export function BadgeStatuses() {
  return (
    <CardRoot className="w-full max-w-2xl p-6">
      <h3 className="text-base font-semibold text-nb-fg">Statuses</h3>
      <div className="mt-4 space-y-3">
        {[
          { label: 'Deployment live', color: 'success' as const, note: 'Last pushed 2h ago' },
          { label: 'Rate limited', color: 'warning' as const, note: 'Resets in 4 minutes' },
          { label: 'Failed check', color: 'danger' as const, note: 'View the run logs' },
          { label: 'Processing', color: 'info' as const, note: 'Job #4821 in queue' },
          { label: 'Draft', color: 'primary' as const, note: 'Saved 3 minutes ago' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <Badge variant="subtle" color={item.color}>
              {item.label}
            </Badge>
            <span className="text-xs text-nb-muted-fg">{item.note}</span>
          </div>
        ))}
      </div>
    </CardRoot>
  );
}
