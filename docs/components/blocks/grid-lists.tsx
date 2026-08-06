'use client';

import { Avatar, Badge } from '@mobentum/nebula-ui';

const items = [
  {
    name: 'API Gateway',
    description: 'Manage API traffic and authentication.',
    icon: 'M12 3l9 5-9 5-9-5 9-5z',
    color: 'text-nb-primary bg-nb-primary/10',
  },
  {
    name: 'Databases',
    description: 'Provision and manage database instances.',
    icon: 'M4 6c0 1.7 3.6 3 8 3s8-1.3 8-3-3.6-3-8-3-8 1.3-8 3z',
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    name: 'Compute',
    description: 'Run and scale virtual machines.',
    icon: 'M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z',
    color: 'text-violet-600 bg-violet-50',
  },
  {
    name: 'Storage',
    description: 'Store and retrieve objects at scale.',
    icon: 'M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7',
    color: 'text-sky-600 bg-sky-50',
  },
  {
    name: 'Networking',
    description: 'Connect and secure your infrastructure.',
    icon: 'M5 12a7 7 0 0 1 14 0M12 5v14M5 12h14',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    name: 'Monitoring',
    description: 'Observe metrics and health across services.',
    icon: 'M3 17l6-6 4 4 8-8',
    color: 'text-rose-600 bg-rose-50',
  },
];

export function GridListCards() {
  return (
    <div className="w-full">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="group rounded-lg border border-nb-border bg-nb-card p-5 transition-colors hover:border-nb-primary/50"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-md ${item.color}`}>
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h4 className="mt-4 text-sm font-medium text-nb-fg">{item.name}</h4>
            <p className="mt-1 text-sm text-nb-muted-fg">{item.description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-nb-primary">
              View service
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
              <svg
                className="h-3 w-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GridListCompact() {
  return (
    <div className="w-full">
      <div className="divide-y divide-nb-border rounded-lg border border-nb-border">
        {items.slice(0, 4).map((item, i) => (
          <div key={item.name} className="flex items-center gap-4 px-4 py-3">
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${item.color}`}
            >
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-nb-fg">{item.name}</p>
              <p className="text-xs text-nb-muted-fg">{item.description}</p>
            </div>
            <Badge variant="outline">{['Active', 'Active', 'Scaling', 'Healthy'][i]}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

const people = [
  { name: 'Alissia Stone', role: 'Admin', avatar: 'AS' },
  { name: 'Emma Bern', role: 'Member', avatar: 'EB' },
  { name: 'Aaron Wave', role: 'Member', avatar: 'AW' },
  { name: 'Sarah Johnson', role: 'Admin', avatar: 'SJ' },
];

export function GridListAvatars() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      {people.map((person) => (
        <div
          key={person.name}
          className="flex items-center gap-3 rounded-lg border border-nb-border bg-nb-card p-4"
        >
          <Avatar fallback={person.avatar} className="h-10 w-10 text-xs" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-nb-fg">{person.name}</p>
            <p className="text-xs text-nb-muted-fg">{person.role}</p>
          </div>
          <Badge variant={person.role === 'Admin' ? 'solid' : 'outline'}>{person.role}</Badge>
        </div>
      ))}
    </div>
  );
}
