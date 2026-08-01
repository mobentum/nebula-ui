import type { CSSProperties } from 'react';

export interface ChartCommonProps {
  colors?: string[];
  valueFormatter?: (value: number | string) => string;
  showLegend?: boolean;
  showTooltip?: boolean;
  showGridLines?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  yAxisWidth?: number;
  showAnimation?: boolean;
  height?: number;
  ariaLabel?: string;
  className?: string;
}

export interface AxisDomainProps {
  minValue?: number;
  maxValue?: number;
}

export function axisDomain(
  minValue?: number,
  maxValue?: number,
): [number | string, number | string] {
  return [minValue ?? 'auto', maxValue ?? 'auto'];
}

export function wrapperStyle(height?: number): CSSProperties | undefined {
  return height != null ? { height } : undefined;
}
