'use client';

import { ComboChart, DonutChart } from '@mobentum/nebula-charts';
import {
  Badge,
  CardRoot,
  ProgressIndicator,
  ProgressLabel,
  ProgressRoot,
  ProgressTrack,
  ProgressValueLabel,
} from '@mobentum/nebula-ui';
import { activity, kpis, planMix, revenueData } from '../data';

export function DashboardView() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <CardRoot key={k.label} className="p-5">
            <p className="text-xs font-medium text-nb-muted-fg">{k.label}</p>
            <p className="mt-2 text-2xl font-bold text-nb-fg">{k.value}</p>
            <p
              className={`mt-1 text-xs font-medium ${k.up ? 'text-emerald-600' : 'text-nb-destructive'}`}
            >
              {k.delta}
            </p>
          </CardRoot>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <CardRoot className="p-6 lg:col-span-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-base font-semibold text-nb-fg">Revenue</h3>
              <p className="text-sm text-nb-muted-fg">Monthly revenue vs target</p>
            </div>
            <Badge variant="solid">+12.4%</Badge>
          </div>
          <ComboChart
            className="mt-4 h-64"
            data={revenueData}
            index="month"
            barSeries={['revenue']}
            lineSeries={['target']}
            valueFormatter={(value) => `$${Number(value).toLocaleString()}`}
          />
        </CardRoot>

        <CardRoot className="p-6">
          <h3 className="text-base font-semibold text-nb-fg">Revenue by plan</h3>
          <p className="text-sm text-nb-muted-fg">Current billing cycle</p>
          <DonutChart
            className="mt-4 h-48"
            data={planMix}
            index="plan"
            category="revenue"
            valueFormatter={(value) => `$${Number(value).toLocaleString()}`}
          />
        </CardRoot>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <CardRoot className="p-6">
          <h3 className="text-base font-semibold text-nb-fg">Recent activity</h3>
          <div className="mt-4 space-y-1">
            {activity.map((a) => (
              <div key={a.title} className="flex items-start justify-between gap-4 py-2">
                <div>
                  <p className="text-sm font-medium text-nb-fg">{a.title}</p>
                  <p className="text-xs text-nb-muted-fg">{a.detail}</p>
                </div>
                <span className="shrink-0 text-xs text-nb-muted-fg">{a.time}</span>
              </div>
            ))}
          </div>
        </CardRoot>

        <CardRoot className="p-6">
          <h3 className="text-base font-semibold text-nb-fg">Usage</h3>
          <div className="mt-6 space-y-6">
            <ProgressRoot value={72}>
              <ProgressLabel className="mb-1.5 flex justify-between">
                <span className="text-xs text-nb-muted-fg">API requests</span>
                <ProgressValueLabel className="text-xs" />
              </ProgressLabel>
              <ProgressTrack>
                <ProgressIndicator />
              </ProgressTrack>
            </ProgressRoot>
            <ProgressRoot value={45}>
              <ProgressLabel className="mb-1.5 flex justify-between">
                <span className="text-xs text-nb-muted-fg">Storage</span>
                <ProgressValueLabel className="text-xs" />
              </ProgressLabel>
              <ProgressTrack>
                <ProgressIndicator />
              </ProgressTrack>
            </ProgressRoot>
          </div>
        </CardRoot>
      </div>
    </div>
  );
}
