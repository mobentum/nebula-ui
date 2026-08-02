'use client';

import {
  Avatar,
  Badge,
  Button,
  CardRoot,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from '@nebula/ui';
import { DotsThree } from '@phosphor-icons/react';

const rows = [
  {
    id: 'INV-071',
    name: 'Acme Corp',
    email: 'billing@acme.com',
    amount: '$4,900',
    status: 'Paid',
    avatar: 'AC',
  },
  {
    id: 'INV-070',
    name: 'Globex',
    email: 'finance@globex.io',
    amount: '$2,150',
    status: 'Pending',
    avatar: 'GL',
  },
  {
    id: 'INV-069',
    name: 'Initech',
    email: 'ap@initech.com',
    amount: '$1,320',
    status: 'Paid',
    avatar: 'IN',
  },
  {
    id: 'INV-068',
    name: 'Umbrella',
    email: 'payroll@umbrella.org',
    amount: '$780',
    status: 'Overdue',
    avatar: 'UM',
  },
  {
    id: 'INV-067',
    name: 'Stark Ind.',
    email: 'billing@stark.io',
    amount: '$6,400',
    status: 'Paid',
    avatar: 'ST',
  },
];

const statusVariant = (status: string) =>
  status === 'Paid' ? 'solid' : status === 'Pending' ? 'outline' : 'subtle';
const statusColor = (status: string) =>
  status === 'Paid' ? 'success' : status === 'Pending' ? 'warning' : 'danger';

export function TableStandard() {
  return (
    <CardRoot className="w-full overflow-hidden p-0">
      <TableRoot>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar fallback={row.avatar} className="h-8 w-8 text-xs" />
                  <div>
                    <p className="font-medium text-nb-fg">{row.name}</p>
                    <p className="text-xs text-nb-muted-fg">{row.email}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-medium text-nb-fg">{row.id}</TableCell>
              <TableCell className="text-right text-nb-fg">{row.amount}</TableCell>
              <TableCell>
                <Badge variant={statusVariant(row.status)} color={statusColor(row.status)}>
                  {row.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </CardRoot>
  );
}

export function TableWithActions() {
  return (
    <CardRoot className="w-full overflow-hidden p-0">
      <TableRoot>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar fallback={row.avatar} className="h-8 w-8 text-xs" />
                  <div>
                    <p className="font-medium text-nb-fg">{row.name}</p>
                    <p className="text-xs text-nb-muted-fg">{row.email}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-medium text-nb-fg">{row.id}</TableCell>
              <TableCell className="text-right text-nb-fg">{row.amount}</TableCell>
              <TableCell>
                <Badge variant={statusVariant(row.status)} color={statusColor(row.status)}>
                  {row.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="inline-flex items-center gap-1">
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                  <button
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-md text-nb-muted-fg transition-colors hover:bg-nb-accent hover:text-nb-fg"
                    aria-label={`Actions for ${row.name}`}
                  >
                    <DotsThree className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </CardRoot>
  );
}

export function TablePagination() {
  return (
    <CardRoot className="w-full overflow-hidden p-0">
      <TableRoot>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.slice(0, 4).map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar fallback={row.avatar} className="h-8 w-8 text-xs" />
                  <p className="font-medium text-nb-fg">{row.name}</p>
                </div>
              </TableCell>
              <TableCell className="font-medium text-nb-fg">{row.id}</TableCell>
              <TableCell className="text-right text-nb-fg">{row.amount}</TableCell>
              <TableCell>
                <Badge variant={statusVariant(row.status)} color={statusColor(row.status)}>
                  {row.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
      <div className="flex items-center justify-between border-t border-nb-border px-4 py-3">
        <p className="text-xs text-nb-muted-fg">Showing 1–4 of 48 invoices</p>
        <div className="flex items-center gap-1">
          <Button size="sm" variant="outline" disabled>
            Previous
          </Button>
          {['1', '2', '3'].map((page, i) => (
            <button
              key={page}
              type="button"
              aria-current={i === 0 ? 'page' : undefined}
              className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors ${
                i === 0
                  ? 'bg-nb-primary/10 text-nb-primary'
                  : 'text-nb-muted-fg hover:bg-nb-accent hover:text-nb-fg'
              }`}
            >
              {page}
            </button>
          ))}
          <Button size="sm" variant="outline">
            Next
          </Button>
        </div>
      </div>
    </CardRoot>
  );
}
