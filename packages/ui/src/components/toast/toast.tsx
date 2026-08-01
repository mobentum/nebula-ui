'use client';

import { forwardRef } from 'react';
import { Toast as ToastPrimitive } from '@base-ui/react/toast';
import { X } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLDivElement, ToastPrimitive.Root.Props>(
  ({ className, ...props }, ref) => (
    <ToastPrimitive.Root
      ref={ref}
      className={cn(
        'pointer-events-auto flex items-start gap-3 rounded-lg border border-nb-border bg-nb-bg p-4 text-nb-fg shadow-lg data-closing:animate-out data-swipe-end:animate-out',
        className,
      )}
      {...props}
    />
  ),
);

Root.displayName = 'Toast.Root';

const Title = forwardRef<HTMLHeadingElement, ToastPrimitive.Title.Props>(
  ({ className, ...props }, ref) => (
    <ToastPrimitive.Title
      ref={ref}
      className={cn('text-base font-semibold', className)}
      {...props}
    />
  ),
);

Title.displayName = 'Toast.Title';

const Description = forwardRef<HTMLParagraphElement, ToastPrimitive.Description.Props>(
  ({ className, ...props }, ref) => (
    <ToastPrimitive.Description
      ref={ref}
      className={cn('text-xs text-nb-muted-fg', className)}
      {...props}
    />
  ),
);

Description.displayName = 'Toast.Description';

const Close = forwardRef<HTMLButtonElement, ToastPrimitive.Close.Props>(
  ({ className, children, render, ...props }, ref) => (
    <ToastPrimitive.Close
      ref={ref}
      render={render ?? (
        <button
          aria-label="Close"
          className={cn(
            'absolute end-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus-visible:ring-2 group-hover:opacity-100',
            className,
          )}
        />
      )}
      {...props}
    >
      {children ?? <XIcon className="h-4 w-4" />}
    </ToastPrimitive.Close>
  ),
);

Close.displayName = 'Toast.Close';

const Viewport = forwardRef<HTMLDivElement, ToastPrimitive.Viewport.Props>(
  ({ className, ...props }, ref) => (
    <ToastPrimitive.Viewport
      ref={ref}
      className={cn(
        'fixed bottom-4 end-4 z-50 flex max-h-[100vh] w-full max-w-sm flex-col gap-2',
        className,
      )}
      {...props}
    />
  ),
);

Viewport.displayName = 'Toast.Viewport';

function XIcon({ className, ...props }: { className?: string; [key: string]: any }) {
  return <X className={className} aria-hidden {...props} />;
}

const Action = ToastPrimitive.Action;
const Arrow = ToastPrimitive.Arrow;
const Content = ToastPrimitive.Content;
const Portal: typeof ToastPrimitive.Portal = ToastPrimitive.Portal;
const Positioner = ToastPrimitive.Positioner;

export {
  Root as ToastRoot,
  Title as ToastTitle,
  Description as ToastDescription,
  Close as ToastClose,
  Viewport as ToastViewport,
  Action as ToastAction,
  Arrow as ToastArrow,
  Content as ToastContent,
  Portal as ToastPortal,
  Positioner as ToastPositioner,
};
export const Toast: {
  Root: typeof Root;
  Title: typeof Title;
  Description: typeof Description;
  Close: typeof Close;
  Viewport: typeof Viewport;
  Action: typeof ToastPrimitive.Action;
  Arrow: typeof ToastPrimitive.Arrow;
  Content: typeof ToastPrimitive.Content;
  Portal: typeof ToastPrimitive.Portal;
  Positioner: typeof ToastPrimitive.Positioner;
  Provider: typeof ToastPrimitive.Provider;
} = {
  Root,
  Title,
  Description,
  Close,
  Viewport,
  Action,
  Arrow,
  Content,
  Portal,
  Positioner,
  Provider: ToastPrimitive.Provider,
};

export type ToastRootProps = ToastPrimitive.Root.Props;
export type ToastTitleProps = ToastPrimitive.Title.Props;
export type ToastDescriptionProps = ToastPrimitive.Description.Props;
export type ToastCloseProps = ToastPrimitive.Close.Props;
export type ToastViewportProps = ToastPrimitive.Viewport.Props;
export type ToastActionProps = ToastPrimitive.Action.Props;
export type ToastArrowProps = ToastPrimitive.Arrow.Props;
export type ToastContentProps = ToastPrimitive.Content.Props;
export type ToastPortalProps = ToastPrimitive.Portal.Props;
export type ToastPositionerProps = ToastPrimitive.Positioner.Props;
