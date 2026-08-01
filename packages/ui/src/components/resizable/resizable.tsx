'use client';

import { forwardRef } from 'react';
import {
  Group as GroupPrimitive,
  Panel as PanelPrimitive,
  Separator as SeparatorPrimitive,
} from 'react-resizable-panels';
import { DotsSixVertical } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';

const Group = forwardRef<HTMLDivElement, Record<string, any>>(
  ({ className, ...props }, ref) => (
    <GroupPrimitive
      ref={ref as any}
      className={cn(
        'flex h-full w-full',
        className,
      )}
      {...(props as any)}
    />
  ),
);

Group.displayName = 'Resizable.Group';

const Panel_ = forwardRef<HTMLDivElement, Record<string, any>>(
  ({ className, ...props }, ref) => (
    <PanelPrimitive
      ref={ref as any}
      className={cn('', className)}
      {...(props as any)}
    />
  ),
);

Panel_.displayName = 'Resizable.Panel';

const Handle = forwardRef<HTMLDivElement, Record<string, any>>(
  ({ className, ...props }, ref) => (
    <SeparatorPrimitive
      ref={ref as any}
      aria-label="Resize handle"
      className={cn(
        'relative flex w-px items-center justify-center bg-nb-border after:absolute after:inset-x-1 after:h-full after:cursor-col-resize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-1 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=horizontal]:after:inset-y-1 data-[orientation=horizontal]:after:h-1 data-[orientation=horizontal]:after:w-full data-[orientation=horizontal]:after:cursor-row-resize',
        className,
      )}
      {...(props as any)}
    >
      <span className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-nb-bg shadow-sm">
        <DotsSixVertical className="h-3.5 w-3.5 text-nb-muted-fg" aria-hidden />
      </span>
    </SeparatorPrimitive>
  ),
);

Handle.displayName = 'Resizable.Handle';

export { Group as ResizableGroup, Panel_ as ResizablePanel, Handle as ResizableHandle };
export const Resizable = { Group, Panel: Panel_, Handle };
export type ResizableGroupProps = Record<string, any>;
export type ResizablePanelProps = Record<string, any>;
export type ResizableHandleProps = Record<string, any>;
