export const indicatorColors = {
  primary: 'bg-nb-primary',
  success: 'bg-nb-success',
  warning: 'bg-nb-warning',
  danger: 'bg-nb-destructive',
} as const;

export type IndicatorColor = keyof typeof indicatorColors;
