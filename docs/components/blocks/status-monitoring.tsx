'use client';

import { Tracker } from '@nebula/charts';
import {
  Badge,
  Button,
  CardRoot,
  SelectIcon,
  SelectItem,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@nebula/ui';

const uptime = Array.from({ length: 90 }, (_, i) => ({
  color:
    i === 31 || i === 62
      ? 'var(--color-nb-destructive)'
      : i % 7 === 0
        ? 'var(--color-nb-warning)'
        : 'var(--color-nb-success)',
  tooltip: i === 31 || i === 62 ? 'Downtime' : 'Operational',
}));

const incidents = [
  {
    title: 'API latency spike',
    detail: 'P95 latency exceeded 1s for 8 minutes',
    time: '2h ago',
    status: 'Resolved',
  },
  {
    title: 'Deployment rollback',
    detail: 'api-gateway v2.14 rolled back',
    time: '1d ago',
    status: 'Resolved',
  },
  {
    title: 'Regional outage',
    detail: 'eu-central reported elevated errors',
    time: '3d ago',
    status: 'Investigating',
  },
];

export function UptimeStatus() {
  return (
    <CardRoot className="w-full max-w-2xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-nb-fg">Uptime</h3>
          <p className="text-sm text-nb-muted-fg">Last 90 days</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="solid" color="success">
            99.99%
          </Badge>
          <SelectRoot defaultValue="90d">
            <SelectTrigger className="h-8 w-28">
              <SelectValue />
              <SelectIcon />
            </SelectTrigger>
            <SelectPortal>
              <SelectPositioner>
                <SelectPopup>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                </SelectPopup>
              </SelectPositioner>
            </SelectPortal>
          </SelectRoot>
        </div>
      </div>
      <Tracker className="mt-5" data={uptime} ariaLabel="Uptime over the last 90 days" />
      <div className="mt-4 flex items-center gap-4 text-xs text-nb-muted-fg">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-nb-success" /> Operational
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-nb-warning" /> Degraded
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-nb-destructive" /> Down
        </span>
      </div>
    </CardRoot>
  );
}

export function IncidentFeed() {
  return (
    <CardRoot className="w-full max-w-2xl p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-nb-fg">Incidents</h3>
        <Button size="sm" variant="outline">
          View status page
        </Button>
      </div>
      <ul className="mt-4 space-y-1">
        {incidents.map((incident) => (
          <li key={incident.title} className="flex items-start justify-between gap-4 py-2.5">
            <div>
              <p className="text-sm font-medium text-nb-fg">{incident.title}</p>
              <p className="text-xs text-nb-muted-fg">{incident.detail}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Badge
                variant="outline"
                color={incident.status === 'Investigating' ? 'warning' : 'success'}
              >
                {incident.status}
              </Badge>
              <span className="text-xs text-nb-muted-fg">{incident.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </CardRoot>
  );
}
