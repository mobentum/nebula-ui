'use client';

import { forwardRef } from 'react';
import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';
import { CaretDown } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLDivElement, AccordionPrimitive.Root.Props>(
  ({ className, ...props }, ref) => (
    <AccordionPrimitive.Root
      ref={ref}
      className={cn('divide-y divide-border', className)}
      {...props}
    />
  ),
);

Root.displayName = 'Accordion.Root';

const Item = forwardRef<HTMLDivElement, AccordionPrimitive.Item.Props>(
  ({ className, ...props }, ref) => (
    <AccordionPrimitive.Item ref={ref} className={cn('', className)} {...props} />
  ),
);

Item.displayName = 'Accordion.Item';

const Header = forwardRef<HTMLHeadingElement, AccordionPrimitive.Header.Props>(
  ({ className, ...props }, ref) => (
    <AccordionPrimitive.Header ref={ref} className={cn('', className)} {...props} />
  ),
);

Header.displayName = 'Accordion.Header';

const Trigger = forwardRef<HTMLButtonElement, AccordionPrimitive.Trigger.Props>(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group flex w-full items-center justify-between py-4 text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-panel-open:rotate-180" />
    </AccordionPrimitive.Trigger>
  ),
);

Trigger.displayName = 'Accordion.Trigger';

const Panel = forwardRef<HTMLDivElement, AccordionPrimitive.Panel.Props>(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Panel
      ref={ref}
      className={cn(
        'overflow-hidden text-sm text-nb-muted-fg data-starting-style:animate-accordion-down data-ending-style:animate-accordion-up',
        className,
      )}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </AccordionPrimitive.Panel>
  ),
);

Panel.displayName = 'Accordion.Panel';

function ChevronDown({ className, ...props }: { className?: string; [key: string]: any }) {
  return <CaretDown className={className} aria-hidden {...props} />;
}

export { Root as AccordionRoot, Item as AccordionItem, Header as AccordionHeader, Trigger as AccordionTrigger, Panel as AccordionPanel };
export const Accordion = {
  Root,
  Item,
  Header,
  Trigger,
  Panel,
};

export type AccordionRootProps = AccordionPrimitive.Root.Props;
export type AccordionItemProps = AccordionPrimitive.Item.Props;
export type AccordionHeaderProps = AccordionPrimitive.Header.Props;
export type AccordionTriggerProps = AccordionPrimitive.Trigger.Props;
export type AccordionPanelProps = AccordionPrimitive.Panel.Props;
