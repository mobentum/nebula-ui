'use client';

import { forwardRef } from 'react';
import { Combobox as P } from '@base-ui/react/combobox';
import { CaretDown } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';

// --- Styled wrappers ---

const Root = P.Root;

const Input = forwardRef<HTMLInputElement, P.Input.Props>(
  ({ className, ...props }, ref) => (
    <P.Input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md border border-nb-border bg-nb-bg px-2.5 py-1.5 text-sm placeholder:text-nb-muted-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = 'Combobox.Input';

const Popup = forwardRef<HTMLDivElement, P.Popup.Props>(
  ({ className, ...props }, ref) => (
    <P.Popup
      ref={ref}
      className={cn(
        'z-[60] min-w-[var(--anchor-width,12rem)] overflow-hidden rounded-md border border-nb-border bg-nb-popover text-nb-popover-fg p-1.5 shadow-lg',
        className,
      )}
      {...props}
    />
  ),
);
Popup.displayName = 'Combobox.Popup';

const Item = forwardRef<HTMLDivElement, P.Item.Props>(
  ({ className, ...props }, ref) => (
    <P.Item
      ref={ref}
      className={cn(
        'relative flex w-full cursor-default select-none items-center gap-2 rounded-md px-2.5 py-2 text-sm outline-none data-highlighted:bg-nb-primary data-highlighted:text-nb-primary-fg',
        className,
      )}
      {...props}
    />
  ),
);
Item.displayName = 'Combobox.Item';

const Empty = forwardRef<HTMLDivElement, P.Empty.Props>(
  ({ className, ...props }, ref) => (
    <P.Empty
      ref={ref}
      className={cn('text-sm', className)}
      {...props}
    />
  ),
);
Empty.displayName = 'Combobox.Empty';

const Icon = forwardRef<HTMLSpanElement, P.Icon.Props>(
  ({ className, ...props }, ref) => (
    <P.Icon ref={ref} className={cn('h-4 w-4', className)} {...props}>
      <CaretDown className="h-4 w-4" aria-hidden />
    </P.Icon>
  ),
);
Icon.displayName = 'Combobox.Icon';

const Trigger = forwardRef<HTMLButtonElement, P.Trigger.Props>(
  ({ className, ...props }, ref) => (
    <P.Trigger
      ref={ref}
      className={cn('inline-flex items-center justify-center rounded-md px-2 py-1 text-nb-muted-fg hover:text-nb-fg transition-colors', className)}
      {...props}
    />
  ),
);
Trigger.displayName = 'Combobox.Trigger';

// --- Passthrough (no custom styling needed) ---

const Label = P.Label;
const List = P.List;
const Positioner = forwardRef<HTMLDivElement, P.Positioner.Props>(
  ({ className, ...props }, ref) => (
    <P.Positioner ref={ref} className={cn('z-[60]', className)} {...props} />
  ),
);
Positioner.displayName = 'Combobox.Positioner';

const Portal = P.Portal;
Portal.displayName = 'Combobox.Portal';
const Arrow = P.Arrow;
const Backdrop = P.Backdrop;
const Clear = P.Clear;
const Value = P.Value;
const ItemIndicator = P.ItemIndicator;
const InputGroup = P.InputGroup;
const Chips = P.Chips;
const Chip = P.Chip;
const ChipRemove = P.ChipRemove;
const Group = P.Group;
const GroupLabel = P.GroupLabel;
const Separator = P.Separator;
const Status = P.Status;
const Row = P.Row;
const Collection = P.Collection;

// --- Exports ---

export {
  Root as ComboboxRoot,
  Input as ComboboxInput,
  Popup as ComboboxPopup,
  Item as ComboboxItem,
  Empty as ComboboxEmpty,
  Icon as ComboboxIcon,
  Trigger as ComboboxTrigger,
  Label as ComboboxLabel,
  List as ComboboxList,
  Positioner as ComboboxPositioner,
  Portal as ComboboxPortal,
  Arrow as ComboboxArrow,
  Backdrop as ComboboxBackdrop,
  Clear as ComboboxClear,
  Value as ComboboxValue,
  ItemIndicator as ComboboxItemIndicator,
  InputGroup as ComboboxInputGroup,
  Chips as ComboboxChips,
  Chip as ComboboxChip,
  ChipRemove as ComboboxChipRemove,
  Group as ComboboxGroup,
  GroupLabel as ComboboxGroupLabel,
  Separator as ComboboxSeparator,
  Status as ComboboxStatus,
  Row as ComboboxRow,
  Collection as ComboboxCollection,
};

export const Combobox = {
  Root, Input, Popup, Item, Empty, Icon, Trigger,
  Label, List, Positioner, Portal, Arrow, Backdrop,
  Clear, Value, ItemIndicator, InputGroup,
  Chips, Chip, ChipRemove,
  Group, GroupLabel, Separator, Status, Row, Collection,
  useFilter: P.useFilter,
};
