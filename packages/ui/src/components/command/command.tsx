'use client';

import React, { forwardRef, type HTMLAttributes } from 'react';
import {
  Command as CommandPrimitive,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandDialog,
} from 'cmdk';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { label?: string; shouldFilter?: boolean; defaultValue?: string; value?: string; onValueChange?: (value: string) => void }>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive
      ref={ref}
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md bg-nb-popover text-nb-popover-fg',
        className,
      )}
      {...props}
    />
  ),
);

Root.displayName = 'Command.Root';

const Input = forwardRef<HTMLInputElement, HTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <CommandInput
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-nb-muted-fg focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = 'Command.Input';

const List = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <CommandList
      ref={ref}
      className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
      {...props}
    />
  ),
);

List.displayName = 'Command.List';

const Empty = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <CommandEmpty
      ref={ref}
      className={cn('py-6 text-center text-sm', className)}
      {...props}
    />
  ),
);

Empty.displayName = 'Command.Empty';

const Group = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { heading?: React.ReactNode; value?: string }>(
  ({ className, ...props }, ref) => (
    <CommandGroup
      ref={ref}
      className={cn(
        'overflow-hidden p-1 text-nb-fg [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-nb-muted-fg',
        className,
      )}
      {...props}
    />
  ),
);

Group.displayName = 'Command.Group';

const Item = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { value?: string; disabled?: boolean; onSelect?: (value: string) => void }>(
  ({ className, ...props }, ref) => (
    <CommandItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[selected=true]:bg-nb-accent data-[selected=true]:text-nb-accent-fg [&_svg]:pointer-events-none [&_svg]:shrink-0',
        className,
      )}
      {...props}
    />
  ),
);

Item.displayName = 'Command.Item';

const Separator = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { alwaysRender?: boolean }>(
  ({ className, ...props }, ref) => (
    <CommandSeparator
      ref={ref}
      className={cn('-mx-1 h-px bg-nb-border', className)}
      {...props}
    />
  ),
);

Separator.displayName = 'Command.Separator';

const Dialog = forwardRef<HTMLDivElement, Record<string, any>>(
  ({ className, ...props }, ref) => (
    <CommandDialog
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  ),
);

Dialog.displayName = 'Command.Dialog';

export { Root as CommandRoot, Input as CommandInput, List as CommandList, Empty as CommandEmpty, Group as CommandGroup, Item as CommandItem, Separator as CommandSeparator, Dialog as CommandDialog };
export const Command = { Root, Input, List, Empty, Group, Item, Separator, Dialog };
export type CommandRootProps = HTMLAttributes<HTMLDivElement> & { label?: string; shouldFilter?: boolean; defaultValue?: string; value?: string; onValueChange?: (value: string) => void };
export type CommandInputProps = HTMLAttributes<HTMLInputElement>;
export type CommandListProps = HTMLAttributes<HTMLDivElement>;
export type CommandEmptyProps = HTMLAttributes<HTMLDivElement>;
export type CommandGroupProps = HTMLAttributes<HTMLDivElement> & { heading?: React.ReactNode; value?: string };
export type CommandItemProps = HTMLAttributes<HTMLDivElement> & { value?: string; disabled?: boolean; onSelect?: (value: string) => void };
export type CommandSeparatorProps = HTMLAttributes<HTMLDivElement> & { alwaysRender?: boolean };
export type CommandDialogProps = Record<string, any>;
