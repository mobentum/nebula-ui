'use client';

import { useId } from 'react';
import {
  Area,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { cn } from '@mobentum/nebula-ui';
import { ChartTooltip } from '../internals/chart-tooltip';
import { defaultValueFormatter, pickColor } from '../internals/chart-colors';
import { wrapperStyle } from '../internals/chart-props';

export interface SparkChartProps {
  data: Record<string, any>[];
  index: string;
  categories: string[];
  colors?: string[];
  valueFormatter?: (value: number | string) => string;
  showTooltip?: boolean;
  showGradient?: boolean;
  showAnimation?: boolean;
  height?: number;
  ariaLabel?: string;
  className?: string;
}

export function SparkChart({
  data,
  index,
  categories,
  colors,
  valueFormatter,
  showTooltip = false,
  showGradient = true,
  showAnimation = true,
  height,
  ariaLabel,
  className,
}: SparkChartProps) {
  const gradientId = useId();
  const format = valueFormatter ?? defaultValueFormatter;
  const label = ariaLabel ?? `${categories.join(' and ')} by ${index}`;

  return (
    <div
      className={cn('h-12 w-full', className)}
      style={wrapperStyle(height)}
      role="img"
      aria-label={label}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={data}
          margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
          accessibilityLayer
        >
          {showGradient && (
            <defs>
              {categories.map((category, i) => {
                const color = pickColor(i, colors);
                return (
                  <linearGradient
                    key={category}
                    id={`${gradientId}-${i}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                  </linearGradient>
                );
              })}
            </defs>
          )}
          {showTooltip && (
            <Tooltip
              cursor={false}
              content={<ChartTooltip valueFormatter={format} />}
            />
          )}
          {categories.map((category, i) =>
            showGradient ? (
              <Area
                key={category}
                type="monotone"
                dataKey={category}
                stroke={pickColor(i, colors)}
                strokeWidth={2}
                fill={`url(#${gradientId}-${i})`}
                dot={false}
                isAnimationActive={showAnimation}
              />
            ) : (
              <Line
                key={category}
                type="monotone"
                dataKey={category}
                stroke={pickColor(i, colors)}
                strokeWidth={2}
                dot={false}
                isAnimationActive={showAnimation}
              />
            ),
          )}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
