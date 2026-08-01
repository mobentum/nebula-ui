'use client';

import { forwardRef } from 'react';
import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-pressed:bg-nb-accent data-pressed:text-nb-accent-fg',
  {
    variants: {
      variant: {
        solid: 'bg-nb-primary text-nb-primary-fg data-pressed:bg-nb-primary/80',
        outline: 'border border-nb-input bg-nb-bg hover:bg-nb-accent hover:text-nb-accent-fg',
        ghost: 'hover:bg-nb-accent hover:text-nb-accent-fg',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
    },
  },
);

export interface ToggleProps
  extends VariantProps<typeof toggleVariants>,
    TogglePrimitive.Props {}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive
      ref={ref}
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Toggle.displayName = 'Toggle';
