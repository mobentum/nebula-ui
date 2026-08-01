'use client';

import { useState } from 'react';
import { Button, Input, Textarea, Badge, CardRoot, Avatar, TableRoot, TableHeader, TableBody, TableRow, TableHead, TableCell, ProgressRoot, ProgressTrack, ProgressIndicator, ProgressLabel, ProgressValueLabel, DividerRoot, DividerLine, DividerLabel, SelectRoot, SelectTrigger, SelectValue, SelectIcon, SelectPortal, SelectPositioner, SelectPopup, SelectItem, FieldRoot, FieldLabel, FieldControl, FieldDescription, CheckboxRoot, CheckboxIndicator, RadioGroup, RadioIndicator, RadioItem, SwitchRoot, SwitchThumb, DrawerRoot, DrawerTrigger, DrawerContent, DrawerTitle, DrawerDescription, DialogRoot, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogFooter } from '@nebula/ui';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'M3 12h4l3-9 4 18 3-9h4' },
  { id: 'projects', label: 'Projects', icon: 'M4 7h16M4 12h10M4 17h7' },
  { id: 'team', label: 'Team', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' },
  { id: 'billing', label: 'Billing', icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
  { id: 'settings', label: 'Settings', icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z' },
];

const team = [
  { name: 'Alissia Stone', email: 'a.stone@gmail.com', role: 'Admin', avatar: 'AS' },
  { name: 'Emma Bern', email: 'e.bern@gmail.com', role: 'Member', avatar: 'EB' },
  { name: 'Aaron Wave', email: 'a.flow@acme.com', role: 'Member', avatar: 'AW' },
  { name: 'Sarah Johnson', email: 's.johnson@gmail.com', role: 'Admin', avatar: 'SJ' },
];

const kpis = [
  { label: 'Monthly revenue', value: '$24,500', delta: '+12.4%', up: true },
  { label: 'Active users', value: '8,431', delta: '+5.2%', up: true },
  { label: 'API requests', value: '2.1M', delta: '-1.8%', up: false },
  { label: 'Uptime', value: '99.99%', delta: '+0.01%', up: true },
];

const activity = [
  { title: 'New deployment', detail: 'api-gateway deployed to production', time: '2m ago' },
  { title: 'Invoice paid', detail: 'Invoice INV-2026-071 marked paid', time: '1h ago' },
  { title: 'Member invited', detail: 'Emma Bern was invited to the team', time: '3h ago' },
  { title: 'Usage alert', detail: 'API requests exceeded 2M threshold', time: '5h ago' },
];

const invoices = [
  { id: 'INV-2026-071', date: 'Jul 1, 2026', amount: '$99.00', status: 'Paid' },
  { id: 'INV-2026-070', date: 'Jun 1, 2026', amount: '$99.00', status: 'Paid' },
  { id: 'INV-2026-069', date: 'May 1, 2026', amount: '$99.00', status: 'Paid' },
];

function NavIcon({ path }: { path: string }) {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d={path} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NewResourceDrawer() {
  return (
    <DrawerRoot>
      <DrawerTrigger render={<Button size="sm"><svg className="-ml-1 mr-1.5 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>New</Button>} />
      <DrawerContent>
        <DrawerTitle>Create new resource</DrawerTitle>
        <DrawerDescription>
          Set up a new project in your workspace. Most fields are optional.
        </DrawerDescription>

        <div className="mt-6 space-y-5">
          <FieldRoot>
            <FieldLabel>Name</FieldLabel>
            <FieldControl placeholder="e.g. api-gateway" />
            <FieldDescription>A unique name for this resource.</FieldDescription>
          </FieldRoot>

          <FieldRoot>
            <FieldLabel>Type</FieldLabel>
            <SelectRoot defaultValue="app">
              <SelectTrigger>
                <SelectValue />
                <SelectIcon />
              </SelectTrigger>
              <SelectPortal>
                <SelectPositioner>
                  <SelectPopup>
                    <SelectItem value="app">Application</SelectItem>
                    <SelectItem value="service">Service</SelectItem>
                    <SelectItem value="function">Function</SelectItem>
                  </SelectPopup>
                </SelectPositioner>
              </SelectPortal>
            </SelectRoot>
          </FieldRoot>

          <FieldRoot>
            <FieldLabel>Region</FieldLabel>
            <SelectRoot defaultValue="us-east">
              <SelectTrigger>
                <SelectValue />
                <SelectIcon />
              </SelectTrigger>
              <SelectPortal>
                <SelectPositioner>
                  <SelectPopup>
                    <SelectItem value="us-east">US East</SelectItem>
                    <SelectItem value="us-west">US West</SelectItem>
                    <SelectItem value="eu-central">EU Central</SelectItem>
                  </SelectPopup>
                </SelectPositioner>
              </SelectPortal>
            </SelectRoot>
          </FieldRoot>

          <FieldRoot>
            <FieldLabel>Description</FieldLabel>
            <Textarea className="mt-1.5 min-h-24" placeholder="What does this resource do?" />
          </FieldRoot>

          <div>
            <p className="mb-2 text-sm font-medium text-nb-fg">Visibility</p>
            <RadioGroup defaultValue="private">
              <RadioItem value="private">
                <RadioIndicator />
                <span className="text-sm text-nb-fg">Private</span>
              </RadioItem>
              <RadioItem value="team">
                <RadioIndicator />
                <span className="text-sm text-nb-fg">Team</span>
              </RadioItem>
              <RadioItem value="public">
                <RadioIndicator />
                <span className="text-sm text-nb-fg">Public</span>
              </RadioItem>
            </RadioGroup>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-nb-border p-3">
            <div>
              <p className="text-sm font-medium text-nb-fg">Enable monitoring</p>
              <p className="text-xs text-nb-muted-fg">Track metrics and health.</p>
            </div>
            <SwitchRoot defaultChecked>
              <SwitchThumb />
            </SwitchRoot>
          </div>

          <label className="flex cursor-pointer items-center gap-2.5 text-sm text-nb-fg">
            <CheckboxRoot>
              <CheckboxIndicator />
            </CheckboxRoot>
            I agree to the resource terms
          </label>
        </div>

        <DividerRoot className="my-6">
          <DividerLine />
        </DividerRoot>

        <div className="flex items-center justify-end gap-3">
          <DrawerTrigger render={<Button variant="outline">Cancel</Button>} />
          <Button>Create resource</Button>
        </div>
      </DrawerContent>
    </DrawerRoot>
  );
}

function DashboardView() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <CardRoot key={k.label} className="p-5">
            <p className="text-xs font-medium text-nb-muted-fg">{k.label}</p>
            <p className="mt-2 text-2xl font-bold text-nb-fg">{k.value}</p>
            <p className={`mt-1 text-xs font-medium ${k.up ? 'text-emerald-600' : 'text-nb-destructive'}`}>
              {k.delta}
            </p>
          </CardRoot>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <CardRoot className="p-6">
          <h3 className="text-base font-semibold text-nb-fg">Recent activity</h3>
          <div className="mt-4 space-y-1">
            {activity.map((a) => (
              <div key={a.title} className="flex items-start justify-between gap-4 py-2">
                <div>
                  <p className="text-sm font-medium text-nb-fg">{a.title}</p>
                  <p className="text-xs text-nb-muted-fg">{a.detail}</p>
                </div>
                <span className="shrink-0 text-xs text-nb-muted-fg">{a.time}</span>
              </div>
            ))}
          </div>
        </CardRoot>

        <CardRoot className="p-6">
          <h3 className="text-base font-semibold text-nb-fg">Usage</h3>
          <div className="mt-6 space-y-6">
            <ProgressRoot value={72}>
              <ProgressLabel className="mb-1.5 flex justify-between">
                <span className="text-xs text-nb-muted-fg">API requests</span>
                <ProgressValueLabel className="text-xs" />
              </ProgressLabel>
              <ProgressTrack>
                <ProgressIndicator />
              </ProgressTrack>
            </ProgressRoot>
            <ProgressRoot value={45}>
              <ProgressLabel className="mb-1.5 flex justify-between">
                <span className="text-xs text-nb-muted-fg">Storage</span>
                <ProgressValueLabel className="text-xs" />
              </ProgressLabel>
              <ProgressTrack>
                <ProgressIndicator />
              </ProgressTrack>
            </ProgressRoot>
          </div>
        </CardRoot>
      </div>
    </div>
  );
}

function InviteMemberDialog() {
  return (
    <DialogRoot>
      <DialogTrigger render={<Button size="sm"><svg className="-ml-1 mr-1.5 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>Invite member</Button>} />
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

function TeamView() {
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
                  <Button variant="ghost" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableRoot>
      </CardRoot>
    </div>
  );
}

function BillingView() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <CardRoot className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-nb-fg">Pro plan</h3>
            <p className="text-sm text-nb-muted-fg">$99 / month</p>
          </div>
          <Button variant="outline" size="sm">Upgrade</Button>
        </div>
        <DividerRoot className="my-5">
          <DividerLine />
        </DividerRoot>
        <ul className="space-y-2 text-sm text-nb-fg">
          {['Unlimited projects', '100GB storage', 'SSO & SAML', 'Priority support'].map((f) => (
            <li key={f} className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-nb-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
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

const projects = [
  { name: 'API Gateway', status: 'Active', color: 'bg-nb-primary/10 text-nb-primary' },
  { name: 'Web App', status: 'Active', color: 'bg-emerald-500/10 text-emerald-600' },
  { name: 'Mobile API', status: 'Paused', color: 'bg-amber-500/10 text-amber-600' },
  { name: 'Data Pipeline', status: 'Active', color: 'bg-violet-500/10 text-violet-600' },
];

function ProjectsView() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((p) => (
        <CardRoot key={p.name} className="p-5 transition-colors hover:border-nb-primary/50">
          <div className="flex items-center justify-between">
            <div className={`flex h-9 w-9 items-center justify-center rounded-md ${p.color}`}>
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 7h16M4 12h10M4 17h7" strokeLinecap="round" />
              </svg>
            </div>
            <Badge variant={p.status === 'Active' ? 'solid' : 'outline'}>{p.status}</Badge>
          </div>
          <h3 className="mt-4 text-sm font-medium text-nb-fg">{p.name}</h3>
          <p className="mt-1 text-xs text-nb-muted-fg">Updated just now</p>
        </CardRoot>
      ))}
    </div>
  );
}

function SettingsView() {
  return (
    <div className="max-w-lg space-y-8">
      <FieldRoot>
        <FieldLabel>Workspace name</FieldLabel>
        <FieldControl placeholder="acme-corp" />
        <FieldDescription>Contact your admin to change workspace names in production.</FieldDescription>
      </FieldRoot>
      <FieldRoot>
        <FieldLabel>Default region</FieldLabel>
        <SelectRoot defaultValue="us-east">
          <SelectTrigger>
            <SelectValue />
            <SelectIcon />
          </SelectTrigger>
          <SelectPortal>
            <SelectPositioner>
              <SelectPopup>
                <SelectItem value="us-east">US East</SelectItem>
                <SelectItem value="us-west">US West</SelectItem>
                <SelectItem value="eu-central">EU Central</SelectItem>
              </SelectPopup>
            </SelectPositioner>
          </SelectPortal>
        </SelectRoot>
      </FieldRoot>
      <div className="flex items-center justify-end gap-3 border-t border-nb-border pt-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save settings</Button>
      </div>
    </div>
  );
}

export function SaaSTemplate({ fullPage = false }: { fullPage?: boolean }) {
  const [active, setActive] = useState('dashboard');
  return (
    <div className={`flex w-full overflow-hidden bg-nb-bg ${fullPage ? 'min-h-screen flex-1' : 'rounded-lg border border-nb-border'}`}>
      {/* Sidebar */}
      <aside className="hidden w-56 shrink-0 flex-col border-r border-nb-border bg-nb-card md:flex">
        <div className="flex h-14 items-center gap-2 border-b border-nb-border px-4">
          <svg className="h-5 w-5 text-nb-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          </svg>
          <span className="text-sm font-bold text-nb-fg">Acme</span>
        </div>
        <nav className="flex-1 space-y-1 p-3" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              aria-current={active === item.id ? 'page' : undefined}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary ${
                active === item.id
                  ? 'bg-nb-primary/10 font-medium text-nb-primary'
                  : 'text-nb-muted-fg hover:bg-nb-accent hover:text-nb-fg'
              }`}
            >
              <NavIcon path={item.icon} />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="border-t border-nb-border p-4">
          <div className="flex items-center gap-3">
            <Avatar fallback="AL" className="h-8 w-8 text-xs" />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-nb-fg">Alex Lee</p>
              <p className="truncate text-xs text-nb-muted-fg">alex@acme.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile nav */}
        <nav className="flex items-center gap-1 overflow-x-auto border-b border-nb-border bg-nb-card px-2 py-1.5 md:hidden" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              aria-current={active === item.id ? 'page' : undefined}
              className={`flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary ${
                active === item.id
                  ? 'bg-nb-primary/10 text-nb-primary'
                  : 'text-nb-muted-fg hover:bg-nb-accent hover:text-nb-fg'
              }`}
            >
              <NavIcon path={item.icon} />
              {item.label}
            </button>
          ))}
        </nav>
        <header className="flex h-14 items-center justify-between border-b border-nb-border bg-nb-card px-4">
          <div className="md:hidden">
            <span className="text-sm font-bold text-nb-fg">Acme</span>
          </div>
          <div className="hidden w-full max-w-sm md:block">
            <Input placeholder="Search..." aria-label="Search" className="h-9" />
          </div>
          <div className="flex items-center gap-2">
            <NewResourceDrawer />
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-nb-fg capitalize">
                {navItems.find((n) => n.id === active)?.label}
              </h1>
              <p className="text-sm text-nb-muted-fg">
                {active === 'dashboard' && 'An overview of your workspace.'}
                {active === 'projects' && 'All of your resources in one place.'}
                {active === 'team' && 'Manage members and their roles.'}
                {active === 'billing' && 'Manage your plan and invoices.'}
                {active === 'settings' && 'Workspace preferences and governance.'}
              </p>
            </div>
          </div>
          {active === 'dashboard' && <DashboardView />}
          {active === 'team' && <TeamView />}
          {active === 'billing' && <BillingView />}
          {active === 'settings' && <SettingsView />}
          {active === 'projects' && <ProjectsView />}
        </main>
      </div>
    </div>
  );
}
