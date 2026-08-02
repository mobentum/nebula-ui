'use client';

import { ComboChart, SparkChart } from '@nebula/charts';
import { CardRoot, ProgressIndicator, ProgressRoot, ProgressTrack } from '@nebula/ui';

const kpis = [
  {
    label: 'Monthly revenue',
    value: '$24,500',
    delta: '+12.4%',
    up: true,
    data: [
      { d: 'Mon', v: 1200 },
      { d: 'Tue', v: 2100 },
      { d: 'Wed', v: 1800 },
      { d: 'Thu', v: 2600 },
      { d: 'Fri', v: 3100 },
    ],
  },
  {
    label: 'Active users',
    value: '8,431',
    delta: '+5.2%',
    up: true,
    data: [
      { d: 'Mon', v: 400 },
      { d: 'Tue', v: 900 },
      { d: 'Wed', v: 700 },
      { d: 'Thu', v: 1200 },
      { d: 'Fri', v: 1100 },
    ],
  },
  {
    label: 'API requests',
    value: '2.1M',
    delta: '-1.8%',
    up: false,
    data: [
      { d: 'Mon', v: 300 },
      { d: 'Tue', v: 500 },
      { d: 'Wed', v: 450 },
      { d: 'Thu', v: 420 },
      { d: 'Fri', v: 380 },
    ],
  },
  {
    label: 'Uptime',
    value: '99.99%',
    delta: '+0.01%',
    up: true,
    data: [
      { d: 'Mon', v: 99.9 },
      { d: 'Tue', v: 99.95 },
      { d: 'Wed', v: 99.98 },
      { d: 'Thu', v: 99.99 },
      { d: 'Fri', v: 99.99 },
    ],
  },
];

export function KpiCards() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <CardRoot key={kpi.label} className="p-5">
          <p className="text-xs font-medium text-nb-muted-fg">{kpi.label}</p>
          <p className="mt-2 text-2xl font-bold text-nb-fg">{kpi.value}</p>
          <div className="mt-3 flex items-end justify-between gap-3">
            <p
              className={`text-xs font-medium ${kpi.up ? 'text-nb-success' : 'text-nb-destructive'}`}
            >
              {kpi.delta}
            </p>
            <SparkChart
              className="h-10 w-24"
              data={kpi.data}
              index="d"
              categories={['v']}
              showGradient={false}
            />
          </div>
        </CardRoot>
      ))}
    </div>
  );
}

const quotas = [
  { label: 'API requests', used: '1.7M / 2.0M', value: 85 },
  { label: 'Storage', used: '61 GB / 100 GB', value: 61 },
  { label: 'Seats', used: '5 / 10', value: 50 },
];

export function KpiCompact() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-3">
      {quotas.map((quota) => (
        <CardRoot key={quota.label} className="p-5">
          <p className="text-sm font-medium text-nb-fg">{quota.label}</p>
          <p className="mt-1 text-2xl font-bold text-nb-fg">{quota.value}%</p>
          <ProgressRoot value={quota.value} className="mt-3">
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </ProgressRoot>
          <p className="mt-2 text-xs text-nb-muted-fg">{quota.used}</p>
        </CardRoot>
      ))}
    </div>
  );
}

const changes = [
  { label: 'Monthly active users', stat: '996', change: '+1.3%', up: true },
  { label: 'Monthly sessions', stat: '1,672', change: '+9.1%', up: true },
  { label: 'Monthly user growth', stat: '5.1%', change: '-4.8%', up: false },
];

export function KpiChangeList() {
  return (
    <CardRoot className="w-full max-w-md p-2">
      <ul className="divide-y divide-nb-border">
        {changes.map((item) => (
          <li key={item.label} className="flex items-center gap-3 px-3 py-3">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-nb-muted-fg">{item.label}</p>
              <p className="text-lg font-bold text-nb-fg">{item.stat}</p>
            </div>
            <span
              className={`rounded-full px-2 py-1 text-xs font-medium ${
                item.up
                  ? 'bg-nb-success/10 text-nb-success'
                  : 'bg-nb-destructive/10 text-nb-destructive'
              }`}
            >
              {item.change}
            </span>
          </li>
        ))}
      </ul>
    </CardRoot>
  );
}

const revenue = [
  { month: 'Jan', revenue: 18200, target: 18000 },
  { month: 'Feb', revenue: 21000, target: 20000 },
  { month: 'Mar', revenue: 19400, target: 21000 },
  { month: 'Apr', revenue: 24800, target: 22000 },
  { month: 'May', revenue: 23200, target: 24000 },
  { month: 'Jun', revenue: 28100, target: 25000 },
];

export function KpiComposition() {
  return (
    <div className="grid w-full gap-4 lg:grid-cols-3">
      <CardRoot className="p-6 lg:col-span-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-nb-fg">Revenue</h3>
            <p className="text-sm text-nb-muted-fg">Monthly revenue vs target</p>
          </div>
          <p className="text-sm font-semibold text-nb-fg">$24,500</p>
        </div>
        <ComboChart
          className="mt-4 h-56"
          data={revenue}
          index="month"
          barSeries={['revenue']}
          lineSeries={['target']}
          valueFormatter={(value) => `$${Number(value).toLocaleString()}`}
          showLegend={false}
        />
      </CardRoot>
      <CardRoot className="p-6">
        <h3 className="text-base font-semibold text-nb-fg">Highlights</h3>
        <dl className="mt-4 space-y-4">
          {[
            { label: 'New customers', value: '1,204' },
            { label: 'Churn rate', value: '2.1%' },
            { label: 'Avg. order value', value: '$412' },
            { label: 'Conversion', value: '3.8%' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center justify-between">
              <dt className="text-sm text-nb-muted-fg">{stat.label}</dt>
              <dd className="text-sm font-semibold text-nb-fg">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </CardRoot>
    </div>
  );
}
