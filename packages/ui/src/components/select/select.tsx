'use client';

import { forwardRef } from 'react';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import { CaretDown, Check } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';

const Root = SelectPrimitive.Root;

const Trigger = forwardRef<HTMLButtonElement, SelectPrimitive.Trigger.Props>(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex h-10 w-full items-center justify-between rounded-md border border-nb-border bg-nb-bg px-2.5 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    >
      {children}
    </SelectPrimitive.Trigger>
  ),
);

Trigger.displayName = 'Select.Trigger';

const Value = forwardRef<HTMLSpanElement, SelectPrimitive.Value.Props>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Value
      ref={ref}
        className={cn('flex-1 text-start truncate', className)}
      {...props}
    />
  ),
);

Value.displayName = 'Select.Value';

const Popup = forwardRef<HTMLDivElement, SelectPrimitive.Popup.Props>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Popup
      ref={ref}
      className={cn(
        'z-[60] min-w-[8rem] overflow-hidden rounded-md border border-nb-border bg-nb-popover text-nb-popover-fg p-1.5 shadow-lg',
        className,
      )}
      {...props}
    />
  ),
);

Popup.displayName = 'Select.Popup';

const Arrow = forwardRef<HTMLDivElement, SelectPrimitive.Arrow.Props>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Arrow
      ref={ref}
      className={cn(
        'pointer-events-none h-3 w-3 rotate-45 bg-nb-popover border border-nb-border data-[side=top]:border-r-0 data-[side=top]:border-b-0 data-[side=bottom]:border-l-0 data-[side=bottom]:border-t-0 data-[side=left]:border-r-0 data-[side=left]:border-t-0 data-[side=right]:border-l-0 data-[side=right]:border-b-0',
        className,
      )}
      {...props}
    />
  ),
);

Arrow.displayName = 'Select.Arrow';

const Icon = forwardRef<HTMLSpanElement, SelectPrimitive.Icon.Props>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Icon
      ref={ref}
      className={cn('', className)}
      {...props}
    >
      <CaretDown className="h-4 w-4" aria-hidden />
    </SelectPrimitive.Icon>
  ),
);

Icon.displayName = 'Select.Icon';

const Item = forwardRef<HTMLDivElement, SelectPrimitive.Item.Props>(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex w-full cursor-default select-none items-center gap-2 rounded-md px-2.5 py-2 text-sm text-nb-popover-fg outline-none data-highlighted:bg-nb-accent data-highlighted:text-nb-accent-fg data-selected:font-medium',
        className,
      )}
      {...props}
    >
      {children}
    </SelectPrimitive.Item>
  ),
);

Item.displayName = 'Select.Item';

const ItemText = forwardRef<HTMLDivElement, SelectPrimitive.ItemText.Props>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.ItemText
      ref={ref}
      className={cn('flex-1', className)}
      {...props}
    />
  ),
);

ItemText.displayName = 'Select.ItemText';

const ItemIndicator = forwardRef<HTMLSpanElement, SelectPrimitive.ItemIndicator.Props>(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.ItemIndicator
      ref={ref}
      className={cn('ml-auto', className)}
      {...props}
    >
      {children || (
        <Check className="h-4 w-4" aria-hidden />
      )}
    </SelectPrimitive.ItemIndicator>
  ),
);

ItemIndicator.displayName = 'Select.ItemIndicator';

const Positioner = forwardRef<HTMLDivElement, SelectPrimitive.Positioner.Props>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Positioner
      ref={ref}
      className={cn('z-[60]', className)}
      {...props}
    />
  ),
);
Positioner.displayName = 'Select.Positioner';

const Portal = SelectPrimitive.Portal as React.FC<{ children?: React.ReactNode; className?: string; [key: string]: any }>;

const Backdrop = SelectPrimitive.Backdrop;
const Group = SelectPrimitive.Group;
const GroupLabel = SelectPrimitive.GroupLabel;
const Label = SelectPrimitive.Label;
const List = SelectPrimitive.List;
const ScrollDownArrow = SelectPrimitive.ScrollDownArrow;
const ScrollUpArrow = SelectPrimitive.ScrollUpArrow;
const Separator = SelectPrimitive.Separator;

export { Root as SelectRoot, Trigger as SelectTrigger, Value as SelectValue, Popup as SelectPopup, Arrow as SelectArrow, Icon as SelectIcon, Item as SelectItem, ItemText as SelectItemText, ItemIndicator as SelectItemIndicator, Positioner as SelectPositioner, Portal as SelectPortal, Backdrop as SelectBackdrop, Group as SelectGroup, GroupLabel as SelectGroupLabel, Label as SelectLabel, List as SelectList, ScrollDownArrow as SelectScrollDownArrow, ScrollUpArrow as SelectScrollUpArrow, Separator as SelectSeparator };
export const Select = {
  Root,
  Trigger,
  Value,
  Popup,
  Arrow,
  Icon,
  Item,
  ItemText,
  ItemIndicator,
  Positioner,
  Portal,
  Backdrop,
  Group,
  GroupLabel,
  Label,
  List,
  ScrollDownArrow,
  ScrollUpArrow,
  Separator,
};

export type SelectRootProps = SelectPrimitive.Root.Props<any>;
export type SelectTriggerProps = SelectPrimitive.Trigger.Props;
export type SelectValueProps = SelectPrimitive.Value.Props;
export type SelectPopupProps = SelectPrimitive.Popup.Props;
export type SelectArrowProps = SelectPrimitive.Arrow.Props;
export type SelectIconProps = SelectPrimitive.Icon.Props;
export type SelectItemProps = SelectPrimitive.Item.Props;
export type SelectItemTextProps = SelectPrimitive.ItemText.Props;
export type SelectItemIndicatorProps = SelectPrimitive.ItemIndicator.Props;
export type SelectBackdropProps = SelectPrimitive.Backdrop.Props;
export type SelectGroupProps = SelectPrimitive.Group.Props;
export type SelectGroupLabelProps = SelectPrimitive.GroupLabel.Props;
export type SelectLabelProps = SelectPrimitive.Label.Props;
export type SelectListProps = SelectPrimitive.List.Props;
export type SelectScrollDownArrowProps = SelectPrimitive.ScrollDownArrow.Props;
export type SelectScrollUpArrowProps = SelectPrimitive.ScrollUpArrow.Props;
export type SelectSeparatorProps = SelectPrimitive.Separator.Props;
