'use client';

import { forwardRef, type ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-nb-fg',
  {
    variants: {
      variant: {
        info: 'border-nb-info/40 bg-nb-info/10 [&>svg]:text-nb-info',
        success: 'border-nb-success/40 bg-nb-success/10 [&>svg]:text-nb-success',
        warning: 'border-nb-warning/40 bg-nb-warning/10 [&>svg]:text-nb-warning',
        error: 'border-nb-destructive/40 bg-nb-destructive/10 [&>svg]:text-nb-destructive',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
);

const Root = forwardRef<HTMLDivElement, ComponentProps<'div'> & VariantProps<typeof alertVariants>>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  ),
);

Root.displayName = 'Alert.Root';

const Title = forwardRef<HTMLHeadingElement, ComponentProps<'h5'>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  ),
);

Title.displayName = 'Alert.Title';

const Description = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-sm [&_p]:leading-relaxed', className)}
      {...props}
    />
  ),
);

Description.displayName = 'Alert.Description';

export { Root as AlertRoot, Title as AlertTitle, Description as AlertDescription };
export const Alert = { Root, Title, Description };
export type AlertRootProps = ComponentProps<'div'> & VariantProps<typeof alertVariants>;
export type AlertTitleProps = ComponentProps<'h5'>;
export type AlertDescriptionProps = ComponentProps<'div'>;
