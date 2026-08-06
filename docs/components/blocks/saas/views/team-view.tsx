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
} from '@mobentum/nebula-ui';
import { team } from '../data';
import { InviteMemberDialog } from '../invite-member-dialog';

export function TeamView() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-nb-fg">Members</h3>
          <p className="text-sm text-nb-muted-fg">Manage roles and access for your workspace.</p>
        </div>
        <InviteMemberDialog />
      </div>
      <CardRoot className="overflow-hidden p-0">
        <TableRoot>
          <TableHeader>
            <TableRow>
              <TableHead>Member</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {team.map((m) => (
              <TableRow key={m.email}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar fallback={m.avatar} className="h-8 w-8 text-xs" />
                    <span className="font-medium text-nb-fg">{m.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-nb-muted-fg">{m.email}</TableCell>
                <TableCell>
                  <Badge variant={m.role === 'Admin' ? 'solid' : 'outline'}>{m.role}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableRoot>
      </CardRoot>
    </div>
  );
}
