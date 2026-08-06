'use client';

import { AreaChart } from '@mobentum/nebula-charts';

const data = [
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 5100 },
  { month: 'Mar', revenue: 4800 },
  { month: 'Apr', revenue: 6100 },
  { month: 'May', revenue: 5800 },
  { month: 'Jun', revenue: 7200 },
];

export function AreaChartDemo() {
  return (
    <AreaChart
      data={data}
      index="month"
      categories={['revenue']}
      valueFormatter={(value) => `$${value.toLocaleString()}`}
    />
  );
}
