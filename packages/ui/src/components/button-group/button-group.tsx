'use client';

import { forwardRef, type ComponentProps } from 'react';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-md [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:first-child)]:-ml-px [&>:not(:first-child)]:rounded-l-none [&>:not(:last-child)]:rounded-r-none',
        className,
      )}
      {...props}
    />
  ),
);

Root.displayName = 'ButtonGroup.Root';

export { Root as ButtonGroupRoot };
export const ButtonGroup = { Root };
export type ButtonGroupRootProps = ComponentProps<'div'>;
