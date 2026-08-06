'use client';

import {
  Avatar,
  Badge,
  Button,
  CardRoot,
  DividerLine,
  DividerRoot,
  FieldControl,
  FieldLabel,
  FieldRoot,
  SwitchRoot,
  SwitchThumb,
  TabsList,
  TabsPanel,
  TabsRoot,
  TabsTab,
} from '@mobentum/nebula-ui';

export function AccountSettingsTabs() {
  return (
    <div className="w-full">
      <TabsRoot defaultValue="account">
        <TabsList>
          <TabsTab value="account">Account details</TabsTab>
          <TabsTab value="workspaces">Workspaces</TabsTab>
          <TabsTab value="billing">Billing</TabsTab>
        </TabsList>

        <TabsPanel value="account" className="mt-6 max-w-lg space-y-8">
          <div>
            <h4 className="text-sm font-semibold text-nb-fg">Email</h4>
            <p className="mt-1 text-sm text-nb-muted-fg">
              Update the email associated with your workspace.
            </p>
            <FieldRoot className="mt-4">
              <FieldLabel>Update email address</FieldLabel>
              <FieldControl type="email" placeholder="john@company.com" />
            </FieldRoot>
            <Button className="mt-4">Update email</Button>
          </div>

          <DividerRoot>
            <DividerLine />
          </DividerRoot>

          <div>
            <h4 className="text-sm font-semibold text-nb-fg">Password</h4>
            <p className="mt-1 text-sm text-nb-muted-fg">
              Use at least 8 characters with a mix of letters and numbers.
            </p>
            <div className="mt-4 space-y-4">
              <FieldRoot>
                <FieldLabel>Current password</FieldLabel>
                <FieldControl type="password" />
              </FieldRoot>
              <FieldRoot>
                <FieldLabel>New password</FieldLabel>
                <FieldControl type="password" />
              </FieldRoot>
            </div>
            <Button className="mt-4">Update password</Button>
          </div>
        </TabsPanel>

        <TabsPanel value="workspaces" className="mt-6 max-w-lg space-y-4">
          <p className="text-sm text-nb-muted-fg">Workspaces you belong to.</p>
          {[
            { name: 'Acme Inc', role: 'Owner', avatar: 'AC' },
            { name: 'Globex', role: 'Admin', avatar: 'GL' },
            { name: 'Initech', role: 'Member', avatar: 'IN' },
          ].map((workspace) => (
            <CardRoot key={workspace.name} className="flex items-center gap-3 p-4">
              <Avatar fallback={workspace.avatar} className="h-9 w-9 text-xs" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-nb-fg">{workspace.name}</p>
                <p className="text-xs text-nb-muted-fg">Workspace</p>
              </div>
              <Badge variant={workspace.role === 'Owner' ? 'solid' : 'outline'}>
                {workspace.role}
              </Badge>
              <Button size="sm" variant="ghost">
                Manage
              </Button>
            </CardRoot>
          ))}
        </TabsPanel>

        <TabsPanel value="billing" className="mt-6 max-w-lg space-y-4">
          <CardRoot className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm font-medium text-nb-fg">Pro plan</p>
              <p className="text-xs text-nb-muted-fg">$99 / month · renews Aug 1</p>
            </div>
            <Button size="sm" variant="outline">
              Manage
            </Button>
          </CardRoot>
          <div className="rounded-lg border border-nb-border">
            {[
              { id: 'INV-071', date: 'Jul 1, 2026', amount: '$99.00', status: 'Paid' },
              { id: 'INV-070', date: 'Jun 1, 2026', amount: '$99.00', status: 'Paid' },
            ].map((inv) => (
              <div
                key={inv.id}
                className="flex items-center justify-between border-b border-nb-border px-4 py-3 last:border-b-0"
              >
                <div>
                  <p className="text-sm font-medium text-nb-fg">{inv.id}</p>
                  <p className="text-xs text-nb-muted-fg">{inv.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-nb-fg">{inv.amount}</span>
                  <Badge variant="outline" color="success">
                    {inv.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </TabsPanel>
      </TabsRoot>
    </div>
  );
}

export function ProfileSettings() {
  return (
    <CardRoot className="w-full max-w-lg p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-nb-primary/10 text-base font-semibold text-nb-primary">
          AL
        </div>
        <div>
          <p className="text-sm font-medium text-nb-fg">Profile photo</p>
          <p className="text-xs text-nb-muted-fg">PNG or JPG, at least 512px.</p>
          <div className="mt-2 flex gap-2">
            <Button type="button" size="sm" variant="outline">
              Upload
            </Button>
            <Button type="button" size="sm" variant="ghost">
              Remove
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <FieldRoot className="flex-1">
          <FieldLabel>First name</FieldLabel>
          <FieldControl placeholder="Ada" />
        </FieldRoot>
        <FieldRoot className="flex-1">
          <FieldLabel>Last name</FieldLabel>
          <FieldControl placeholder="Lovelace" />
        </FieldRoot>
      </div>
      <FieldRoot className="mt-4">
        <FieldLabel>Email</FieldLabel>
        <FieldControl type="email" placeholder="ada@company.com" />
      </FieldRoot>
      <FieldRoot className="mt-4">
        <FieldLabel>Bio</FieldLabel>
        <FieldControl placeholder="A short bio about yourself" />
      </FieldRoot>
      <div className="mt-6 flex items-center justify-end gap-3 border-t border-nb-border pt-4">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit">Save changes</Button>
      </div>
    </CardRoot>
  );
}

const notifications = [
  { title: 'Product updates', description: 'News about new features and releases.', on: true },
  {
    title: 'Security alerts',
    description: 'Important changes to your account security.',
    on: true,
  },
  {
    title: 'Weekly digest',
    description: 'A summary of workspace activity each Monday.',
    on: false,
  },
  { title: 'Billing notices', description: 'Invoices, receipts, and payment failures.', on: true },
];

export function NotificationSettings() {
  return (
    <CardRoot className="w-full max-w-lg p-6">
      <h3 className="text-base font-semibold text-nb-fg">Email notifications</h3>
      <p className="mt-1 text-sm text-nb-muted-fg">Choose what you receive in your inbox.</p>
      <ul className="mt-4 divide-y divide-nb-border">
        {notifications.map((item) => (
          <li key={item.title} className="flex items-center justify-between gap-4 py-3">
            <div>
              <p className="text-sm font-medium text-nb-fg">{item.title}</p>
              <p className="text-xs text-nb-muted-fg">{item.description}</p>
            </div>
            <SwitchRoot defaultChecked={item.on}>
              <SwitchThumb />
            </SwitchRoot>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-end">
        <Button size="sm">Save preferences</Button>
      </div>
    </CardRoot>
  );
}
