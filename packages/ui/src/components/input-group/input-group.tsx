'use client';

import { forwardRef, type ComponentProps } from 'react';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex w-full items-center [&>*:not(:first-child)]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none', className)}
      {...props}
    />
  ),
);

Root.displayName = 'InputGroup.Root';

const Addon = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'inline-flex h-10 items-center rounded-md border border-nb-border bg-nb-muted px-3 text-sm text-nb-muted-fg',
        className,
      )}
      {...props}
    />
  ),
);

Addon.displayName = 'InputGroup.Addon';

export { Root as InputGroupRoot, Addon as InputGroupAddon };
export const InputGroup = { Root, Addon };
export type InputGroupRootProps = ComponentProps<'div'>;
export type InputGroupAddonProps = ComponentProps<'div'>;
