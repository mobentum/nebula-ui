'use client';

import { ComboChart } from '@mobentum/nebula-charts';

const data = [
  { month: 'Jan', revenue: 4200, target: 3800 },
  { month: 'Feb', revenue: 5100, target: 4200 },
  { month: 'Mar', revenue: 4800, target: 4600 },
  { month: 'Apr', revenue: 6100, target: 5000 },
  { month: 'May', revenue: 5800, target: 5400 },
  { month: 'Jun', revenue: 7200, target: 6000 },
];

export function ComboChartDemo() {
  return (
    <ComboChart
      data={data}
      index="month"
      barSeries={['revenue']}
      lineSeries={['target']}
      valueFormatter={(value) => `$${value.toLocaleString()}`}
    />
  );
}
