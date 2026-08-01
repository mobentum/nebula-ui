'use client';

import { forwardRef } from 'react';
import { Switch as SwitchPrimitive } from '@base-ui/react/switch';
import { cn } from '../../lib/cn';

const SwitchRoot = forwardRef<HTMLElement, SwitchPrimitive.Root.Props>(
  ({ className, ...props }, ref) => (
    <SwitchPrimitive.Root
      ref={ref}
      className={cn(
        'relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors data-checked:bg-nb-primary data-unchecked:bg-nb-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    />
  ),
);

SwitchRoot.displayName = 'Switch.Root';

const SwitchThumb = forwardRef<HTMLSpanElement, SwitchPrimitive.Thumb.Props>(
  ({ className, ...props }, ref) => (
    <SwitchPrimitive.Thumb
      ref={ref}
      className={cn(
        'block h-5 w-5 rounded-full bg-nb-bg shadow-sm transition-transform ltr:data-checked:translate-x-[22px] rtl:data-checked:-translate-x-[22px] ltr:data-unchecked:translate-x-0.5 rtl:data-unchecked:-translate-x-0.5',
        className,
      )}
      {...props}
    />
  ),
);

SwitchThumb.displayName = 'Switch.Thumb';

export { SwitchRoot as SwitchRoot, SwitchThumb as SwitchThumb };
export const Switch = {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
};

export type SwitchRootProps = SwitchPrimitive.Root.Props;
export type SwitchThumbProps = SwitchPrimitive.Thumb.Props;
