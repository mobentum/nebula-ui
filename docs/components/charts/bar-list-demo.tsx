'use client';

import { BarList } from '@nebula/charts';

const data = [
  { name: 'api-gateway', value: 320 },
  { name: 'web-app', value: 280 },
  { name: 'mobile-api', value: 190 },
  { name: 'data-pipeline', value: 140 },
];

export function BarListDemo() {
  return <BarList data={data} valueFormatter={(value) => `${value} req/s`} />;
}
