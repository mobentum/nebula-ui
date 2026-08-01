'use client';

import { forwardRef } from 'react';
import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { SpinnerGap } from '@phosphor-icons/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const buttonBaseClassName = [
  'inline-flex cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors',
  'focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2 focus-visible:ring-offset-nb-bg',
  'disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50 select-none [&_svg]:pointer-events-none [&_svg]:shrink-0',
].join(' ');

export const buttonVariants = cva(buttonBaseClassName, {
  variants: {
    variant: {
      primary: 'bg-nb-primary text-nb-primary-fg shadow-sm hover:bg-nb-primary/90',
      secondary: 'bg-nb-secondary text-nb-secondary-fg shadow-sm hover:bg-nb-secondary/80',
      outline: 'border border-nb-input bg-nb-bg hover:bg-nb-accent hover:text-nb-accent-fg',
      ghost: 'hover:bg-nb-accent hover:text-nb-accent-fg',
      danger: 'bg-nb-destructive text-nb-destructive-fg shadow-sm hover:bg-nb-destructive/90',
      success: 'bg-nb-success text-nb-success-fg shadow-sm hover:bg-nb-success/90',
      warning: 'bg-nb-warning text-nb-warning-fg shadow-sm hover:bg-nb-warning/90',
      link: 'text-nb-fg underline-offset-4 hover:text-nb-primary hover:underline',
    },
    size: {
      xs: 'h-7 px-2 text-xs rounded',
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base',
      xl: 'h-14 px-8 text-lg',
      icon: 'h-10 w-10',
      'icon-xs': 'h-7 w-7',
      'icon-sm': 'h-8 w-8',
      'icon-lg': 'h-12 w-12',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps
  extends Omit<ButtonPrimitive.Props, 'variant' | 'size'>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

function LoadingSpinner() {
  return <SpinnerGap weight="bold" className="me-2 h-4 w-4 animate-spin" aria-hidden />;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant, size, fullWidth, loading, disabled, children, type = 'button', style, ...props },
    ref,
  ) {
    return (
      <ButtonPrimitive
        ref={ref}
        type={type}
        data-slot="button"
        aria-busy={loading || undefined}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        disabled={disabled || loading}
        style={{ cursor: disabled || loading ? 'not-allowed' : 'pointer', ...style }}
        {...props}
      >
        {loading ? (
          <>
            <LoadingSpinner />
            {children}
          </>
        ) : (
          children
        )}
      </ButtonPrimitive>
    );
  },
);

Button.displayName = 'Button';
