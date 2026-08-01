'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group';
import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { cn } from '../../lib/cn';

export interface RadioCardGroupRootProps extends RadioGroupPrimitive.Props<any> {}

const Group = forwardRef<HTMLDivElement, RadioCardGroupRootProps>(
  ({ className, ...props }, ref) => (
    <RadioGroupPrimitive
      ref={ref}
      className={cn('grid grid-cols-1 gap-3', className)}
      {...props}
    />
  ),
);
Group.displayName = 'RadioCardGroup.Group';

export interface RadioCardGroupItemProps extends RadioPrimitive.Root.Props<any> {}

const Item = forwardRef<HTMLElement, RadioCardGroupItemProps>(
  ({ className, ...props }, ref) => (
    <RadioPrimitive.Root
      ref={ref}
      className={cn(
        'rounded-lg border border-nb-border bg-nb-bg p-4 cursor-pointer flex items-center gap-3 hover:border-nb-primary/50 data-checked:border-nb-primary data-checked:ring-1 data-checked:ring-nb-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary',
        className,
      )}
      {...props}
    />
  ),
);
Item.displayName = 'RadioCardGroup.Item';

export interface RadioCardGroupIndicatorProps extends RadioPrimitive.Indicator.Props {}

const Indicator = forwardRef<HTMLSpanElement, RadioCardGroupIndicatorProps>(
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
Indicator.displayName = 'RadioCardGroup.Indicator';

export interface RadioCardGroupLabelProps extends HTMLAttributes<HTMLSpanElement> {}

const Label = forwardRef<HTMLSpanElement, RadioCardGroupLabelProps>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn('font-medium text-base', className)} {...props} />
  ),
);
Label.displayName = 'RadioCardGroup.Label';

export interface RadioCardGroupDescriptionProps extends HTMLAttributes<HTMLSpanElement> {}

const Description = forwardRef<HTMLSpanElement, RadioCardGroupDescriptionProps>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn('text-sm text-nb-muted-foreground', className)} {...props} />
  ),
);
Description.displayName = 'RadioCardGroup.Description';

export {
  Group as RadioCardGroupRoot,
  Item as RadioCardGroupItem,
  Indicator as RadioCardGroupIndicator,
  Label as RadioCardGroupLabel,
  Description as RadioCardGroupDescription,
};
export const RadioCardGroup = { Group, Item, Indicator, Label, Description };
