'use client';

import { forwardRef } from 'react';
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group';
import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { cn } from '../../lib/cn';

const Group = forwardRef<HTMLDivElement, RadioGroupPrimitive.Props<any>>(
  ({ className, ...props }, ref) => (
    <RadioGroupPrimitive ref={ref} className={cn('flex flex-col gap-2', className)} {...props} />
  ),
);

Group.displayName = 'Radio.Group';

const Item = forwardRef<HTMLElement, RadioPrimitive.Root.Props<any>>(
  ({ className, ...props }, ref) => (
    <RadioPrimitive.Root
      ref={ref}
        className={cn('flex items-center gap-2 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-nb-primary', className)}
      {...props}
    />
  ),
);

Item.displayName = 'Radio.Item';

const Indicator = forwardRef<HTMLSpanElement, RadioPrimitive.Indicator.Props>(
  ({ className, ...props }, ref) => (
    <RadioPrimitive.Indicator
      ref={ref}
      keepMounted
      className={cn(
        'relative h-4 w-4 rounded-full border-2 border-nb-border data-checked:border-nb-primary before:absolute before:inset-[2px] before:rounded-full before:bg-nb-primary before:scale-0 data-checked:before:scale-100',
        className,
      )}
      {...props}
    />
  ),
);

Indicator.displayName = 'Radio.Indicator';

export { Group as RadioGroup, Item as RadioItem, Indicator as RadioIndicator };
export const Radio = {
  Group,
  Item,
  Indicator,
};

export type RadioGroupProps = RadioGroupPrimitive.Props<any>;
export type RadioItemProps = RadioPrimitive.Root.Props<any>;
export type RadioIndicatorProps = RadioPrimitive.Indicator.Props;
