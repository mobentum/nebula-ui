'use client';

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { cn } from '@mobentum/nebula-ui';
import { ChartLegend } from '../internals/chart-legend';
import { ChartTooltip } from '../internals/chart-tooltip';
import { defaultValueFormatter, pickColor } from '../internals/chart-colors';
import { axisDomain, wrapperStyle } from '../internals/chart-props';
import type { AxisDomainProps, ChartCommonProps } from '../internals/chart-props';

export interface ComboChartProps extends ChartCommonProps, AxisDomainProps {
  data: Record<string, any>[];
  index: string;
  barSeries: string[];
  lineSeries: string[];
  lineColors?: string[];
}

export function ComboChart({
  data,
  index,
  barSeries,
  lineSeries,
  colors,
  lineColors,
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
}: ComboChartProps) {
  const format = valueFormatter ?? defaultValueFormatter;
  const label =
    ariaLabel ?? `${[...barSeries, ...lineSeries].join(' and ')} by ${index}`;

  return (
    <div
      className={cn('h-72 w-full', className)}
      style={wrapperStyle(height)}
      role="img"
      aria-label={label}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 4, right: 8, bottom: 0, left: 0 }}
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
              cursor={{ stroke: 'var(--color-nb-border)' }}
              content={<ChartTooltip valueFormatter={format} />}
            />
          )}
          {showLegend && <Legend content={<ChartLegend />} />}
          {barSeries.map((series, i) => (
            <Bar
              key={series}
              dataKey={series}
              fill={pickColor(i, colors)}
              radius={[3, 3, 0, 0]}
              maxBarSize={32}
              isAnimationActive={showAnimation}
            />
          ))}
          {lineSeries.map((series, i) => (
            <Line
              key={series}
              type="monotone"
              dataKey={series}
              stroke={pickColor(i, lineColors)}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
              isAnimationActive={showAnimation}
            />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
