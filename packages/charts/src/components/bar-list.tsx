'use client';

import { cn } from '@mobentum/nebula-ui';

export interface BarListData {
  name: string;
  value: number;
}

export interface BarListProps {
  data: BarListData[];
  valueFormatter?: (value: number) => string;
  color?: string;
  showAnimation?: boolean;
  className?: string;
}

export function BarList({
  data,
  valueFormatter,
  color = 'var(--color-nb-primary)',
  showAnimation = true,
  className,
}: BarListProps) {
  const format = valueFormatter ?? ((value: number) => value.toLocaleString());
  const max = Math.max(0, ...data.map((item) => item.value));

  return (
    <div className={cn('w-full space-y-3', className)}>
      {data.map((item) => (
        <div key={item.name}>
          <div className="mb-1 flex items-center justify-between gap-4 text-sm">
            <span className="truncate text-nb-fg">{item.name}</span>
            <span className="shrink-0 text-nb-muted-fg">{format(item.value)}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-nb-muted">
            <div
              className="h-full rounded-full"
              style={{
                width: `${max > 0 ? (item.value / max) * 100 : 0}%`,
                backgroundColor: color,
                transition: showAnimation ? 'width 0.4s ease' : undefined,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
