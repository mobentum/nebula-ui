'use client';

import { forwardRef } from 'react';
import { ContextMenu as ContextMenuPrimitive } from '@base-ui/react/context-menu';
import { cn } from '../../lib/cn';

const Root = ContextMenuPrimitive.Root;

const Trigger = ContextMenuPrimitive.Trigger;

const Portal = ContextMenuPrimitive.Portal;

const Positioner = forwardRef<HTMLDivElement, ContextMenuPrimitive.Positioner.Props>(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Positioner
      ref={ref}
      className={cn('z-[60]', className)}
      {...props}
    />
  ),
);

Positioner.displayName = 'ContextMenu.Positioner';

const Popup = forwardRef<HTMLDivElement, ContextMenuPrimitive.Popup.Props>(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Popup
      ref={ref}
      className={cn(
        'z-[60] min-w-[8rem] overflow-hidden rounded-md border border-nb-border bg-nb-popover p-1 text-nb-popover-fg shadow-lg',
        className,
      )}
      {...props}
    />
  ),
);

Popup.displayName = 'ContextMenu.Popup';

const Item = forwardRef<HTMLDivElement, ContextMenuPrimitive.Item.Props>(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-nb-primary data-highlighted:bg-nb-primary data-highlighted:text-nb-primary-fg dark:data-highlighted:bg-nb-primary dark:data-highlighted:text-nb-primary-fg',
        className,
      )}
      {...props}
    />
  ),
);

Item.displayName = 'ContextMenu.Item';

const Separator = forwardRef<HTMLDivElement, ContextMenuPrimitive.Separator.Props>(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Separator
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-nb-accent', className)}
      {...props}
    />
  ),
);

Separator.displayName = 'ContextMenu.Separator';

const Arrow = forwardRef<HTMLDivElement, ContextMenuPrimitive.Arrow.Props>(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Arrow
      ref={ref}
      className={cn('fill-neutral-200', className)}
      {...props}
    />
  ),
);

Arrow.displayName = 'ContextMenu.Arrow';

const Group = forwardRef<HTMLDivElement, ContextMenuPrimitive.Group.Props>(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Group ref={ref} className={cn(className)} {...props} />
  ),
);

Group.displayName = 'ContextMenu.Group';

const GroupLabel = forwardRef<HTMLDivElement, ContextMenuPrimitive.GroupLabel.Props>(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.GroupLabel
      ref={ref}
      className={cn('px-2 py-1.5 text-xs font-semibold text-nb-muted-fg', className)}
      {...props}
    />
  ),
);

GroupLabel.displayName = 'ContextMenu.GroupLabel';

const RadioGroup = forwardRef<HTMLDivElement, ContextMenuPrimitive.RadioGroup.Props>(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.RadioGroup ref={ref} className={cn(className)} {...props} />
  ),
);

RadioGroup.displayName = 'ContextMenu.RadioGroup';

const RadioItem = forwardRef<HTMLDivElement, ContextMenuPrimitive.RadioItem.Props>(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-nb-primary data-highlighted:bg-nb-primary data-highlighted:text-nb-primary-fg dark:data-highlighted:bg-nb-primary dark:data-highlighted:text-nb-primary-fg',
        className,
      )}
      {...props}
    />
  ),
);

RadioItem.displayName = 'ContextMenu.RadioItem';

export { Root as ContextMenuRoot, Trigger as ContextMenuTrigger, Portal as ContextMenuPortal, Positioner as ContextMenuPositioner, Popup as ContextMenuPopup, Item as ContextMenuItem, Separator as ContextMenuSeparator, Arrow as ContextMenuArrow, Group as ContextMenuGroup, GroupLabel as ContextMenuGroupLabel, RadioGroup as ContextMenuRadioGroup, RadioItem as ContextMenuRadioItem };
export const ContextMenu = {
  Root, Trigger, Portal, Positioner, Popup, Item, Separator, Arrow,
  Group, GroupLabel, RadioGroup, RadioItem,
};
export type ContextMenuRootProps = ContextMenuPrimitive.Root.Props;
export type ContextMenuTriggerProps = ContextMenuPrimitive.Trigger.Props;
export type ContextMenuPortalProps = ContextMenuPrimitive.Portal.Props;
export type ContextMenuPositionerProps = ContextMenuPrimitive.Positioner.Props;
export type ContextMenuPopupProps = ContextMenuPrimitive.Popup.Props;
export type ContextMenuItemProps = ContextMenuPrimitive.Item.Props;
export type ContextMenuSeparatorProps = ContextMenuPrimitive.Separator.Props;
export type ContextMenuArrowProps = ContextMenuPrimitive.Arrow.Props;
export type ContextMenuGroupProps = ContextMenuPrimitive.Group.Props;
export type ContextMenuGroupLabelProps = ContextMenuPrimitive.GroupLabel.Props;
export type ContextMenuRadioGroupProps = ContextMenuPrimitive.RadioGroup.Props;
export type ContextMenuRadioItemProps = ContextMenuPrimitive.RadioItem.Props;
