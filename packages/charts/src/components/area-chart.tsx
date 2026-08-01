'use client';

import { useId } from 'react';
import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { cn } from '@nebula/ui';
import { ChartLegend } from '../internals/chart-legend';
import { ChartTooltip } from '../internals/chart-tooltip';
import { defaultValueFormatter, pickColor } from '../internals/chart-colors';
import { axisDomain, wrapperStyle } from '../internals/chart-props';
import type { AxisDomainProps, ChartCommonProps } from '../internals/chart-props';

export interface AreaChartProps extends ChartCommonProps, AxisDomainProps {
  data: Record<string, any>[];
  index: string;
  categories: string[];
}

export function AreaChart({
  data,
  index,
  categories,
  colors,
  valueFormatter,
  showLegend = true,
  showTooltip = true,
  showGridLines = true,
  showXAxis = true,
  showYAxis = true,
  yAxisWidth = 40,
  minValue,
  maxValue,
  showAnimation = true,
  height,
  ariaLabel,
  className,
}: AreaChartProps) {
  const gradientId = useId();
  const format = valueFormatter ?? defaultValueFormatter;
  const label = ariaLabel ?? `${categories.join(' and ')} by ${index}`;

  return (
    <div
      className={cn('h-72 w-full', className)}
      style={wrapperStyle(height)}
      role="img"
      aria-label={label}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart
          data={data}
          margin={{ top: 4, right: 8, bottom: 0, left: 0 }}
          accessibilityLayer
        >
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
          {showGridLines && (
            <CartesianGrid
              vertical={false}
              stroke="var(--color-nb-border)"
              strokeDasharray="3 3"
            />
          )}
          {showXAxis && (
            <XAxis
              dataKey={index}
              tickLine={false}
              axisLine={false}
              tick={{ fill: 'var(--color-nb-muted-fg)', fontSize: 12 }}
              padding={{ left: 10, right: 10 }}
              minTickGap={16}
            />
          )}
          {showYAxis && (
            <YAxis
              tickLine={false}
              axisLine={false}
              width={yAxisWidth}
              domain={axisDomain(minValue, maxValue)}
              tick={{ fill: 'var(--color-nb-muted-fg)', fontSize: 12 }}
              tickFormatter={(value: number | string) => format(value)}
            />
          )}
          {showTooltip && (
            <Tooltip
              cursor={{ stroke: 'var(--color-nb-border)' }}
              content={<ChartTooltip valueFormatter={format} />}
            />
          )}
          {showLegend && <Legend content={<ChartLegend />} />}
          {categories.map((category, i) => (
            <Area
              key={category}
              type="monotone"
              dataKey={category}
              stroke={pickColor(i, colors)}
              strokeWidth={2}
              fill={`url(#${gradientId}-${i})`}
              isAnimationActive={showAnimation}
            />
          ))}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
}
