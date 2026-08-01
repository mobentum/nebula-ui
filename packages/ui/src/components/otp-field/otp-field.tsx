'use client';

import { forwardRef } from 'react';
import { OTPField as OTPFieldPrimitive } from '@base-ui/react/otp-field';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLDivElement, OTPFieldPrimitive.Root.Props>(
  ({ className, ...props }, ref) => (
    <OTPFieldPrimitive.Root
      ref={ref}
      className={cn('flex items-center gap-2', className)}
      {...props}
    />
  ),
);

Root.displayName = 'OTPField.Root';

const Group = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center gap-2', className)} {...props} />
  ),
);

Group.displayName = 'OTPField.Group';

const Slot = forwardRef<HTMLInputElement, OTPFieldPrimitive.Input.Props>(
  ({ className, ...props }, ref) => (
    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-nb-border text-sm font-medium">
      <OTPFieldPrimitive.Input
        ref={ref}
        className={cn(
          'h-full w-full rounded-md bg-transparent text-center outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2',
          className,
        )}
        {...props}
      />
    </div>
  ),
);

Slot.displayName = 'OTPField.Slot';

const Separator = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('text-nb-muted-fg', className)}
      {...props}
    >
      —
    </span>
  ),
);

Separator.displayName = 'OTPField.Separator';

export { Root as OTPFieldRoot, Group as OTPFieldGroup, Slot as OTPFieldSlot, Separator as OTPFieldSeparator };
export const OTPField = {
  Root,
  Group,
  Slot,
  Separator,
};

export type OTPFieldRootProps = OTPFieldPrimitive.Root.Props;
