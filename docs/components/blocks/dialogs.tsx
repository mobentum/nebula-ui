'use client';

import {
  Button,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  FieldControl,
  FieldLabel,
  FieldRoot,
  Input,
} from '@nebula/ui';
import { Trash, UserPlus } from '@phosphor-icons/react';

export function ConfirmDialog() {
  return (
    <div className="flex w-full items-center justify-center rounded-lg border border-dashed border-nb-border bg-nb-bg/50 p-10">
      <DialogRoot>
        <DialogTrigger
          render={
            <Button variant="outline">
              <Trash className="-ml-1 mr-1.5 h-4 w-4 text-nb-destructive" aria-hidden />
              Delete project
            </Button>
          }
        />
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Delete project?</DialogTitle>
            <DialogDescription>
              This will permanently delete &quot;api-gateway&quot; and all of its deployments. This
              action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogTrigger render={<Button variant="outline">Cancel</Button>} />
            <Button className="bg-nb-destructive text-nb-destructive-fg hover:bg-nb-destructive/90">
              Delete project
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </div>
  );
}

export function InviteDialog() {
  return (
    <div className="flex w-full items-center justify-center rounded-lg border border-dashed border-nb-border bg-nb-bg/50 p-10">
      <DialogRoot>
        <DialogTrigger
          render={
            <Button>
              <UserPlus className="-ml-1 mr-1.5 h-4 w-4" aria-hidden />
              Invite member
            </Button>
          }
        />
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Invite member</DialogTitle>
            <DialogDescription>
              They&apos;ll receive an email invitation to join the workspace.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <FieldRoot>
              <FieldLabel>Email</FieldLabel>
              <FieldControl type="email" placeholder="new.member@company.com" />
            </FieldRoot>
            <FieldRoot>
              <FieldLabel>Role</FieldLabel>
              <Input placeholder="Member" readOnly />
            </FieldRoot>
          </div>
          <DialogFooter>
            <DialogTrigger render={<Button variant="outline">Cancel</Button>} />
            <Button>Send invite</Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </div>
  );
}
