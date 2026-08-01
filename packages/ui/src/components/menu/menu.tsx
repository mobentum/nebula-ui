'use client';

import { forwardRef } from 'react';
import { Menu as MenuPrimitive } from '@base-ui/react/menu';
import { cn } from '../../lib/cn';

const Root = MenuPrimitive.Root;

const Trigger = MenuPrimitive.Trigger;

const Popup = forwardRef<HTMLDivElement, MenuPrimitive.Popup.Props>(
  ({ className, ...props }, ref) => (
    <MenuPrimitive.Popup
      ref={ref}
      className={cn(
        'z-[60] min-w-[8rem] overflow-hidden rounded-md border border-nb-border bg-nb-popover p-1 text-nb-popover-fg shadow-lg',
        className,
      )}
      {...props}
    />
  ),
);

Popup.displayName = 'Menu.Popup';

const Item = forwardRef<HTMLDivElement, MenuPrimitive.Item.Props>(
  ({ className, ...props }, ref) => (
    <MenuPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-nb-primary data-highlighted:bg-nb-primary data-highlighted:text-nb-primary-fg',
        className,
      )}
      {...props}
    />
  ),
);

Item.displayName = 'Menu.Item';

const Separator = forwardRef<HTMLDivElement, MenuPrimitive.Separator.Props>(
  ({ className, ...props }, ref) => (
    <MenuPrimitive.Separator
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-nb-accent', className)}
      {...props}
    />
  ),
);

Separator.displayName = 'Menu.Separator';

const Arrow = forwardRef<HTMLDivElement, MenuPrimitive.Arrow.Props>(
  ({ className, ...props }, ref) => (
    <MenuPrimitive.Arrow
      ref={ref}
      className={cn('fill-neutral-200', className)}
      {...props}
    />
  ),
);

Arrow.displayName = 'Menu.Arrow';

const Group = forwardRef<HTMLDivElement, MenuPrimitive.Group.Props>(
  ({ className, ...props }, ref) => (
    <MenuPrimitive.Group ref={ref} className={cn(className)} {...props} />
  ),
);

Group.displayName = 'Menu.Group';

const GroupLabel = forwardRef<HTMLDivElement, MenuPrimitive.GroupLabel.Props>(
  ({ className, ...props }, ref) => (
    <MenuPrimitive.GroupLabel
      ref={ref}
      className={cn('px-2 py-1.5 text-xs font-semibold text-nb-muted-fg', className)}
      {...props}
    />
  ),
);

GroupLabel.displayName = 'Menu.GroupLabel';

const RadioGroup = forwardRef<HTMLDivElement, MenuPrimitive.RadioGroup.Props>(
  ({ className, ...props }, ref) => (
    <MenuPrimitive.RadioGroup ref={ref} className={cn(className)} {...props} />
  ),
);

RadioGroup.displayName = 'Menu.RadioGroup';

const RadioItem = forwardRef<HTMLDivElement, MenuPrimitive.RadioItem.Props>(
  ({ className, ...props }, ref) => (
    <MenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-nb-primary data-highlighted:bg-nb-primary data-highlighted:text-nb-primary-fg',
        className,
      )}
      {...props}
    />
  ),
);

RadioItem.displayName = 'Menu.RadioItem';

const Positioner = forwardRef<HTMLDivElement, MenuPrimitive.Positioner.Props>(
  ({ className, ...props }, ref) => (
    <MenuPrimitive.Positioner
      ref={ref}
      className={cn('z-[60]', className)}
      {...props}
    />
  ),
);

Positioner.displayName = 'Menu.Positioner';

const Portal = forwardRef<HTMLDivElement, MenuPrimitive.Portal.Props>(
  ({ className, ...props }, ref) => (
    <MenuPrimitive.Portal
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  ),
);

Portal.displayName = 'Menu.Portal';

const Backdrop = MenuPrimitive.Backdrop;
const CheckboxItem = MenuPrimitive.CheckboxItem;
const CheckboxItemIndicator = MenuPrimitive.CheckboxItemIndicator;
const LinkItem = MenuPrimitive.LinkItem;
const RadioItemIndicator = MenuPrimitive.RadioItemIndicator;
const SubmenuRoot = MenuPrimitive.SubmenuRoot;
const SubmenuTrigger = MenuPrimitive.SubmenuTrigger;
const Viewport = MenuPrimitive.Viewport;

export { Root as MenuRoot, Trigger as MenuTrigger, Popup as MenuPopup, Item as MenuItem, Separator as MenuSeparator, Arrow as MenuArrow, Group as MenuGroup, GroupLabel as MenuGroupLabel, RadioGroup as MenuRadioGroup, RadioItem as MenuRadioItem, Positioner as MenuPositioner, Portal as MenuPortal, Backdrop as MenuBackdrop, CheckboxItem as MenuCheckboxItem, CheckboxItemIndicator as MenuCheckboxItemIndicator, LinkItem as MenuLinkItem, RadioItemIndicator as MenuRadioItemIndicator, SubmenuRoot as MenuSubmenuRoot, SubmenuTrigger as MenuSubmenuTrigger, Viewport as MenuViewport };
export const Menu = {
  Root,
  Trigger,
  Popup,
  Item,
  Separator,
  Arrow,
  Group,
  GroupLabel,
  RadioGroup,
  RadioItem,
  Positioner,
  Portal,
  Backdrop,
  CheckboxItem,
  CheckboxItemIndicator,
  LinkItem,
  RadioItemIndicator,
  SubmenuRoot,
  SubmenuTrigger,
  Viewport,
};

export type MenuRootProps = MenuPrimitive.Root.Props;
export type MenuTriggerProps = MenuPrimitive.Trigger.Props;
export type MenuPopupProps = MenuPrimitive.Popup.Props;
export type MenuItemProps = MenuPrimitive.Item.Props;
export type MenuSeparatorProps = MenuPrimitive.Separator.Props;
export type MenuArrowProps = MenuPrimitive.Arrow.Props;
export type MenuGroupProps = MenuPrimitive.Group.Props;
export type MenuGroupLabelProps = MenuPrimitive.GroupLabel.Props;
export type MenuRadioGroupProps = MenuPrimitive.RadioGroup.Props;
export type MenuRadioItemProps = MenuPrimitive.RadioItem.Props;
export type MenuPositionerProps = MenuPrimitive.Positioner.Props;
export type MenuPortalProps = MenuPrimitive.Portal.Props;
export type MenuBackdropProps = MenuPrimitive.Backdrop.Props;
export type MenuCheckboxItemProps = MenuPrimitive.CheckboxItem.Props;
export type MenuCheckboxItemIndicatorProps = MenuPrimitive.CheckboxItemIndicator.Props;
export type MenuLinkItemProps = MenuPrimitive.LinkItem.Props;
export type MenuRadioItemIndicatorProps = MenuPrimitive.RadioItemIndicator.Props;
export type MenuSubmenuRootProps = MenuPrimitive.SubmenuRoot.Props;
export type MenuSubmenuTriggerProps = MenuPrimitive.SubmenuTrigger.Props;
export type MenuViewportProps = MenuPrimitive.Viewport.Props;
