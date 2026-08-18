'use client';

import { forwardRef } from 'react';
import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLDivElement, TabsPrimitive.Root.Props>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Root ref={ref} className={cn(className)} {...props} />
  ),
);

Root.displayName = 'Tabs.Root';

const List = forwardRef<HTMLDivElement, TabsPrimitive.List.Props>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        'inline-flex h-10 items-center gap-1 rounded-lg bg-nb-muted p-1',
        className,
      )}
      {...props}
    />
  ),
);

List.displayName = 'Tabs.List';

const Tab = forwardRef<HTMLButtonElement, TabsPrimitive.Tab.Props>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Tab
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-shadow aria-selected:bg-nb-bg aria-selected:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    />
  ),
);

Tab.displayName = 'Tabs.Tab';

const Panel = forwardRef<HTMLDivElement, TabsPrimitive.Panel.Props>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Panel
      ref={ref}
      className={cn('mt-2 rounded-md p-4 text-sm outline-none', className)}
      {...props}
    />
  ),
);

Panel.displayName = 'Tabs.Panel';

const Indicator = forwardRef<HTMLDivElement, TabsPrimitive.Indicator.Props>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Indicator
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  ),
);

Indicator.displayName = 'Tabs.Indicator';

export { Root as TabsRoot, List as TabsList, Tab as TabsTab, Panel as TabsPanel, Indicator as TabsIndicator };
export { Tab as TabsTrigger, Panel as TabsContent };
export const Tabs = { Root, List, Tab, Panel, Indicator };

export type TabsRootProps = TabsPrimitive.Root.Props;
export type TabsListProps = TabsPrimitive.List.Props;
export type TabsTabProps = TabsPrimitive.Tab.Props;
export type TabsPanelProps = TabsPrimitive.Panel.Props;
export type TabsIndicatorProps = TabsPrimitive.Indicator.Props;
