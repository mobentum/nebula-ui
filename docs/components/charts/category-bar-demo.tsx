'use client';

import { CategoryBar } from '@nebula/charts';

export function CategoryBarDemo() {
  return (
    <div className="w-full max-w-md space-y-4">
      <CategoryBar values={[30, 40, 30]} markerValue={55} showLabels />
    </div>
  );
}
