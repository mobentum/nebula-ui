'use client';

import { cn } from '@nebula/ui';
import { pickColor } from '../internals/chart-colors';

export interface CategoryBarProps {
  values: number[];
  colors?: string[];
  markerValue?: number;
  showLabels?: boolean;
  ariaLabel?: string;
  className?: string;
}

export function CategoryBar({
  values,
  colors,
  markerValue,
  showLabels = false,
  ariaLabel,
  className,
}: CategoryBarProps) {
  const total = values.reduce((sum, value) => sum + value, 0) || 1;
  const label = ariaLabel ?? 'Category bar';

  return (
    <div className={cn('w-full', className)} role="img" aria-label={label}>
      <div className="relative flex h-3 w-full overflow-hidden rounded-full bg-nb-muted">
        {values.map((value, i) => (
          <div
            key={i}
            style={{
              width: `${(value / total) * 100}%`,
              backgroundColor: pickColor(i, colors),
            }}
          />
        ))}
        {markerValue != null && (
          <div
            className="absolute top-0 h-full w-0.5 -translate-x-1/2 rounded-full bg-nb-fg"
            style={{ left: `${markerValue}%` }}
          />
        )}
      </div>
      {showLabels && (
        <div className="mt-1 flex w-full justify-between text-xs text-nb-muted-fg">
          {values.map((value, i) => (
            <span key={i}>{Math.round((value / total) * 100)}%</span>
          ))}
        </div>
      )}
    </div>
  );
}
