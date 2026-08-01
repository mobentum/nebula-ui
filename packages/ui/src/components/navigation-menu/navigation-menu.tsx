'use client';

import { forwardRef } from 'react';
import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLDivElement, NavigationMenuPrimitive.Root.Props>(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex max-w-max flex-1 items-center justify-center',
        className,
      )}
      {...props}
    />
  ),
);

Root.displayName = 'NavigationMenu.Root';

const List = forwardRef<HTMLUListElement, NavigationMenuPrimitive.List.Props>(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List
      ref={ref}
      className={cn(
        'group flex flex-1 list-none items-center justify-center gap-1',
        className,
      )}
      {...props}
    />
  ),
);

List.displayName = 'NavigationMenu.List';

const Item = forwardRef<HTMLLIElement, NavigationMenuPrimitive.Item.Props>(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Item
      ref={ref}
      className={cn('relative', className)}
      {...props}
    />
  ),
);

Item.displayName = 'NavigationMenu.Item';

const Trigger = forwardRef<HTMLButtonElement, NavigationMenuPrimitive.Trigger.Props>(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(
        'inline-flex h-9 w-max items-center justify-center rounded-md bg-nb-bg px-4 py-2 text-sm font-medium transition-colors hover:bg-nb-accent hover:text-nb-accent-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Trigger>
  ),
);

Trigger.displayName = 'NavigationMenu.Trigger';

const Portal = NavigationMenuPrimitive.Portal;

const Positioner = forwardRef<HTMLDivElement, NavigationMenuPrimitive.Positioner.Props>(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Positioner
      ref={ref}
      className={cn('z-[60]', className)}
      {...props}
    />
  ),
);

Positioner.displayName = 'NavigationMenu.Positioner';

const Popup = forwardRef<HTMLDivElement, NavigationMenuPrimitive.Popup.Props>(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Popup
      ref={ref}
      className={cn(
        'z-[60] w-max rounded-md border border-nb-border bg-nb-popover p-4 text-nb-popover-fg shadow-lg',
        className,
      )}
      {...props}
    />
  ),
);

Popup.displayName = 'NavigationMenu.Popup';

const Content = forwardRef<HTMLDivElement, NavigationMenuPrimitive.Content.Props>(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  ),
);

Content.displayName = 'NavigationMenu.Content';

const Link = forwardRef<HTMLAnchorElement, NavigationMenuPrimitive.Link.Props>(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Link
      ref={ref}
      className={cn(
        'block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-nb-accent hover:text-nb-accent-fg focus-visible:ring-2 focus-visible:ring-nb-primary',
        className,
      )}
      {...props}
    />
  ),
);

Link.displayName = 'NavigationMenu.Link';

const Viewport = forwardRef<HTMLDivElement, NavigationMenuPrimitive.Viewport.Props>(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  ),
);

Viewport.displayName = 'NavigationMenu.Viewport';

const Arrow = forwardRef<HTMLDivElement, NavigationMenuPrimitive.Arrow.Props>(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Arrow
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  ),
);

Arrow.displayName = 'NavigationMenu.Arrow';

const Indicator = forwardRef<HTMLSpanElement, NavigationMenuPrimitive.Icon.Props>(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Icon
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  ),
);

Indicator.displayName = 'NavigationMenu.Indicator';

export { Root as NavigationMenuRoot, List as NavigationMenuList, Item as NavigationMenuItem, Trigger as NavigationMenuTrigger, Portal as NavigationMenuPortal, Positioner as NavigationMenuPositioner, Popup as NavigationMenuPopup, Content as NavigationMenuContent, Link as NavigationMenuLink, Viewport as NavigationMenuViewport, Arrow as NavigationMenuArrow, Indicator as NavigationMenuIndicator };
export const NavigationMenu = {
  Root, List, Item, Trigger, Portal, Positioner, Popup, Content,
  Link, Viewport, Arrow, Indicator,
};
export type NavigationMenuRootProps = NavigationMenuPrimitive.Root.Props;
export type NavigationMenuListProps = NavigationMenuPrimitive.List.Props;
export type NavigationMenuItemProps = NavigationMenuPrimitive.Item.Props;
export type NavigationMenuTriggerProps = NavigationMenuPrimitive.Trigger.Props;
export type NavigationMenuPortalProps = NavigationMenuPrimitive.Portal.Props;
export type NavigationMenuPositionerProps = NavigationMenuPrimitive.Positioner.Props;
export type NavigationMenuPopupProps = NavigationMenuPrimitive.Popup.Props;
export type NavigationMenuContentProps = NavigationMenuPrimitive.Content.Props;
export type NavigationMenuLinkProps = NavigationMenuPrimitive.Link.Props;
export type NavigationMenuViewportProps = NavigationMenuPrimitive.Viewport.Props;
export type NavigationMenuArrowProps = NavigationMenuPrimitive.Arrow.Props;
export type NavigationMenuIndicatorProps = NavigationMenuPrimitive.Icon.Props;
