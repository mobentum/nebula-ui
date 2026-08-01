export const chartColors = [
  'var(--color-nb-primary)',
  'var(--color-nb-success)',
  'var(--color-nb-warning)',
  'var(--color-nb-info)',
  'var(--color-nb-destructive)',
] as const;

export function pickColor(index: number, colors?: string[]): string {
  const palette: readonly string[] =
    colors && colors.length > 0 ? colors : chartColors;
  return palette[index % palette.length];
}

export function defaultValueFormatter(value: number | string): string {
  return typeof value === 'number' ? value.toLocaleString() : value;
}
