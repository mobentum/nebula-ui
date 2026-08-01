'use client';

import { cn } from '@nebula/ui';

interface ChartLegendEntry {
  value?: string | number;
  color?: string;
}

export interface ChartLegendProps {
  payload?: ChartLegendEntry[];
  className?: string;
}

export function ChartLegend({ payload, className }: ChartLegendProps) {
  if (!payload || payload.length === 0) return null;

  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {payload.map((entry) => (
        <span
          key={String(entry.value)}
          className="inline-flex items-center gap-1.5 text-xs text-nb-muted-fg"
        >
          <span
            className="h-2 w-2 shrink-0 rounded-sm"
            style={{ backgroundColor: entry.color }}
          />
          {entry.value}
        </span>
      ))}
    </div>
  );
}
