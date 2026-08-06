'use client';

import type { ReactNode } from 'react';
import { cn } from '@mobentum/nebula-ui';

export interface PaletteItem {
  type: string;
  label: string;
  description?: string;
  icon?: ReactNode;
}

export interface NodePaletteProps {
  items: PaletteItem[];
  className?: string;
}

export function NodePalette({ items, className }: NodePaletteProps) {
  return (
    <div className={cn('space-y-2', className)} aria-label="Node palette">
      {items.map((item) => (
        <button
          key={item.type}
          type="button"
          draggable
          onDragStart={(event) => {
            event.dataTransfer.setData('application/reactflow', item.type);
            event.dataTransfer.effectAllowed = 'move';
          }}
          className="flex w-full cursor-grab items-center gap-2 rounded-md border border-nb-border bg-nb-card px-3 py-2 text-sm text-nb-fg transition-colors hover:border-nb-primary/50 hover:bg-nb-accent active:cursor-grabbing"
        >
          {item.icon && (
            <span className="flex h-6 w-6 items-center justify-center text-nb-muted-fg" aria-hidden>
              {item.icon}
            </span>
          )}
          <span className="min-w-0 text-left">
            <span className="block truncate font-medium">{item.label}</span>
            {item.description && (
              <span className="block truncate text-xs text-nb-muted-fg">
                {item.description}
              </span>
            )}
          </span>
        </button>
      ))}
    </div>
  );
}

NodePalette.displayName = 'NodePalette';
