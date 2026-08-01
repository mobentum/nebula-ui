'use client';

import { forwardRef, type ComponentProps } from 'react';
import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import { X } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';

const Root = DialogPrimitive.Root;

const Trigger = DialogPrimitive.Trigger;

const Popup = forwardRef<HTMLDivElement, DialogPrimitive.Popup.Props>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Popup
      ref={ref}
      className={cn(
        'fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border border-nb-border bg-nb-bg p-6 text-nb-fg shadow-xl',
        className,
      )}
      {...props}
    />
  ),
);

Popup.displayName = 'Dialog.Popup';

const Backdrop = forwardRef<HTMLDivElement, DialogPrimitive.Backdrop.Props>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Backdrop
      ref={ref}
      className={cn(
        'fixed inset-0 z-40 bg-black/50 data-closed:opacity-0 data-starting-style:opacity-0 data-open:opacity-100 transition-opacity',
        className,
      )}
      {...props}
    />
  ),
);

Backdrop.displayName = 'Dialog.Backdrop';

const Title = forwardRef<HTMLHeadingElement, DialogPrimitive.Title.Props>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  ),
);

Title.displayName = 'Dialog.Title';

const Description = forwardRef<HTMLDivElement, DialogPrimitive.Description.Props>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Description
      ref={ref}
      render={<div />}
      className={cn('text-xs text-nb-muted-fg', className)}
      {...props}
    />
  ),
);

Description.displayName = 'Dialog.Description';

const Close = forwardRef<HTMLButtonElement, DialogPrimitive.Close.Props>(
  ({ className, children, render, ...props }, ref) => (
    <DialogPrimitive.Close
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
    </DialogPrimitive.Close>
  ),
);

Close.displayName = 'Dialog.Close';

function XIcon({ className, ...props }: { className?: string; [key: string]: any }) {
  return <X className={className} aria-hidden {...props} />;
}

const Portal = forwardRef<HTMLDivElement, DialogPrimitive.Portal.Props>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Portal
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  ),
);

Portal.displayName = 'Dialog.Portal';

const Header = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col gap-1.5 text-start', className)}
      {...props}
    />
  ),
);

Header.displayName = 'Dialog.Header';

const Footer = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col gap-2 sm:flex-row sm:items-center',
        className,
      )}
      {...props}
    />
  ),
);

Footer.displayName = 'Dialog.Footer';

interface ContentProps extends DialogPrimitive.Popup.Props {
  showCloseButton?: boolean;
}

const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ className, children, showCloseButton = true, ...props }, ref) => (
    <Portal>
      <Backdrop />
      <Popup
        ref={ref}
        className={className}
        {...props}
      >
        {children}
        {showCloseButton && <Close />}
      </Popup>
    </Portal>
  ),
);

Content.displayName = 'Dialog.Content';

const Viewport = DialogPrimitive.Viewport;

export { Root as DialogRoot, Trigger as DialogTrigger, Popup as DialogPopup, Backdrop as DialogBackdrop, Title as DialogTitle, Description as DialogDescription, Close as DialogClose, Portal as DialogPortal, Header as DialogHeader, Footer as DialogFooter, Content as DialogContent, Viewport as DialogViewport };
export const Dialog = { Root, Trigger, Popup, Backdrop, Title, Description, Close, Portal, Header, Footer, Content, Viewport };

export type DialogRootProps = DialogPrimitive.Root.Props;
export type DialogTriggerProps = DialogPrimitive.Trigger.Props;
export type DialogPopupProps = DialogPrimitive.Popup.Props;
export type DialogBackdropProps = DialogPrimitive.Backdrop.Props;
export type DialogTitleProps = DialogPrimitive.Title.Props;
export type DialogDescriptionProps = DialogPrimitive.Description.Props;
export type DialogCloseProps = DialogPrimitive.Close.Props;
export type DialogPortalProps = DialogPrimitive.Portal.Props;
export type DialogHeaderProps = ComponentProps<'div'>;
export type DialogFooterProps = ComponentProps<'div'>;
export type DialogContentProps = ContentProps;
export type DialogViewportProps = DialogPrimitive.Viewport.Props;
