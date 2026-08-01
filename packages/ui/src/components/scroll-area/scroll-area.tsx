'use client';

import { forwardRef } from 'react';
import { ScrollArea as ScrollAreaPrimitive } from '@base-ui/react/scroll-area';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLDivElement, ScrollAreaPrimitive.Root.Props>(
  ({ className, ...props }, ref) => (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      {...props}
    />
  ),
);

Root.displayName = 'ScrollArea.Root';

const Viewport = forwardRef<HTMLDivElement, ScrollAreaPrimitive.Viewport.Props>(
  ({ className, ...props }, ref) => (
    <ScrollAreaPrimitive.Viewport
      ref={ref}
      className={cn('h-full w-full rounded-[inherit]', className)}
      {...props}
    />
  ),
);

Viewport.displayName = 'ScrollArea.Viewport';

const Scrollbar = forwardRef<HTMLDivElement, ScrollAreaPrimitive.Scrollbar.Props>(
  ({ className, ...props }, ref) => (
    <ScrollAreaPrimitive.Scrollbar
      ref={ref}
      className={cn(
        'flex touch-none select-none transition-colors data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:h-2.5',
        className,
      )}
      {...props}
    />
  ),
);

Scrollbar.displayName = 'ScrollArea.Scrollbar';

const Thumb = forwardRef<HTMLDivElement, ScrollAreaPrimitive.Thumb.Props>(
  ({ className, ...props }, ref) => (
    <ScrollAreaPrimitive.Thumb
      ref={ref}
      className={cn(
        'relative flex-1 rounded-full bg-nb-border',
        className,
      )}
      {...props}
    />
  ),
);

Thumb.displayName = 'ScrollArea.Thumb';

const Corner = forwardRef<HTMLDivElement, ScrollAreaPrimitive.Corner.Props>(
  ({ className, ...props }, ref) => (
    <ScrollAreaPrimitive.Corner
      ref={ref}
      className={cn('bg-nb-border', className)}
      {...props}
    />
  ),
);

Corner.displayName = 'ScrollArea.Corner';

export { Root as ScrollAreaRoot, Viewport as ScrollAreaViewport, Scrollbar as ScrollAreaScrollbar, Thumb as ScrollAreaThumb, Corner as ScrollAreaCorner };
export const ScrollArea = { Root, Viewport, Scrollbar, Thumb, Corner };
export type ScrollAreaRootProps = ScrollAreaPrimitive.Root.Props;
export type ScrollAreaViewportProps = ScrollAreaPrimitive.Viewport.Props;
export type ScrollAreaScrollbarProps = ScrollAreaPrimitive.Scrollbar.Props;
export type ScrollAreaThumbProps = ScrollAreaPrimitive.Thumb.Props;
export type ScrollAreaCornerProps = ScrollAreaPrimitive.Corner.Props;
