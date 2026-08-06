'use client';

import {
  Badge,
  Button,
  CardRoot,
  DividerLine,
  DividerRoot,
  SelectIcon,
  SelectItem,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@mobentum/nebula-ui';
import { invoices } from '../data';

export function BillingView() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <CardRoot className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-nb-fg">Pro plan</h3>
            <p className="text-sm text-nb-muted-fg">$99 / month</p>
          </div>
          <Button variant="outline" size="sm">
            Upgrade
          </Button>
        </div>
        <DividerRoot className="my-5">
          <DividerLine />
        </DividerRoot>
        <ul className="space-y-2 text-sm text-nb-fg">
          {['Unlimited projects', '100GB storage', 'SSO & SAML', 'Priority support'].map((f) => (
            <li key={f} className="flex items-center gap-2">
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
              <svg
                className="h-4 w-4 shrink-0 text-nb-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </CardRoot>

      <CardRoot className="overflow-hidden p-0">
        <div className="flex items-center justify-between border-b border-nb-border px-6 py-4">
          <h3 className="text-base font-semibold text-nb-fg">Invoices</h3>
          <SelectRoot defaultValue="monthly">
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
        <TableRoot>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="font-medium text-nb-fg">{inv.id}</TableCell>
                <TableCell className="text-nb-muted-fg">{inv.date}</TableCell>
                <TableCell className="text-nb-fg">{inv.amount}</TableCell>
                <TableCell>
                  <Badge variant="outline">{inv.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableRoot>
      </CardRoot>
    </div>
  );
}
