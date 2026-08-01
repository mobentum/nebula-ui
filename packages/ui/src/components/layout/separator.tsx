'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const separatorVariants = cva('shrink-0 border-0 bg-nb-accent', {
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export interface SeparatorProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => {
    const semanticProps = decorative
      ? { role: 'none' as const }
      : { role: 'separator' as const, 'aria-orientation': orientation };

    return (
      <div
        ref={ref}
        className={cn(separatorVariants({ orientation }), className)}
        data-orientation={orientation}
        {...semanticProps}
        {...props}
      />
    );
  },
);
Separator.displayName = 'Separator';
