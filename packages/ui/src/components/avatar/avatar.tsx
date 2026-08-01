'use client';

import { forwardRef, type ComponentProps } from 'react';
import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const avatarVariants = cva(
  'relative inline-flex items-center justify-center rounded-full overflow-hidden shrink-0',
  {
    variants: {
      size: {
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-base',
        xl: 'h-16 w-16 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const avatarColors = {
  primary: 'bg-nb-primary text-nb-primary-fg',
  success: 'bg-nb-success text-nb-success-fg',
  warning: 'bg-nb-warning text-nb-warning-fg',
  danger: 'bg-nb-destructive text-nb-destructive-fg',
} as const;

type AvatarColor = keyof typeof avatarColors;

function getInitials(name?: string): string {
  if (!name) return '';
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

interface RootProps extends AvatarPrimitive.Root.Props, VariantProps<typeof avatarVariants> {
  color?: AvatarColor;
}

const Root = forwardRef<HTMLSpanElement, RootProps>(
  ({ className, size = 'md', color = 'primary', ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      data-slot="avatar-root"
      className={cn(avatarVariants({ size }), avatarColors[color], className)}
      {...props}
    />
  ),
);
Root.displayName = 'Avatar.Root';

const Image = forwardRef<HTMLImageElement, AvatarPrimitive.Image.Props>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
      ref={ref}
      data-slot="avatar-image"
      className={cn('h-full w-full object-cover', className)}
      {...props}
    />
  ),
);
Image.displayName = 'Avatar.Image';

const Fallback = forwardRef<HTMLSpanElement, AvatarPrimitive.Fallback.Props>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
      ref={ref}
      data-slot="avatar-fallback"
      className={cn('font-medium leading-none select-none', className)}
      {...props}
    />
  ),
);
Fallback.displayName = 'Avatar.Fallback';

interface AvatarProps
  extends Omit<ComponentProps<typeof Root>, 'src' | 'alt' | 'color'> {
  src?: string;
  alt?: string;
  fallback?: string;
  color?: AvatarColor;
}

const Avatar = Object.assign(
  forwardRef<HTMLSpanElement, AvatarProps>(
    ({ className, size, color, src, alt, fallback, ...props }, ref) => (
      <Root ref={ref} size={size} color={color} className={className} {...props}>
        {src ? (
          <Image src={src} alt={alt ?? ''} />
        ) : null}
        <Fallback>
          {fallback ?? getInitials(alt)}
        </Fallback>
      </Root>
    ),
  ),
  { Root, Image, Fallback },
);
Avatar.displayName = 'Avatar';

export { Avatar, Root, Image, Fallback };
export type { AvatarProps };