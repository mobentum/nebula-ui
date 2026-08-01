'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const calloutVariants = cva(
  'relative flex gap-3 rounded-lg border p-4 text-sm',
  {
    variants: {
      variant: {
        info: 'border-nb-info/30 bg-nb-info/10',
        success: 'border-nb-success/30 bg-nb-success/10',
        warning: 'border-nb-warning/30 bg-nb-warning/10',
        error: 'border-nb-destructive/30 bg-nb-destructive/10',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
);

export interface CalloutRootProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {}

const Root = forwardRef<HTMLDivElement, CalloutRootProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(calloutVariants({ variant }), className)}
      {...props}
    />
  ),
);
Root.displayName = 'Callout.Root';

export interface CalloutIconProps extends HTMLAttributes<HTMLDivElement> {}

const Icon = forwardRef<HTMLDivElement, CalloutIconProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mt-0.5 shrink-0', className)} {...props} />
  ),
);
Icon.displayName = 'Callout.Icon';

export interface CalloutContentProps extends HTMLAttributes<HTMLDivElement> {}

const Content = forwardRef<HTMLDivElement, CalloutContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex-1 space-y-1', className)} {...props} />
  ),
);
Content.displayName = 'Callout.Content';

export interface CalloutTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const Title = forwardRef<HTMLHeadingElement, CalloutTitleProps>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn('font-medium text-base', className)} {...props} />
  ),
);
Title.displayName = 'Callout.Title';

export interface CalloutDescriptionProps extends HTMLAttributes<HTMLDivElement> {}

const Description = forwardRef<HTMLDivElement, CalloutDescriptionProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-xs opacity-90', className)} {...props} />
  ),
);
Description.displayName = 'Callout.Description';

export {
  Root as CalloutRoot,
  Icon as CalloutIcon,
  Content as CalloutContent,
  Title as CalloutTitle,
  Description as CalloutDescription,
};
export const Callout = { Root, Icon, Content, Title, Description };
