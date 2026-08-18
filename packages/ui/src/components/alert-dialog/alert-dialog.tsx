'use client';

import { forwardRef } from 'react';
import { AlertDialog as AlertDialogPrimitive } from '@base-ui/react/alert-dialog';
import { cn } from '../../lib/cn';

const Root = AlertDialogPrimitive.Root;

const Trigger = AlertDialogPrimitive.Trigger;

const Portal = AlertDialogPrimitive.Portal;

const Backdrop = forwardRef<HTMLDivElement, AlertDialogPrimitive.Backdrop.Props>(
  ({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Backdrop
      ref={ref}
      className={cn(
        'fixed inset-0 z-40 bg-black/50 data-closed:opacity-0 data-starting-style:opacity-0 data-open:opacity-100 transition-opacity',
        className,
      )}
      {...props}
    />
  ),
);

Backdrop.displayName = 'AlertDialog.Backdrop';

const Popup = forwardRef<HTMLDivElement, AlertDialogPrimitive.Popup.Props>(
  ({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Popup
      ref={ref}
      className={cn(
        'fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border border-nb-border bg-nb-bg p-6 text-nb-fg shadow-xl',
        className,
      )}
      {...props}
    />
  ),
);

Popup.displayName = 'AlertDialog.Popup';

const Title = forwardRef<HTMLHeadingElement, AlertDialogPrimitive.Title.Props>(
  ({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Title
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  ),
);

Title.displayName = 'AlertDialog.Title';

const Description = forwardRef<HTMLDivElement, AlertDialogPrimitive.Description.Props>(
  ({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Description
      ref={ref}
      render={<div />}
      className={cn('text-sm text-nb-muted-fg', className)}
      {...props}
    />
  ),
);

Description.displayName = 'AlertDialog.Description';

interface CloseProps extends AlertDialogPrimitive.Close.Props {
  showCloseButton?: boolean;
}

const Close = forwardRef<HTMLButtonElement, CloseProps>(
  ({ className, children, render, ...props }, ref) => (
    <AlertDialogPrimitive.Close
      ref={ref}
      render={render ?? <button className={cn('inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', className)} />}
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Close>
  ),
);

Close.displayName = 'AlertDialog.Close';

const Cancel = forwardRef<HTMLButtonElement, AlertDialogPrimitive.Close.Props>(
  ({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Close
      ref={ref}
      className={cn(
        'mt-2 inline-flex items-center justify-center rounded-md border border-nb-input bg-nb-bg px-4 py-2 text-sm font-medium transition-colors hover:bg-nb-accent hover:text-nb-accent-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2 sm:mt-0',
        className,
      )}
      {...props}
    />
  ),
);

Cancel.displayName = 'AlertDialog.Cancel';

const Action = forwardRef<HTMLButtonElement, AlertDialogPrimitive.Close.Props>(
  ({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Close
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-md bg-nb-primary px-4 py-2 text-sm font-medium text-nb-primary-fg shadow-sm transition-colors hover:bg-nb-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  ),
);

Action.displayName = 'AlertDialog.Action';

export { Root as AlertDialogRoot, Trigger as AlertDialogTrigger, Portal as AlertDialogPortal, Backdrop as AlertDialogBackdrop, Popup as AlertDialogPopup, Title as AlertDialogTitle, Description as AlertDialogDescription, Close as AlertDialogClose, Cancel as AlertDialogCancel, Action as AlertDialogAction };
export const AlertDialog = { Root, Trigger, Portal, Backdrop, Popup, Title, Description, Close, Cancel, Action };
export type AlertDialogRootProps = AlertDialogPrimitive.Root.Props;
export type AlertDialogTriggerProps = AlertDialogPrimitive.Trigger.Props;
export type AlertDialogPortalProps = AlertDialogPrimitive.Portal.Props;
export type AlertDialogBackdropProps = AlertDialogPrimitive.Backdrop.Props;
export type AlertDialogPopupProps = AlertDialogPrimitive.Popup.Props;
export type AlertDialogTitleProps = AlertDialogPrimitive.Title.Props;
export type AlertDialogDescriptionProps = AlertDialogPrimitive.Description.Props;
export type AlertDialogCloseProps = AlertDialogPrimitive.Close.Props;
