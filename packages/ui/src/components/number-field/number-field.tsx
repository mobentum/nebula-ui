'use client';

import { forwardRef } from 'react';
import { NumberField as NumberFieldPrimitive } from '@base-ui/react/number-field';
import { Minus, Plus } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLDivElement, NumberFieldPrimitive.Root.Props>(
  ({ className, ...props }, ref) => (
    <NumberFieldPrimitive.Root
      ref={ref}
      className={cn('flex items-center gap-1', className)}
      {...props}
    />
  ),
);

Root.displayName = 'NumberField.Root';

const Input = forwardRef<HTMLInputElement, NumberFieldPrimitive.Input.Props>(
  ({ className, ...props }, ref) => (
    <NumberFieldPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md border border-nb-border bg-nb-bg px-2.5 py-1.5 text-sm placeholder:text-nb-muted-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = 'NumberField.Input';

const Decrement = forwardRef<HTMLButtonElement, NumberFieldPrimitive.Decrement.Props>(
  ({ className, ...props }, ref) => (
    <NumberFieldPrimitive.Decrement
      ref={ref}
      aria-label="Decrease value"
      className={cn(
        'h-8 w-8 flex items-center justify-center rounded-md border border-nb-border bg-nb-bg hover:bg-nb-muted disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    >
      <Minus className="h-4 w-4" aria-hidden />
    </NumberFieldPrimitive.Decrement>
  ),
);

Decrement.displayName = 'NumberField.Decrement';

const Increment = forwardRef<HTMLButtonElement, NumberFieldPrimitive.Increment.Props>(
  ({ className, ...props }, ref) => (
    <NumberFieldPrimitive.Increment
      ref={ref}
      aria-label="Increase value"
      className={cn(
        'h-8 w-8 flex items-center justify-center rounded-md border border-nb-border bg-nb-bg hover:bg-nb-muted disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    >
      <Plus className="h-4 w-4" aria-hidden />
    </NumberFieldPrimitive.Increment>
  ),
);

Increment.displayName = 'NumberField.Increment';

const ScrubArea = forwardRef<HTMLSpanElement, NumberFieldPrimitive.ScrubArea.Props>(
  ({ className, ...props }, ref) => (
    <NumberFieldPrimitive.ScrubArea
      ref={ref}
      className={cn('cursor-ew-resize', className)}
      {...props}
    />
  ),
);

ScrubArea.displayName = 'NumberField.ScrubArea';

const Group = NumberFieldPrimitive.Group;
const ScrubAreaCursor = NumberFieldPrimitive.ScrubAreaCursor;

export { Root as NumberFieldRoot, Input as NumberFieldInput, Decrement as NumberFieldDecrement, Increment as NumberFieldIncrement, ScrubArea as NumberFieldScrubArea, Group as NumberFieldGroup, ScrubAreaCursor as NumberFieldScrubAreaCursor };
export const NumberField = {
  Root,
  Input,
  Decrement,
  Increment,
  ScrubArea,
  Group,
  ScrubAreaCursor,
};

export type NumberFieldRootProps = NumberFieldPrimitive.Root.Props;
export type NumberFieldInputProps = NumberFieldPrimitive.Input.Props;
export type NumberFieldDecrementProps = NumberFieldPrimitive.Decrement.Props;
export type NumberFieldIncrementProps = NumberFieldPrimitive.Increment.Props;
export type NumberFieldScrubAreaProps = NumberFieldPrimitive.ScrubArea.Props;
export type NumberFieldGroupProps = NumberFieldPrimitive.Group.Props;
export type NumberFieldScrubAreaCursorProps = NumberFieldPrimitive.ScrubAreaCursor.Props;
