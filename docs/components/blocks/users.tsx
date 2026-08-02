'use client';

import { Avatar, Badge, Button, CardRoot, Input } from '@nebula/ui';
import { MagnifyingGlass } from '@phosphor-icons/react';

const members = [
  { name: 'Alissia Stone', email: 'a.stone@gmail.com', role: 'Admin', avatar: 'AS' },
  { name: 'Emma Bern', email: 'e.bern@gmail.com', role: 'Member', avatar: 'EB' },
  { name: 'Aaron Wave', email: 'a.flow@acme.com', role: 'Member', avatar: 'AW' },
  { name: 'Sarah Johnson', email: 's.johnson@gmail.com', role: 'Admin', avatar: 'SJ' },
];

export function UserList() {
  return (
    <div className="w-full max-w-xl space-y-4">
      <div className="relative">
        <MagnifyingGlass
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-nb-muted-fg"
          aria-hidden
        />
        <Input aria-label="Search members" placeholder="Search members…" className="pl-9" />
      </div>
      <CardRoot className="overflow-hidden p-0">
        <ul className="divide-y divide-nb-border">
          {members.map((member) => (
            <li key={member.email} className="flex items-center gap-3 px-4 py-3">
              <Avatar fallback={member.avatar} className="h-9 w-9 text-xs" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-nb-fg">{member.name}</p>
                <p className="truncate text-xs text-nb-muted-fg">{member.email}</p>
              </div>
              <Badge variant={member.role === 'Admin' ? 'solid' : 'outline'}>{member.role}</Badge>
              <Button size="sm" variant="ghost">
                Edit
              </Button>
            </li>
          ))}
        </ul>
      </CardRoot>
    </div>
  );
}

const avatars = ['AS', 'EB', 'AW', 'SJ', 'MK'];

export function UserAvatarGroup() {
  return (
    <div className="w-full max-w-md">
      <CardRoot className="flex items-center gap-4 p-5">
        <div className="flex -space-x-2">
          {avatars.map((fallback) => (
            <Avatar
              key={fallback}
              fallback={fallback}
              className="h-9 w-9 border-2 border-nb-card text-xs ring-nb-card"
            />
          ))}
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-nb-card bg-nb-muted text-xs font-medium text-nb-muted-fg">
            +12
          </span>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-nb-fg">5 of 25 seats used</p>
          <p className="text-xs text-nb-muted-fg">Your workspace has 12 pending invites.</p>
        </div>
      </CardRoot>
    </div>
  );
}

export function UserCards() {
  return (
    <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <CardRoot key={member.email} className="flex flex-col items-center p-5 text-center">
          <Avatar fallback={member.avatar} className="h-12 w-12 text-sm" />
          <p className="mt-3 text-sm font-medium text-nb-fg">{member.name}</p>
          <p className="mt-0.5 truncate text-xs text-nb-muted-fg">{member.email}</p>
          <Badge variant={member.role === 'Admin' ? 'solid' : 'outline'} className="mt-3">
            {member.role}
          </Badge>
        </CardRoot>
      ))}
    </div>
  );
}
