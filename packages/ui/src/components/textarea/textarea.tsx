'use client';

import { forwardRef } from 'react';
import { Input as InputPrimitive } from '@base-ui/react/input';
import { cn } from '../../lib/cn';

export interface TextareaProps extends Omit<InputPrimitive.Props, 'render'> {
  rows?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows, ...props }, ref) => (
    <InputPrimitive
      ref={ref}
      render={<textarea rows={rows} />}
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-nb-border bg-nb-bg px-2.5 py-1.5 text-sm placeholder:text-nb-muted-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed resize-y',
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = 'Textarea';

export { Textarea };
