'use client';

import {
  Bar,
  BarChart as RechartsBarChart,
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

export interface BarChartProps extends ChartCommonProps, AxisDomainProps {
  data: Record<string, any>[];
  index: string;
  categories: string[];
  stacked?: boolean;
}

export function BarChart({
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
  stacked = false,
  ariaLabel,
  className,
}: BarChartProps) {
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
        <RechartsBarChart
          data={data}
          margin={{ top: 4, right: 8, bottom: 0, left: 0 }}
          barCategoryGap={stacked ? '20%' : '8%'}
          accessibilityLayer
        >
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
              cursor={{ fill: 'var(--color-nb-muted)', opacity: 0.4 }}
              content={<ChartTooltip valueFormatter={format} />}
            />
          )}
          {showLegend && <Legend content={<ChartLegend />} />}
          {categories.map((category, i) => (
            <Bar
              key={category}
              dataKey={category}
              fill={pickColor(i, colors)}
              radius={[3, 3, 0, 0]}
              maxBarSize={48}
              stackId={stacked ? 'stack' : undefined}
              isAnimationActive={showAnimation}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
