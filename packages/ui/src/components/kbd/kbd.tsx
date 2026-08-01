'use client';

import { forwardRef, type ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ className, children, ...props }, ref) => (
    <kbd
      ref={ref}
      className={cn(
        'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-nb-muted px-1.5 font-mono text-[10px] font-medium text-nb-muted-fg',
        className,
      )}
      {...props}
    >
      {children}
    </kbd>
  ),
);
Kbd.displayName = 'Kbd';

export { Kbd };
export type { KbdProps };
