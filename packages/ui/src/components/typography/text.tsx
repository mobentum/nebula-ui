'use client';

import { forwardRef, type ElementType } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const textVariants = cva('', {
  variants: {
    size: {
      xs: 'text-xs leading-relaxed',
      sm: 'text-sm leading-relaxed',
      md: 'text-base leading-relaxed',
      lg: 'text-lg leading-relaxed',
      xl: 'text-xl leading-relaxed',
      '2xl': 'text-2xl leading-relaxed',
      '3xl': 'text-3xl leading-relaxed',
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
      justify: 'text-justify',
    },
    truncate: {
      true: 'truncate',
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 'normal',
  },
});

const textElements = {
  p: 'p',
  span: 'span',
  div: 'div',
  label: 'label',
} as const;

type TextElement = keyof typeof textElements;

export interface TextProps
  extends React.HTMLAttributes<HTMLElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right' | 'justify';
  as?: TextElement;
  muted?: boolean;
  subtle?: boolean;
  inverse?: boolean;
  truncate?: boolean;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ className, size = 'md', weight = 'normal', align, as: tag = 'p', muted, subtle, inverse, truncate, ...props }, ref) => {
    const Component = textElements[tag] as ElementType;
    return (
      <Component
        ref={ref}
        className={cn(
          textVariants({ size, weight, align, truncate }),
          muted && 'text-nb-muted-fg',
          subtle && 'text-nb-muted-fg/80',
          inverse && 'text-nb-primary-fg',
          className,
        )}
        {...props}
      />
    );
  },
);
Text.displayName = 'Text';
