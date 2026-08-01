'use client';

import { forwardRef, type ElementType } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const headingVariants = cva('font-semibold tracking-tight', {
  variants: {
    as: {
      h1: 'text-4xl leading-tight lg:text-5xl',
      h2: 'text-3xl leading-tight lg:text-4xl',
      h3: 'text-2xl leading-snug lg:text-3xl',
      h4: 'text-xl leading-snug lg:text-2xl',
      h5: 'text-lg leading-normal lg:text-xl',
      h6: 'text-base leading-normal lg:text-lg',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    truncate: {
      true: 'truncate',
    },
  },
  defaultVariants: {
    as: 'h2',
    weight: 'semibold',
  },
});

const headingElements = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const;

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: keyof typeof headingElements;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as: tag = 'h2', weight, align, truncate, ...props }, ref) => {
    const Component = headingElements[tag] as ElementType;
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ as: tag, weight, align, truncate }), className)}
        {...props}
      />
    );
  },
);
Heading.displayName = 'Heading';
