'use client';

import { forwardRef, type ComponentProps } from 'react';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex h-10 items-center gap-1 rounded-md border border-nb-border bg-nb-bg p-1',
        className,
      )}
      {...props}
    />
  ),
);

Root.displayName = 'Menubar.Root';

const Item = forwardRef<HTMLButtonElement, ComponentProps<'button'>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-colors hover:bg-nb-accent hover:text-nb-accent-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    />
  ),
);

Item.displayName = 'Menubar.Item';

const Separator = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-nb-accent', className)}
      {...props}
    />
  ),
);

Separator.displayName = 'Menubar.Separator';

const Label = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-2 py-1.5 text-xs font-semibold text-nb-muted-fg', className)}
      {...props}
    />
  ),
);

Label.displayName = 'Menubar.Label';

export { Root as MenubarRoot, Item as MenubarItem, Separator as MenubarSeparator, Label as MenubarLabel };
export const Menubar = { Root, Item, Separator, Label };
export type MenubarRootProps = ComponentProps<'div'>;
export type MenubarItemProps = ComponentProps<'button'>;
export type MenubarSeparatorProps = ComponentProps<'div'>;
export type MenubarLabelProps = ComponentProps<'div'>;
