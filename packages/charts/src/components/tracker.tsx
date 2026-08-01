'use client';

import { cn } from '@nebula/ui';

export interface TrackerData {
  color?: string;
  tooltip?: string;
}

export interface TrackerProps {
  data: TrackerData[];
  color?: string;
  ariaLabel?: string;
  className?: string;
}

export function Tracker({
  data,
  color = 'var(--color-nb-accent)',
  ariaLabel,
  className,
}: TrackerProps) {
  const label = ariaLabel ?? 'Activity tracker';

  return (
    <div className={cn('flex w-full gap-0.5', className)} role="img" aria-label={label}>
      {data.map((cell, i) => (
        <div
          key={i}
          aria-label={cell.tooltip}
          className="h-8 flex-1 rounded-sm"
          style={{ backgroundColor: cell.color ?? color }}
        />
      ))}
    </div>
  );
}
