'use client';

import { useState } from 'react';
import { Button, CardRoot, Progress, ProgressRoot, ProgressTrack, ProgressIndicator, ProgressLabel, ProgressValueLabel, SelectRoot, SelectTrigger, SelectValue, SelectIcon, SelectPortal, SelectPositioner, SelectPopup, SelectItem } from '@nebula/ui';

const plans = [
  { name: 'Free', price: '$0', usage: 45, limit: 100, color: 'bg-nb-primary' },
  { name: 'Pro', price: '$25', usage: 72, limit: 500, color: 'bg-nb-primary' },
];

export function UsageCard() {
  const plan = plans[1];
  return (
    <div className="w-full">
      <CardRoot className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-nb-fg">{plan.name} plan</h3>
            <p className="text-sm text-nb-muted-fg">{plan.price} / month</p>
          </div>
          <Button variant="outline" size="sm">Upgrade</Button>
        </div>
        <div className="mt-6">
          <ProgressRoot value={(plan.usage / plan.limit) * 100}>
            <ProgressLabel className="mb-1.5 flex justify-between">
              <span>API requests</span>
              <ProgressValueLabel />
            </ProgressLabel>
            <ProgressTrack>
              <ProgressIndicator className={plan.color} />
            </ProgressTrack>
          </ProgressRoot>
        </div>
      </CardRoot>
    </div>
  );
}

export function BillingTable() {
  const [period, setPeriod] = useState('monthly');
  const invoices = [
    { id: 'INV-2026-071', date: 'Jul 1, 2026', amount: '$25.00', status: 'Paid' },
    { id: 'INV-2026-070', date: 'Jun 1, 2026', amount: '$25.00', status: 'Paid' },
    { id: 'INV-2026-069', date: 'May 1, 2026', amount: '$25.00', status: 'Paid' },
  ];
  return (
    <div className="w-full">
      <CardRoot className="p-0">
        <div className="flex items-center justify-between border-b border-nb-border px-6 py-4">
          <h3 className="text-base font-semibold text-nb-fg">Invoices</h3>
          <SelectRoot value={period} onValueChange={(value) => setPeriod(value ?? '')}>
            <SelectTrigger className="h-8 w-32">
              <SelectValue />
              <SelectIcon />
            </SelectTrigger>
            <SelectPortal>
              <SelectPositioner>
                <SelectPopup>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectPopup>
              </SelectPositioner>
            </SelectPortal>
          </SelectRoot>
        </div>
        <div className="divide-y divide-nb-border">
          {invoices.map((inv) => (
            <div key={inv.id} className="flex items-center justify-between px-6 py-3.5">
              <div>
                <p className="text-sm font-medium text-nb-fg">{inv.id}</p>
                <p className="text-xs text-nb-muted-fg">{inv.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-nb-fg">{inv.amount}</span>
                <span className="rounded-full bg-nb-primary/10 px-2 py-0.5 text-xs font-medium text-nb-primary">
                  {inv.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardRoot>
    </div>
  );
}
