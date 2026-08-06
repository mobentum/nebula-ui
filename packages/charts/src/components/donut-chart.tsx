'use client';

import {
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { cn } from '@mobentum/nebula-ui';
import { ChartLegend } from '../internals/chart-legend';
import { ChartTooltip } from '../internals/chart-tooltip';
import { defaultValueFormatter, pickColor } from '../internals/chart-colors';
import { wrapperStyle } from '../internals/chart-props';

export interface DonutChartProps {
  data: Record<string, any>[];
  index: string;
  category: string;
  colors?: string[];
  valueFormatter?: (value: number | string) => string;
  showLabel?: boolean;
  variant?: 'donut' | 'pie';
  showTooltip?: boolean;
  showLegend?: boolean;
  showAnimation?: boolean;
  height?: number;
  ariaLabel?: string;
  className?: string;
}

export function DonutChart({
  data,
  index,
  category,
  colors,
  valueFormatter,
  showLabel = false,
  variant = 'donut',
  showTooltip = true,
  showLegend = true,
  showAnimation = true,
  height,
  ariaLabel,
  className,
}: DonutChartProps) {
  const format = valueFormatter ?? defaultValueFormatter;
  const label = ariaLabel ?? `${category} by ${index}`;
  const innerRadius = variant === 'donut' ? '60%' : 0;

  return (
    <div
      className={cn('h-72 w-full', className)}
      style={wrapperStyle(height)}
      role="img"
      aria-label={label}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          {showTooltip && (
            <Tooltip content={<ChartTooltip valueFormatter={format} />} />
          )}
          <Pie
            data={data}
            dataKey={category}
            nameKey={index}
            innerRadius={innerRadius}
            outerRadius="80%"
            paddingAngle={2}
            strokeWidth={0}
            isAnimationActive={showAnimation}
            label={showLabel ? (entry: any) => entry[index] : false}
            labelLine={false}
          >
            {data.map((datum, i) => (
              <Cell key={String(datum[index] ?? i)} fill={pickColor(i, colors)} />
            ))}
          </Pie>
          {showLegend && <Legend content={<ChartLegend />} />}
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}
