'use client';

import { forwardRef } from 'react';
import { Field as FieldPrimitive } from '@base-ui/react/field';
import { Fieldset as FieldsetPrimitive } from '@base-ui/react/fieldset';
import { cn } from '../../lib/cn';

const FieldRoot = forwardRef<HTMLDivElement, FieldPrimitive.Root.Props>(
  ({ className, ...props }, ref) => (
    <FieldPrimitive.Root ref={ref} className={cn('', className)} {...props} />
  ),
);
FieldRoot.displayName = 'Field.Root';

const FieldLabel = forwardRef<HTMLLabelElement, FieldPrimitive.Label.Props>(
  ({ className, ...props }, ref) => (
    <FieldPrimitive.Label
      ref={ref}
      className={cn('text-sm font-medium mb-1.5 block', className)}
      {...props}
    />
  ),
);
FieldLabel.displayName = 'Field.Label';

const FieldControl = forwardRef<HTMLInputElement, FieldPrimitive.Control.Props>(
  ({ className, ...props }, ref) => (
    <FieldPrimitive.Control
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md border border-nb-border bg-nb-bg px-2.5 py-1.5 text-sm placeholder:text-nb-muted-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    />
  ),
);
FieldControl.displayName = 'Field.Control';

const FieldError = forwardRef<HTMLDivElement, FieldPrimitive.Error.Props>(
  ({ className, ...props }, ref) => (
    <FieldPrimitive.Error
      ref={ref}
      className={cn('text-xs text-red-600 mt-1', className)}
      {...props}
    />
  ),
);
FieldError.displayName = 'Field.Error';

const FieldDescription = forwardRef<HTMLParagraphElement, FieldPrimitive.Description.Props>(
  ({ className, ...props }, ref) => (
    <FieldPrimitive.Description
      ref={ref}
      className={cn('text-xs text-nb-muted-fg mt-1', className)}
      {...props}
    />
  ),
);
FieldDescription.displayName = 'Field.Description';

const FieldValidity = FieldPrimitive.Validity;

const FieldItem = forwardRef<HTMLDivElement, FieldPrimitive.Item.Props>(
  ({ className, ...props }, ref) => (
    <FieldPrimitive.Item ref={ref} className={cn('', className)} {...props} />
  ),
);
FieldItem.displayName = 'Field.Item';

const Field = {
  Root: FieldRoot,
  Label: FieldLabel,
  Control: FieldControl,
  Error: FieldError,
  Description: FieldDescription,
  Validity: FieldValidity,
  Item: FieldItem,
};

const FieldsetRoot = forwardRef<HTMLFieldSetElement, FieldsetPrimitive.Root.Props>(
  ({ className, ...props }, ref) => (
    <FieldsetPrimitive.Root
      ref={ref}
      className={cn('rounded-lg border border-nb-border p-6', className)}
      {...props}
    />
  ),
);
FieldsetRoot.displayName = 'Fieldset.Root';

const FieldsetLegend = forwardRef<HTMLDivElement, FieldsetPrimitive.Legend.Props>(
  ({ className, ...props }, ref) => (
    <FieldsetPrimitive.Legend
      ref={ref}
      className={cn('text-sm font-semibold px-1', className)}
      {...props}
    />
  ),
);
FieldsetLegend.displayName = 'Fieldset.Legend';

const Fieldset = {
  Root: FieldsetRoot,
  Legend: FieldsetLegend,
};

export { Field, Fieldset, FieldRoot, FieldLabel, FieldControl, FieldError, FieldDescription, FieldValidity, FieldItem, FieldsetRoot, FieldsetLegend };

export type FieldRootProps = FieldPrimitive.Root.Props;
export type FieldLabelProps = FieldPrimitive.Label.Props;
export type FieldControlProps = FieldPrimitive.Control.Props;
export type FieldErrorProps = FieldPrimitive.Error.Props;
export type FieldDescriptionProps = FieldPrimitive.Description.Props;
export type FieldValidityProps = FieldPrimitive.Validity.Props;
export type FieldItemProps = FieldPrimitive.Item.Props;
export type FieldsetRootProps = FieldsetPrimitive.Root.Props;
export type FieldsetLegendProps = FieldsetPrimitive.Legend.Props;
