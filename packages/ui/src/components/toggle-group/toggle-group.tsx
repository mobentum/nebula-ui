'use client';

import { forwardRef } from 'react';
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui/react/toggle-group';
import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLDivElement, ToggleGroupPrimitive.Props<string>>(
  ({ className, ...props }, ref) => (
    <ToggleGroupPrimitive
      ref={ref}
        className={cn('inline-flex items-center gap-0 ltr:-space-x-px rtl:space-x-reverse rtl:-space-x-px rounded-md border', className)}
      {...props}
    />
  ),
);

Root.displayName = 'ToggleGroup.Root';

const Item = forwardRef<HTMLButtonElement, TogglePrimitive.Props<string>>(
  ({ className, ...props }, ref) => (
    <TogglePrimitive
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-none border border-nb-border bg-transparent px-3 py-2 text-sm font-medium text-nb-fg hover:bg-nb-muted first:rounded-s-md last:rounded-e-md data-[pressed]:bg-nb-accent data-[pressed]:text-nb-accent-fg aria-[pressed=true]:bg-nb-accent aria-[pressed=true]:text-nb-accent-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    />
  ),
);

Item.displayName = 'ToggleGroup.Item';

export { Root as ToggleGroupRoot, Item as ToggleGroupItem };
export const ToggleGroup = {
  Root,
  Item,
};

export type ToggleGroupRootProps = ToggleGroupPrimitive.Props<string>;
export type ToggleGroupItemProps = TogglePrimitive.Props<string>;
