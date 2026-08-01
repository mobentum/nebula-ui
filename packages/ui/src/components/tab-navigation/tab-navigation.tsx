'use client';

import { forwardRef } from 'react';
import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';
import { cn } from '../../lib/cn';

export interface TabNavigationRootProps extends TabsPrimitive.Root.Props {}

const Root = forwardRef<HTMLDivElement, TabNavigationRootProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Root ref={ref} className={cn(className)} {...props} />
  ),
);
Root.displayName = 'TabNavigation.Root';

export interface TabNavigationListProps extends TabsPrimitive.List.Props {}

const List = forwardRef<HTMLDivElement, TabNavigationListProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        'inline-flex h-10 items-center border-b border-nb-border',
        className,
      )}
      {...props}
    />
  ),
);
List.displayName = 'TabNavigation.List';

export interface TabNavigationTabProps extends TabsPrimitive.Tab.Props {}

const Tab = forwardRef<HTMLButtonElement, TabNavigationTabProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Tab
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-medium text-nb-muted-foreground transition-colors hover:text-nb-fg aria-selected:text-nb-fg aria-selected:border-b-2 aria-selected:border-nb-primary border-b border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary',
        className,
      )}
      {...props}
    />
  ),
);
Tab.displayName = 'TabNavigation.Tab';

export { Root as TabNavigationRoot, List as TabNavigationList, Tab as TabNavigationTab };
export const TabNavigation = { Root, List, Tab };
