'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface DividerRootProps extends HTMLAttributes<HTMLDivElement> {}

const Root = forwardRef<HTMLDivElement, DividerRootProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      aria-orientation="horizontal"
      className={cn('flex items-center gap-3 text-xs font-medium text-nb-muted-foreground', className)}
      {...props}
    >
      {children || <div className="h-px flex-1 bg-nb-border" />}
    </div>
  ),
);
Root.displayName = 'Divider.Root';

export interface DividerLineProps extends HTMLAttributes<HTMLDivElement> {}

const Line = forwardRef<HTMLDivElement, DividerLineProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('h-px flex-1 bg-nb-border', className)} {...props} />
  ),
);
Line.displayName = 'Divider.Line';

export interface DividerLabelProps extends HTMLAttributes<HTMLSpanElement> {}

const Label = forwardRef<HTMLSpanElement, DividerLabelProps>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn('shrink-0', className)} {...props} />
  ),
);
Label.displayName = 'Divider.Label';

export { Root as DividerRoot, Line as DividerLine, Label as DividerLabel };
export const Divider = { Root, Line, Label };
