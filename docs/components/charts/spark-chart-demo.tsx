'use client';

import { SparkChart } from '@nebula/charts';

const data = [
  { day: 'Mon', requests: 1200 },
  { day: 'Tue', requests: 1400 },
  { day: 'Wed', requests: 1320 },
  { day: 'Thu', requests: 1700 },
  { day: 'Fri', requests: 1900 },
  { day: 'Sat', requests: 1550 },
  { day: 'Sun', requests: 1380 },
];

export function SparkChartDemo() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-nb-border bg-nb-card p-4">
      <p className="text-sm font-medium text-nb-fg">API requests</p>
      <p className="text-xs text-nb-muted-fg">Last 7 days</p>
      <SparkChart
        className="mt-3 h-14"
        data={data}
        index="day"
        categories={['requests']}
        valueFormatter={(value) => value.toLocaleString()}
      />
    </div>
  );
}
