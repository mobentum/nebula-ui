'use client';

import { BarChart } from '@mobentum/nebula-charts';

const data = [
  { month: 'Jan', revenue: 4200, expenses: 2600 },
  { month: 'Feb', revenue: 5100, expenses: 2900 },
  { month: 'Mar', revenue: 4800, expenses: 2700 },
  { month: 'Apr', revenue: 6100, expenses: 3200 },
];

export function BarChartStackedDemo() {
  return (
    <BarChart
      data={data}
      index="month"
      categories={['revenue', 'expenses']}
      stacked
      valueFormatter={(value) => `$${value.toLocaleString()}`}
    />
  );
}
