'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium',
  {
    variants: {
      size: {
        sm: 'h-5 px-2 text-xs',
        md: 'h-6 px-3 text-sm',
        lg: 'h-7 px-4 text-sm',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const badgeColors = {
  primary: {
    solid: 'bg-nb-primary text-nb-primary-fg',
    outline: 'border border-nb-primary text-nb-primary',
    subtle: 'bg-nb-primary/10 text-nb-primary',
  },
  success: {
    solid: 'bg-nb-success text-nb-success-fg',
    outline: 'border border-nb-success text-nb-success',
    subtle: 'bg-nb-success/10 text-nb-success',
  },
  warning: {
    solid: 'bg-nb-warning text-nb-warning-fg',
    outline: 'border border-nb-warning text-nb-warning',
    subtle: 'bg-nb-warning/10 text-nb-warning',
  },
  danger: {
    solid: 'bg-nb-destructive text-nb-destructive-fg',
    outline: 'border border-nb-destructive text-nb-destructive',
    subtle: 'bg-nb-destructive/10 text-nb-destructive',
  },
  info: {
    solid: 'bg-nb-info text-nb-info-fg',
    outline: 'border border-nb-info text-nb-info',
    subtle: 'bg-nb-info/10 text-nb-info',
  },
} as const;

type BadgeColor = keyof typeof badgeColors;
type BadgeVariant = keyof (typeof badgeColors)[BadgeColor];

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  color?: BadgeColor;
  variant?: BadgeVariant;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, color = 'primary', variant = 'solid', size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ size }), badgeColors[color][variant], className)}
        {...props}
      />
    );
  },
);
Badge.displayName = 'Badge';
