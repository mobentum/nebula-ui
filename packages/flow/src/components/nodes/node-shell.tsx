'use client';

import { Handle, Position } from '@xyflow/react';
import { cn } from '@mobentum/nebula-ui';

export type NodeStatus = 'idle' | 'running' | 'success' | 'error' | 'pending';

const statusStyles: Record<NodeStatus, string> = {
  idle: 'bg-nb-muted-fg',
  running: 'bg-nb-primary',
  success: 'bg-nb-success',
  error: 'bg-nb-destructive',
  pending: 'bg-nb-warning',
};

const statusLabels: Record<NodeStatus, string> = {
  idle: 'Idle',
  running: 'Running',
  success: 'Success',
  error: 'Error',
  pending: 'Pending',
};

export interface NodeShellProps {
  selected?: boolean;
  label?: string;
  badgeClassName?: string;
  title?: string;
  subtitle?: string;
  icon?: string;
  status?: NodeStatus;
  source?: boolean;
  target?: boolean;
  className?: string;
}

export function NodeShell({
  selected,
  label,
  badgeClassName,
  title,
  subtitle,
  icon,
  status,
  source = true,
  target = true,
  className,
}: NodeShellProps) {
  return (
    <div
      className={cn(
        'min-w-44 rounded-lg border border-nb-border bg-nb-card p-3 shadow-sm transition-shadow',
        selected && 'border-nb-primary ring-2 ring-nb-primary',
        className,
      )}
    >
      {target && (
        <Handle type="target" position={Position.Left} />
      )}
      <div className="flex items-center gap-1.5">
        {icon && (
          <span className="text-sm leading-none" aria-hidden>
            {icon}
          </span>
        )}
        {label && (
          <span
            className={cn(
              'rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
              badgeClassName ?? 'bg-nb-accent text-nb-accent-fg',
            )}
          >
            {label}
          </span>
        )}
        {status && (
          <span
            className="ml-auto flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-nb-muted-fg"
            aria-label={`Status: ${statusLabels[status]}`}
          >
            <span className={cn('h-1.5 w-1.5 rounded-full', statusStyles[status])} />
            {statusLabels[status]}
          </span>
        )}
      </div>
      {title && <p className="mt-1.5 text-sm font-medium text-nb-fg">{title}</p>}
      {subtitle && <p className="text-xs text-nb-muted-fg">{subtitle}</p>}
      {source && (
        <Handle type="source" position={Position.Right} />
      )}
    </div>
  );
}

NodeShell.displayName = 'NodeShell';
