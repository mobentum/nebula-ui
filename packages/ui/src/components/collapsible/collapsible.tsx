'use client';

import { forwardRef } from 'react';
import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLDivElement, CollapsiblePrimitive.Root.Props>(
  ({ className, ...props }, ref) => (
    <CollapsiblePrimitive.Root ref={ref} className={cn(className)} {...props} />
  ),
);

Root.displayName = 'Collapsible.Root';

const Trigger = forwardRef<HTMLButtonElement, CollapsiblePrimitive.Trigger.Props>(
  ({ className, ...props }, ref) => (
    <CollapsiblePrimitive.Trigger
      ref={ref}
      className={cn(
        'flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-nb-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    />
  ),
);

Trigger.displayName = 'Collapsible.Trigger';

const Panel = forwardRef<HTMLDivElement, CollapsiblePrimitive.Panel.Props>(
  ({ className, ...props }, ref) => (
    <CollapsiblePrimitive.Panel
      ref={ref}
      className={cn(
        'overflow-hidden text-sm data-closed:animate-collapsible-up data-open:animate-collapsible-down',
        className,
      )}
      {...props}
    />
  ),
);

Panel.displayName = 'Collapsible.Panel';

export { Root as CollapsibleRoot, Trigger as CollapsibleTrigger, Panel as CollapsiblePanel };
export const Collapsible = { Root, Trigger, Panel };

export type CollapsibleRootProps = CollapsiblePrimitive.Root.Props;
export type CollapsibleTriggerProps = CollapsiblePrimitive.Trigger.Props;
export type CollapsiblePanelProps = CollapsiblePrimitive.Panel.Props;
