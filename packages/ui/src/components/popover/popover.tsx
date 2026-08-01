'use client';

import { forwardRef } from 'react';
import { Popover as PopoverPrimitive } from '@base-ui/react/popover';
import { X } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';

const Root = PopoverPrimitive.Root;

const Trigger = PopoverPrimitive.Trigger;

const Popup = forwardRef<HTMLDivElement, PopoverPrimitive.Popup.Props>(
  ({ className, ...props }, ref) => (
    <PopoverPrimitive.Popup
      ref={ref}
      className={cn(
        'z-[60] w-72 rounded-md border border-nb-border bg-nb-popover p-4 text-nb-popover-fg shadow-lg',
        className,
      )}
      {...props}
    />
  ),
);

Popup.displayName = 'Popover.Popup';

const Title = forwardRef<HTMLHeadingElement, PopoverPrimitive.Title.Props>(
  ({ className, ...props }, ref) => (
    <PopoverPrimitive.Title
      ref={ref}
      className={cn('text-base font-semibold', className)}
      {...props}
    />
  ),
);

Title.displayName = 'Popover.Title';

const Description = forwardRef<HTMLDivElement, PopoverPrimitive.Description.Props>(
  ({ className, ...props }, ref) => (
    <PopoverPrimitive.Description
      ref={ref}
      render={<div />}
      className={cn('text-xs text-nb-muted-fg', className)}
      {...props}
    />
  ),
);

Description.displayName = 'Popover.Description';

const Close = forwardRef<HTMLButtonElement, PopoverPrimitive.Close.Props>(
  ({ className, children, render, ...props }, ref) => (
    <PopoverPrimitive.Close
      ref={ref}
      render={render ?? (
        <button
          aria-label="Close"
          className={cn(
            'absolute end-4 top-4 rounded-sm opacity-70 ring-offset-nb-bg transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2 disabled:pointer-events-none',
            className,
          )}
        />
      )}
      {...props}
    >
      {children ?? <XIcon className="h-4 w-4" />}
    </PopoverPrimitive.Close>
  ),
);

Close.displayName = 'Popover.Close';

const Arrow = forwardRef<HTMLDivElement, PopoverPrimitive.Arrow.Props>(
  ({ className, ...props }, ref) => (
    <PopoverPrimitive.Arrow
      ref={ref}
      className={cn('fill-neutral-200', className)}
      {...props}
    />
  ),
);

Arrow.displayName = 'Popover.Arrow';

function XIcon({ className, ...props }: { className?: string; [key: string]: any }) {
  return <X className={className} aria-hidden {...props} />;
}

const Positioner = forwardRef<HTMLDivElement, PopoverPrimitive.Positioner.Props>(
  ({ className, ...props }, ref) => (
    <PopoverPrimitive.Positioner
      ref={ref}
      className={cn('z-[60]', className)}
      {...props}
    />
  ),
);

Positioner.displayName = 'Popover.Positioner';

const Portal = forwardRef<HTMLDivElement, PopoverPrimitive.Portal.Props>(
  ({ className, ...props }, ref) => (
    <PopoverPrimitive.Portal
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  ),
);

Portal.displayName = 'Popover.Portal';

const Backdrop = PopoverPrimitive.Backdrop;
const Viewport = PopoverPrimitive.Viewport;

export { Root as PopoverRoot, Trigger as PopoverTrigger, Popup as PopoverPopup, Title as PopoverTitle, Description as PopoverDescription, Close as PopoverClose, Arrow as PopoverArrow, Positioner as PopoverPositioner, Portal as PopoverPortal, Backdrop as PopoverBackdrop, Viewport as PopoverViewport };
export const Popover = { Root, Trigger, Popup, Title, Description, Close, Arrow, Positioner, Portal, Backdrop, Viewport };

export type PopoverRootProps = PopoverPrimitive.Root.Props;
export type PopoverTriggerProps = PopoverPrimitive.Trigger.Props;
export type PopoverPopupProps = PopoverPrimitive.Popup.Props;
export type PopoverTitleProps = PopoverPrimitive.Title.Props;
export type PopoverDescriptionProps = PopoverPrimitive.Description.Props;
export type PopoverCloseProps = PopoverPrimitive.Close.Props;
export type PopoverArrowProps = PopoverPrimitive.Arrow.Props;
export type PopoverPositionerProps = PopoverPrimitive.Positioner.Props;
export type PopoverPortalProps = PopoverPrimitive.Portal.Props;
export type PopoverBackdropProps = PopoverPrimitive.Backdrop.Props;
export type PopoverViewportProps = PopoverPrimitive.Viewport.Props;
