'use client';

import { forwardRef, type ComponentProps } from 'react';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col items-center justify-center py-12', className)}
      {...props}
    />
  ),
);

Root.displayName = 'Empty.Root';

const Icon = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-nb-muted-fg', className)}
      {...props}
    />
  ),
);

Icon.displayName = 'Empty.Icon';

const Title = forwardRef<HTMLHeadingElement, ComponentProps<'h3'>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('mt-4 text-lg font-semibold', className)}
      {...props}
    />
  ),
);

Title.displayName = 'Empty.Title';

const Description = forwardRef<HTMLParagraphElement, ComponentProps<'p'>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('mt-1 text-sm text-nb-muted-fg', className)}
      {...props}
    />
  ),
);

Description.displayName = 'Empty.Description';

const Actions = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mt-6 flex items-center gap-2', className)}
      {...props}
    />
  ),
);

Actions.displayName = 'Empty.Actions';

export { Root as EmptyRoot, Icon as EmptyIcon, Title as EmptyTitle, Description as EmptyDescription, Actions as EmptyActions };
export const Empty = { Root, Icon, Title, Description, Actions };
export type EmptyRootProps = ComponentProps<'div'>;
export type EmptyIconProps = ComponentProps<'div'>;
export type EmptyTitleProps = ComponentProps<'h3'>;
export type EmptyDescriptionProps = ComponentProps<'p'>;
export type EmptyActionsProps = ComponentProps<'div'>;
