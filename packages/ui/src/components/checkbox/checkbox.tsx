'use client';

import { forwardRef, type ComponentProps } from 'react';
import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';
import { Check } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLElement, CheckboxPrimitive.Root.Props>(
  ({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
      ref={ref}
      data-slot="checkbox"
      className={cn(
        'relative flex h-5 w-5 shrink-0 items-center justify-center rounded border border-nb-border outline-none after:absolute after:-inset-3 focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2 data-checked:border-nb-primary data-checked:bg-nb-primary data-disabled:cursor-not-allowed data-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  ),
);

Root.displayName = 'Checkbox.Root';

const Indicator = forwardRef<HTMLSpanElement, CheckboxPrimitive.Indicator.Props>(
  ({ className, ...props }, ref) => (
    <CheckboxPrimitive.Indicator
      ref={ref}
      keepMounted
      data-slot="checkbox-indicator"
      className={cn('grid place-content-center text-current', className)}
      {...props}
    >
      <Check className="h-3.5 w-3.5 text-nb-primary-fg" aria-hidden />
    </CheckboxPrimitive.Indicator>
  ),
);

Indicator.displayName = 'Checkbox.Indicator';

const Label = forwardRef<HTMLLabelElement, ComponentProps<'label'>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn('flex items-center gap-2 cursor-pointer', className)}
      {...props}
    />
  ),
);

Label.displayName = 'Checkbox.Label';

export { Root as CheckboxRoot, Indicator as CheckboxIndicator, Label as CheckboxLabel };
export const Checkbox = {
  Root,
  Indicator,
  Label,
};

export type CheckboxRootProps = CheckboxPrimitive.Root.Props;
export type CheckboxIndicatorProps = CheckboxPrimitive.Indicator.Props;
export type CheckboxLabelProps = ComponentProps<'label'>;
