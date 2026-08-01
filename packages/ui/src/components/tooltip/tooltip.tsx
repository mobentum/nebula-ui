'use client';

import { forwardRef } from 'react';
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';
import { cn } from '../../lib/cn';

const Provider = ({ delay = 500, ...props }: TooltipPrimitive.Provider.Props) => (
  <TooltipPrimitive.Provider delay={delay} {...props} />
);

Provider.displayName = 'Tooltip.Provider';

const Root = TooltipPrimitive.Root;

const Trigger = TooltipPrimitive.Trigger;

const Popup = forwardRef<HTMLDivElement, TooltipPrimitive.Popup.Props>(
  ({ className, ...props }, ref) => (
    <TooltipPrimitive.Popup
      ref={ref}
      className={cn(
        'z-[60] overflow-hidden rounded-md bg-nb-popover px-3 py-1.5 text-xs text-nb-popover-fg shadow-md',
        className,
      )}
      {...props}
    />
  ),
);

Popup.displayName = 'Tooltip.Popup';

const Arrow = forwardRef<HTMLDivElement, TooltipPrimitive.Arrow.Props>(
  ({ className, ...props }, ref) => (
    <TooltipPrimitive.Arrow
      ref={ref}
      className={cn('fill-popover-foreground', className)}
      {...props}
    />
  ),
);

Arrow.displayName = 'Tooltip.Arrow';

const Positioner = forwardRef<HTMLDivElement, TooltipPrimitive.Positioner.Props>(
  ({ className, ...props }, ref) => (
    <TooltipPrimitive.Positioner
      ref={ref}
      className={cn('z-[60]', className)}
      {...props}
    />
  ),
);

Positioner.displayName = 'Tooltip.Positioner';

const Portal = forwardRef<HTMLDivElement, TooltipPrimitive.Portal.Props>(
  ({ className, ...props }, ref) => (
    <TooltipPrimitive.Portal
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  ),
);

Portal.displayName = 'Tooltip.Portal';

const Viewport = TooltipPrimitive.Viewport;

export { Provider as TooltipProvider, Root as TooltipRoot, Trigger as TooltipTrigger, Popup as TooltipPopup, Arrow as TooltipArrow, Positioner as TooltipPositioner, Portal as TooltipPortal, Viewport as TooltipViewport };
export const Tooltip = { Provider, Root, Trigger, Popup, Arrow, Positioner, Portal, Viewport };

export type TooltipProviderProps = TooltipPrimitive.Provider.Props;
export type TooltipRootProps = TooltipPrimitive.Root.Props;
export type TooltipTriggerProps = TooltipPrimitive.Trigger.Props;
export type TooltipPopupProps = TooltipPrimitive.Popup.Props;
export type TooltipArrowProps = TooltipPrimitive.Arrow.Props;
export type TooltipPositionerProps = TooltipPrimitive.Positioner.Props;
export type TooltipPortalProps = TooltipPrimitive.Portal.Props;
export type TooltipViewportProps = TooltipPrimitive.Viewport.Props;
