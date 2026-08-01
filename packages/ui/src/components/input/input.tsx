'use client';

import { forwardRef } from 'react';
import { Input as InputPrimitive } from '@base-ui/react/input';
import { cn } from '../../lib/cn';

const Input = forwardRef<HTMLInputElement, InputPrimitive.Props>(
  ({ className, ...props }, ref) => (
    <InputPrimitive
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md border border-nb-border bg-nb-bg px-2.5 py-1.5 text-sm placeholder:text-nb-muted-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = 'Input';

export { Input };
export type InputProps = InputPrimitive.Props;
