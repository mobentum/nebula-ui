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
  FieldDescription,
  FieldLabel,
  FieldRoot,
  SelectIcon,
  SelectItem,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@nebula/ui';

export function InviteMemberDialog() {
  return (
    <DialogRoot>
      <DialogTrigger
        render={
          <Button size="sm">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
            <svg
              className="-ml-1 mr-1.5 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
            Invite member
          </Button>
        }
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite member</DialogTitle>
          <DialogDescription>
            Add a new team member to your workspace. They'll receive an email invitation.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-5 py-4">
          <FieldRoot>
            <FieldLabel>Email</FieldLabel>
            <FieldControl type="email" placeholder="new.member@company.com" />
            <FieldDescription>We'll send an invite to this address.</FieldDescription>
          </FieldRoot>
          <FieldRoot>
            <FieldLabel>Role</FieldLabel>
            <SelectRoot defaultValue="member">
              <SelectTrigger>
                <SelectValue />
                <SelectIcon />
              </SelectTrigger>
              <SelectPortal>
                <SelectPositioner>
                  <SelectPopup>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="guest">Guest</SelectItem>
                  </SelectPopup>
                </SelectPositioner>
              </SelectPortal>
            </SelectRoot>
          </FieldRoot>
        </div>
        <DialogFooter>
          <DialogTrigger render={<Button variant="outline">Cancel</Button>} />
          <Button>Send invite</Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}
