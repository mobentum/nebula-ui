'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const skeletonVariants = cva(
  'animate-pulse bg-nb-accent',
  {
    variants: {
      variant: {
        text: 'h-4 w-full rounded',
        circular: 'rounded-full',
        rectangular: 'rounded',
      },
    },
    defaultVariants: {
      variant: 'text',
    },
  },
);

export interface SkeletonProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  width?: string | number;
  height?: string | number;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, width, height, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant }), className)}
        style={{
          ...(width != null ? { width } : undefined),
          ...(height != null ? { height } : undefined),
          ...style,
        }}
        {...props}
      />
    );
  },
);
Skeleton.displayName = 'Skeleton';
