'use client';

import { Tracker } from '@mobentum/nebula-charts';

const uptime = Array.from({ length: 90 }, (_, i) => ({
  color: i % 23 === 0 ? 'var(--color-nb-destructive)' : 'var(--color-nb-success)',
  tooltip: i % 23 === 0 ? 'Downtime' : 'Operational',
}));

export function TrackerDemo() {
  return <Tracker data={uptime} ariaLabel="Uptime over the last 90 days" />;
}
