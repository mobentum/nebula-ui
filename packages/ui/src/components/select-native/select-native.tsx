'use client';

import { forwardRef, type SelectHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface SelectNativeProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export const SelectNative = forwardRef<HTMLSelectElement, SelectNativeProps>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md border border-nb-input bg-nb-bg px-2.5 py-1.5 text-sm ring-offset-nb-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  ),
);
SelectNative.displayName = 'SelectNative';
