'use client';

import { forwardRef } from 'react';
import { Slider as SliderPrimitive } from '@base-ui/react/slider';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLDivElement, SliderPrimitive.Root.Props<number>>(
  ({ className, ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn('relative flex w-full touch-none select-none items-center', className)}
      {...props}
    />
  ),
);

Root.displayName = 'Slider.Root';

const Track = forwardRef<HTMLDivElement, SliderPrimitive.Track.Props>(
  ({ className, ...props }, ref) => (
    <SliderPrimitive.Track
      ref={ref}
      className={cn('relative h-3 w-full rounded-full bg-nb-muted', className)}
      {...props}
    />
  ),
);

Track.displayName = 'Slider.Track';

const Range = forwardRef<HTMLDivElement, SliderPrimitive.Indicator.Props>(
  ({ className, ...props }, ref) => (
    <SliderPrimitive.Indicator
      ref={ref}
      className={cn('absolute h-full rounded-full bg-nb-primary', className)}
      {...props}
    />
  ),
);

Range.displayName = 'Slider.Range';

const Thumb = forwardRef<HTMLDivElement, SliderPrimitive.Thumb.Props>(
  ({ className, ...props }, ref) => (
    <SliderPrimitive.Thumb
      ref={ref}
      className={cn(
        'block h-5 w-5 rounded-full border-2 border-nb-primary bg-nb-bg shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    />
  ),
);

Thumb.displayName = 'Slider.Thumb';

const Control = forwardRef<HTMLDivElement, SliderPrimitive.Control.Props>(
  ({ className, ...props }, ref) => (
    <SliderPrimitive.Control
      ref={ref}
      className={cn('w-full', className)}
      {...props}
    />
  ),
);

Control.displayName = 'Slider.Control';

const Label = SliderPrimitive.Label;
const Value = SliderPrimitive.Value;

export { Root as SliderRoot, Track as SliderTrack, Range as SliderRange, Thumb as SliderThumb, Control as SliderControl, Label as SliderLabel, Value as SliderValue };
export const Slider = {
  Root,
  Track,
  Range,
  Thumb,
  Control,
  Label,
  Value,
};

export type SliderRootProps = SliderPrimitive.Root.Props<number>;
export type SliderTrackProps = SliderPrimitive.Track.Props;
export type SliderRangeProps = SliderPrimitive.Indicator.Props;
export type SliderThumbProps = SliderPrimitive.Thumb.Props;
export type SliderControlProps = SliderPrimitive.Control.Props;
export type SliderLabelProps = SliderPrimitive.Label.Props;
export type SliderValueProps = SliderPrimitive.Value.Props;
