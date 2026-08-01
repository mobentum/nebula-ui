'use client';

import { forwardRef } from 'react';
import { Drawer as DrawerPrimitive } from '@base-ui/react/drawer';
import { X } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';

const Root = DrawerPrimitive.Root;

const Trigger = DrawerPrimitive.Trigger;

const Portal = DrawerPrimitive.Portal;

const Popup = DrawerPrimitive.Popup;

const Viewport = forwardRef<HTMLDivElement, DrawerPrimitive.Viewport.Props>(
  ({ className, ...props }, ref) => (
    <DrawerPrimitive.Viewport
      ref={ref}
      className={cn('pointer-events-none', className)}
      {...props}
    />
  ),
);
Viewport.displayName = 'Drawer.Viewport';

const Backdrop = forwardRef<HTMLDivElement, DrawerPrimitive.Backdrop.Props>(
  ({ className, ...props }, ref) => (
    <DrawerPrimitive.Backdrop
      ref={ref}
      className={cn('fixed inset-0 z-40 bg-black/50', className)}
      {...props}
    />
  ),
);

Backdrop.displayName = 'Drawer.Backdrop';

const Panel = forwardRef<HTMLDivElement, DrawerPrimitive.Content.Props>(
  ({ className, ...props }, ref) => (
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        'pointer-events-auto fixed inset-y-0 end-0 z-50 w-full max-w-md overflow-y-auto border-s border-nb-border bg-nb-bg p-6 text-nb-fg shadow-xl',
        className,
      )}
      {...props}
    />
  ),
);

Panel.displayName = 'Drawer.Panel';

interface ContentProps extends DrawerPrimitive.Content.Props {
  showCloseButton?: boolean;
}

const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ className, children, showCloseButton = true, ...props }, ref) => (
    <Portal>
      <Backdrop />
      <Viewport>
        <Popup>
          <Panel ref={ref} className={className} {...props}>
            {children}
            {showCloseButton && <Close />}
          </Panel>
        </Popup>
      </Viewport>
    </Portal>
  ),
);

Content.displayName = 'Drawer.Content';

const Title = forwardRef<HTMLHeadingElement, DrawerPrimitive.Title.Props>(
  ({ className, ...props }, ref) => (
    <DrawerPrimitive.Title
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  ),
);

Title.displayName = 'Drawer.Title';

const Description = forwardRef<HTMLDivElement, DrawerPrimitive.Description.Props>(
  ({ className, ...props }, ref) => (
    <DrawerPrimitive.Description
      ref={ref}
      render={<div />}
      className={cn('text-sm text-nb-muted-fg', className)}
      {...props}
    />
  ),
);

Description.displayName = 'Drawer.Description';

const Close = forwardRef<HTMLButtonElement, DrawerPrimitive.Close.Props>(
  ({ className, children, render, ...props }, ref) => (
    <DrawerPrimitive.Close
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
    </DrawerPrimitive.Close>
  ),
);

Close.displayName = 'Drawer.Close';

function XIcon({ className, ...props }: { className?: string; [key: string]: any }) {
  return <X className={className} aria-hidden {...props} />;
}

export { Root as DrawerRoot, Trigger as DrawerTrigger, Backdrop as DrawerBackdrop, Panel as DrawerPanel, Portal as DrawerPortal, Popup as DrawerPopup, Viewport as DrawerViewport, Title as DrawerTitle, Description as DrawerDescription, Close as DrawerClose, Content as DrawerContent };
export const Drawer = { Root, Trigger, Backdrop, Panel, Portal, Popup, Viewport, Title, Description, Close, Content };

export type DrawerRootProps = DrawerPrimitive.Root.Props;
export type DrawerTriggerProps = DrawerPrimitive.Trigger.Props;
export type DrawerBackdropProps = DrawerPrimitive.Backdrop.Props;
export type DrawerPanelProps = DrawerPrimitive.Content.Props;
export type DrawerTitleProps = DrawerPrimitive.Title.Props;
export type DrawerDescriptionProps = DrawerPrimitive.Description.Props;
export type DrawerCloseProps = DrawerPrimitive.Close.Props;
