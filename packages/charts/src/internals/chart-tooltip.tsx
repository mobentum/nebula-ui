'use client';

import { cn } from '@mobentum/nebula-ui';
import { defaultValueFormatter } from './chart-colors';

interface ChartTooltipEntry {
  dataKey?: string | number;
  name?: string | number;
  value?: number | string | null;
  color?: string;
  payload?: { fill?: string };
}

export interface ChartTooltipProps {
  active?: boolean;
  label?: string | number;
  payload?: ChartTooltipEntry[];
  valueFormatter?: (value: number | string) => string;
  className?: string;
}

export function ChartTooltip({
  active,
  label,
  payload,
  valueFormatter,
  className,
}: ChartTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  const format = valueFormatter ?? defaultValueFormatter;

  return (
    <div
      className={cn(
        'rounded-lg border border-nb-border bg-nb-card px-3 py-2 shadow-lg',
        className,
      )}
    >
      {label !== undefined && (
        <p className="mb-1 text-xs font-medium text-nb-fg">{label}</p>
      )}
      <div className="space-y-1">
        {payload.map((entry) => {
          const color = entry.color ?? entry.payload?.fill;
          return (
            <div
              key={String(entry.dataKey ?? entry.name)}
              className="flex items-center gap-2 text-xs text-nb-muted-fg"
            >
              <span
                className="h-2 w-2 shrink-0 rounded-sm"
                style={{ backgroundColor: color }}
              />
              <span>{entry.name}</span>
              <span className="ml-auto pl-4 font-medium text-nb-fg">
                {entry.value != null ? format(entry.value) : '—'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
