'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { SpinnerGap } from '@phosphor-icons/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const spinnerVariants = cva(
  'animate-spin',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export interface SpinnerProps
  extends HTMLAttributes<SVGSVGElement>,
    VariantProps<typeof spinnerVariants> {
  color?: string;
}

export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size, color, 'aria-label': ariaLabel, ...props }, ref) => {
    return (
      <SpinnerGap
        ref={ref}
        weight="bold"
        color={color}
        className={cn(spinnerVariants({ size }), className)}
        aria-label={ariaLabel ?? 'Loading'}
        aria-hidden
        {...props}
      />
    );
  },
);
Spinner.displayName = 'Spinner';
