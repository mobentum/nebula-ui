'use client';

import { forwardRef } from 'react';
import { PreviewCard as HoverCardPrimitive } from '@base-ui/react/preview-card';
import { cn } from '../../lib/cn';

const Root = HoverCardPrimitive.Root;

const Trigger = HoverCardPrimitive.Trigger;

const Portal = HoverCardPrimitive.Portal;

const Positioner = forwardRef<HTMLDivElement, HoverCardPrimitive.Positioner.Props>(
  ({ className, ...props }, ref) => (
    <HoverCardPrimitive.Positioner
      ref={ref}
      className={cn('z-[60]', className)}
      {...props}
    />
  ),
);

Positioner.displayName = 'HoverCard.Positioner';

const Popup = forwardRef<HTMLDivElement, HoverCardPrimitive.Popup.Props>(
  ({ className, ...props }, ref) => (
    <HoverCardPrimitive.Popup
      ref={ref}
      className={cn(
        'z-[60] w-64 rounded-md border border-nb-border bg-nb-popover p-4 text-nb-popover-fg shadow-lg outline-none',
        className,
      )}
      {...props}
    />
  ),
);

Popup.displayName = 'HoverCard.Popup';

const Arrow = forwardRef<HTMLDivElement, HoverCardPrimitive.Arrow.Props>(
  ({ className, ...props }, ref) => (
    <HoverCardPrimitive.Arrow
      ref={ref}
      className={cn('fill-neutral-200', className)}
      {...props}
    />
  ),
);

Arrow.displayName = 'HoverCard.Arrow';

export { Root as HoverCardRoot, Trigger as HoverCardTrigger, Portal as HoverCardPortal, Positioner as HoverCardPositioner, Popup as HoverCardPopup, Arrow as HoverCardArrow };
export const HoverCard = { Root, Trigger, Portal, Positioner, Popup, Arrow };
export type HoverCardRootProps = HoverCardPrimitive.Root.Props;
export type HoverCardTriggerProps = HoverCardPrimitive.Trigger.Props;
export type HoverCardPortalProps = HoverCardPrimitive.Portal.Props;
export type HoverCardPositionerProps = HoverCardPrimitive.Positioner.Props;
export type HoverCardPopupProps = HoverCardPrimitive.Popup.Props;
export type HoverCardArrowProps = HoverCardPrimitive.Arrow.Props;
