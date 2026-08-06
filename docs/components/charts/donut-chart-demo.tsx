'use client';

import { DonutChart } from '@mobentum/nebula-charts';

const data = [
  { plan: 'Free', revenue: 4200 },
  { plan: 'Pro', revenue: 6800 },
  { plan: 'Enterprise', revenue: 2400 },
];

export function DonutChartDemo() {
  return (
    <DonutChart
      data={data}
      index="plan"
      category="revenue"
      valueFormatter={(value) => `$${value.toLocaleString()}`}
    />
  );
}
