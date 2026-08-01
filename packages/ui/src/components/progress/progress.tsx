'use client';

import { createContext, forwardRef, useContext } from 'react';
import { Progress as ProgressPrimitive } from '@base-ui/react/progress';
import { cn } from '../../lib/cn';
import { indicatorColors, type IndicatorColor } from '../../lib/indicator-colors';

const ColorContext = createContext<IndicatorColor>('primary');

export interface ProgressRootProps extends ProgressPrimitive.Root.Props {
  color?: IndicatorColor;
}

const Root = forwardRef<HTMLDivElement, ProgressRootProps>(
  ({ className, color = 'primary', ...props }, ref) => (
    <ColorContext.Provider value={color}>
      <ProgressPrimitive.Root ref={ref} className={cn('', className)} {...props} />
    </ColorContext.Provider>
  ),
);

Root.displayName = 'Progress.Root';

const Track = forwardRef<HTMLDivElement, ProgressPrimitive.Track.Props>(
  ({ className, ...props }, ref) => (
    <ProgressPrimitive.Track
      ref={ref}
      className={cn('h-2 w-full overflow-hidden rounded-full bg-nb-accent', className)}
      {...props}
    />
  ),
);

Track.displayName = 'Progress.Track';

const Indicator = forwardRef<HTMLDivElement, ProgressPrimitive.Indicator.Props>(
  ({ className, ...props }, ref) => {
    const color = useContext(ColorContext);
    return (
      <ProgressPrimitive.Indicator
        ref={ref}
        className={cn('h-full rounded-full transition-all duration-500', indicatorColors[color], className)}
        {...props}
      />
    );
  },
);

Indicator.displayName = 'Progress.Indicator';

const Label = forwardRef<HTMLSpanElement, ProgressPrimitive.Label.Props>(
  ({ className, ...props }, ref) => (
    <ProgressPrimitive.Label
      ref={ref}
      className={cn('text-base font-medium', className)}
      {...props}
    />
  ),
);

Label.displayName = 'Progress.Label';

const ValueLabel = forwardRef<HTMLSpanElement, ProgressPrimitive.Value.Props>(
  ({ className, ...props }, ref) => (
    <ProgressPrimitive.Value
      ref={ref}
      className={cn('text-xs text-nb-muted-fg', className)}
      {...props}
    />
  ),
);

ValueLabel.displayName = 'Progress.ValueLabel';

export { Root as ProgressRoot, Track as ProgressTrack, Indicator as ProgressIndicator, Label as ProgressLabel, ValueLabel as ProgressValueLabel };
export const Progress = {
  Root,
  Track,
  Indicator,
  Label,
  ValueLabel,
};

export type ProgressTrackProps = ProgressPrimitive.Track.Props;
export type ProgressIndicatorProps = ProgressPrimitive.Indicator.Props;
export type ProgressLabelProps = ProgressPrimitive.Label.Props;
export type ProgressValueLabelProps = ProgressPrimitive.Value.Props;
