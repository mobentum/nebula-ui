'use client';

import { createContext, forwardRef, useContext } from 'react';
import { Meter as MeterPrimitive } from '@base-ui/react/meter';
import { cn } from '../../lib/cn';
import { indicatorColors, type IndicatorColor } from '../../lib/indicator-colors';

const ColorContext = createContext<IndicatorColor>('primary');

export interface MeterRootProps extends MeterPrimitive.Root.Props {
  color?: IndicatorColor;
}

const Root = forwardRef<HTMLDivElement, MeterRootProps>(
  ({ className, color = 'primary', ...props }, ref) => (
    <ColorContext.Provider value={color}>
      <MeterPrimitive.Root ref={ref} className={cn(className)} {...props} />
    </ColorContext.Provider>
  ),
);

Root.displayName = 'Meter.Root';

const Track = forwardRef<HTMLDivElement, MeterPrimitive.Track.Props>(
  ({ className, ...props }, ref) => (
    <MeterPrimitive.Track
      ref={ref}
      className={cn('h-2 w-full overflow-hidden rounded-full bg-nb-accent', className)}
      {...props}
    />
  ),
);

Track.displayName = 'Meter.Track';

const Indicator = forwardRef<HTMLDivElement, MeterPrimitive.Indicator.Props>(
  ({ className, ...props }, ref) => {
    const color = useContext(ColorContext);
    return (
      <MeterPrimitive.Indicator
        ref={ref}
        className={cn(
          'h-full rounded-full transition-[width]',
          indicatorColors[color],
          className,
        )}
        {...props}
      />
    );
  },
);

Indicator.displayName = 'Meter.Indicator';

const Label = forwardRef<HTMLSpanElement, MeterPrimitive.Label.Props>(
  ({ className, ...props }, ref) => (
    <MeterPrimitive.Label
      ref={ref}
      className={cn('text-base font-medium', className)}
      {...props}
    />
  ),
);

Label.displayName = 'Meter.Label';

const ValueLabel = forwardRef<HTMLSpanElement, MeterPrimitive.Value.Props>(
  ({ className, ...props }, ref) => (
    <MeterPrimitive.Value
      ref={ref}
      className={cn('text-xs text-nb-muted-fg', className)}
      {...props}
    />
  ),
);

ValueLabel.displayName = 'Meter.ValueLabel';

export { Root as MeterRoot, Track as MeterTrack, Indicator as MeterIndicator, Label as MeterLabel, ValueLabel as MeterValueLabel };
export const Meter = { Root, Track, Indicator, Label, ValueLabel };

export type MeterTrackProps = MeterPrimitive.Track.Props;
export type MeterIndicatorProps = MeterPrimitive.Indicator.Props;
export type MeterLabelProps = MeterPrimitive.Label.Props;
export type MeterValueLabelProps = MeterPrimitive.Value.Props;
