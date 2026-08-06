'use client';

import {
  Button,
  DividerLine,
  DividerRoot,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldRoot,
  Input,
  RadioCardGroup,
  SelectIcon,
  SelectItem,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@mobentum/nebula-ui';
import { useState } from 'react';

export function FormSingleColumn() {
  return (
    <div className="w-full max-w-md">
      <div className="space-y-6">
        <FieldRoot>
          <FieldLabel>Name</FieldLabel>
          <FieldControl placeholder="Ada Lovelace" />
          <FieldDescription>The name displayed across the workspace.</FieldDescription>
        </FieldRoot>
        <FieldRoot>
          <FieldLabel>Email</FieldLabel>
          <FieldControl type="email" placeholder="ada@company.com" />
        </FieldRoot>
        <FieldRoot invalid>
          <FieldLabel>Username</FieldLabel>
          <FieldControl placeholder="ada" value="ada" />
          <FieldError>This username is already taken.</FieldError>
        </FieldRoot>
        <div className="flex justify-end">
          <Button>Save changes</Button>
        </div>
      </div>
    </div>
  );
}

export function FormFieldGroup() {
  return (
    <div className="w-full max-w-md">
      <div className="space-y-6">
        <div>
          <h4 className="mb-4 text-sm font-semibold text-nb-fg">Account details</h4>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <label htmlFor="ff-first" className="mb-1.5 block text-sm font-medium text-nb-fg">
                First name
              </label>
              <Input id="ff-first" placeholder="Ada" />
            </div>
            <div className="flex-1">
              <label htmlFor="ff-last" className="mb-1.5 block text-sm font-medium text-nb-fg">
                Last name
              </label>
              <Input id="ff-last" placeholder="Lovelace" />
            </div>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-nb-fg">Preferences</h4>
          <div className="space-y-4">
            <div>
              {/* biome-ignore lint/a11y/noLabelWithoutControl: label wraps an accessible custom Select */}
              <label className="mb-1.5 block text-sm font-medium text-nb-fg">Language</label>
              <SelectRoot defaultValue="en">
                <SelectTrigger>
                  <SelectValue />
                  <SelectIcon />
                </SelectTrigger>
                <SelectPortal>
                  <SelectPositioner>
                    <SelectPopup>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectPopup>
                  </SelectPositioner>
                </SelectPortal>
              </SelectRoot>
            </div>
            <div>
              {/* biome-ignore lint/a11y/noLabelWithoutControl: label wraps an accessible custom Select */}
              <label className="mb-1.5 block text-sm font-medium text-nb-fg">Timezone</label>
              <SelectRoot defaultValue="utc">
                <SelectTrigger>
                  <SelectValue />
                  <SelectIcon />
                </SelectTrigger>
                <SelectPortal>
                  <SelectPositioner>
                    <SelectPopup>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="pst">Pacific (PST)</SelectItem>
                      <SelectItem value="est">Eastern (EST)</SelectItem>
                    </SelectPopup>
                  </SelectPositioner>
                </SelectPortal>
              </SelectRoot>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button>Save preferences</Button>
        </div>
      </div>
    </div>
  );
}

function Check({ className }: { className?: string }) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FormRegister() {
  return (
    <div className="w-full max-w-4xl">
      <div className="grid gap-6 md:grid-cols-[1fr_320px]">
        <form
          className="rounded-lg border border-nb-border bg-nb-card p-6"
          onSubmit={(event) => event.preventDefault()}
        >
          <h4 className="text-base font-semibold text-nb-fg">Create your workspace</h4>
          <p className="mt-1 text-sm text-nb-muted-fg">
            Set up a new workspace for your team. You can invite members later.
          </p>
          <div className="mt-6 space-y-4">
            <FieldRoot>
              <FieldLabel>
                Workspace name <span className="text-nb-destructive">*</span>
              </FieldLabel>
              <FieldControl placeholder="acme-inc" autoComplete="organization" />
            </FieldRoot>
            <div className="grid gap-4 sm:grid-cols-2">
              <FieldRoot>
                <FieldLabel>
                  Admin first name <span className="text-nb-destructive">*</span>
                </FieldLabel>
                <FieldControl placeholder="Emma" autoComplete="given-name" />
              </FieldRoot>
              <FieldRoot>
                <FieldLabel>
                  Admin last name <span className="text-nb-destructive">*</span>
                </FieldLabel>
                <FieldControl placeholder="Crown" autoComplete="family-name" />
              </FieldRoot>
            </div>
            <FieldRoot>
              <FieldLabel>
                Admin email <span className="text-nb-destructive">*</span>
              </FieldLabel>
              <FieldControl type="email" placeholder="emma@company.com" autoComplete="email" />
            </FieldRoot>
            <FieldRoot>
              <FieldLabel>Team size</FieldLabel>
              <SelectRoot defaultValue="1-10">
                <SelectTrigger>
                  <SelectValue />
                  <SelectIcon />
                </SelectTrigger>
                <SelectPortal>
                  <SelectPositioner>
                    <SelectPopup>
                      <SelectItem value="1-10">1–10</SelectItem>
                      <SelectItem value="11-50">11–50</SelectItem>
                      <SelectItem value="51-200">51–200</SelectItem>
                      <SelectItem value="200+">200+</SelectItem>
                    </SelectPopup>
                  </SelectPositioner>
                </SelectPortal>
              </SelectRoot>
            </FieldRoot>
            <div className="flex justify-end gap-3 pt-2">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Create workspace</Button>
            </div>
          </div>
        </form>

        <aside className="h-fit rounded-lg border border-nb-border bg-nb-card p-5">
          <h4 className="text-sm font-semibold text-nb-fg">You&apos;ll get</h4>
          <ul className="mt-3 space-y-2 text-sm text-nb-fg">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 shrink-0 text-nb-primary" />
              14-day Pro trial
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 shrink-0 text-nb-primary" />
              Unlimited members
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 shrink-0 text-nb-primary" />
              Priority support
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 shrink-0 text-nb-primary" />
              SOC 2 compliance
            </li>
          </ul>
          <DividerRoot className="my-4">
            <DividerLine />
          </DividerRoot>
          <p className="text-xs text-nb-muted-fg">No credit card required to start.</p>
        </aside>
      </div>
    </div>
  );
}

export function FormSettings() {
  return (
    <div className="w-full max-w-4xl">
      <form className="space-y-10" onSubmit={(event) => event.preventDefault()}>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold text-nb-fg">Profile</h4>
            <p className="mt-1 text-sm text-nb-muted-fg">How teammates see you.</p>
          </div>
          <div className="md:col-span-2">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-nb-primary/10 text-base font-semibold text-nb-primary">
                EC
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
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <FieldRoot>
                <FieldLabel>Display name</FieldLabel>
                <FieldControl placeholder="Emma Crown" />
              </FieldRoot>
              <FieldRoot>
                <FieldLabel>Email</FieldLabel>
                <FieldControl type="email" placeholder="emma@company.com" />
              </FieldRoot>
              <FieldRoot>
                <FieldLabel>Title</FieldLabel>
                <FieldControl placeholder="Engineering Manager" />
              </FieldRoot>
              <FieldRoot>
                <FieldLabel>Time zone</FieldLabel>
                <SelectRoot defaultValue="utc">
                  <SelectTrigger>
                    <SelectValue />
                    <SelectIcon />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectPositioner>
                      <SelectPopup>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="pst">Pacific (PST)</SelectItem>
                        <SelectItem value="est">Eastern (EST)</SelectItem>
                      </SelectPopup>
                    </SelectPositioner>
                  </SelectPortal>
                </SelectRoot>
              </FieldRoot>
            </div>
          </div>
        </div>

        <DividerRoot>
          <DividerLine />
        </DividerRoot>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold text-nb-fg">Workspace defaults</h4>
            <p className="mt-1 text-sm text-nb-muted-fg">Applied to new members.</p>
          </div>
          <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
            <FieldRoot>
              <FieldLabel>Default role</FieldLabel>
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
            <FieldRoot>
              <FieldLabel>Language</FieldLabel>
              <SelectRoot defaultValue="en">
                <SelectTrigger>
                  <SelectValue />
                  <SelectIcon />
                </SelectTrigger>
                <SelectPortal>
                  <SelectPositioner>
                    <SelectPopup>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectPopup>
                  </SelectPositioner>
                </SelectPortal>
              </SelectRoot>
            </FieldRoot>
          </div>
        </div>

        <DividerRoot>
          <DividerLine />
        </DividerRoot>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold text-nb-fg">Danger zone</h4>
            <p className="mt-1 text-sm text-nb-muted-fg">Irreversible workspace actions.</p>
          </div>
          <div className="md:col-span-2 rounded-lg border border-nb-destructive/30 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-nb-fg">Delete workspace</p>
                <p className="text-xs text-nb-muted-fg">
                  Permanently removes all projects, members, and data.
                </p>
              </div>
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="shrink-0 border-nb-destructive/40 text-nb-destructive"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline">
            Discard
          </Button>
          <Button type="submit">Save changes</Button>
        </div>
      </form>
    </div>
  );
}

const planOptions = [
  {
    id: 'starter',
    title: 'Starter',
    monthly: 'Free',
    annual: 'Free',
    description: 'Up to 10,000 requests per day.',
  },
  {
    id: 'premium',
    title: 'Premium',
    monthly: '$900',
    annual: '$720',
    description: '500,000 requests per day',
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    monthly: 'Custom',
    annual: 'Custom',
    description: 'Based on your specific needs',
  },
];

export function FormPackageSelect() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="w-full max-w-3xl">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h4 className="text-base font-semibold text-nb-fg">Choose your plan</h4>
          <p className="mt-1 text-sm text-nb-muted-fg">
            Pick a tier that matches your request volume.
          </p>
        </div>
        <div className="flex items-center rounded-md border border-nb-border bg-nb-card p-1">
          <button
            type="button"
            onClick={() => setAnnual(false)}
            className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
              !annual ? 'bg-nb-primary/10 text-nb-primary' : 'text-nb-muted-fg hover:text-nb-fg'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setAnnual(true)}
            className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
              annual ? 'bg-nb-primary/10 text-nb-primary' : 'text-nb-muted-fg hover:text-nb-fg'
            }`}
          >
            Annual
          </button>
        </div>
      </div>

      <RadioCardGroup.Group defaultValue="premium" className="mt-5 gap-3 sm:grid-cols-3">
        {planOptions.map((plan) => (
          <RadioCardGroup.Item key={plan.id} value={plan.id} className="flex-col items-start">
            <div className="flex w-full items-start justify-between gap-2">
              <RadioCardGroup.Label className="text-sm">{plan.title}</RadioCardGroup.Label>
              <RadioCardGroup.Indicator />
            </div>
            <p className="mt-3 text-lg font-semibold text-nb-fg">
              {annual ? plan.annual : plan.monthly}
              <span className="ml-0.5 text-xs font-normal text-nb-muted-fg">/ month</span>
            </p>
            <RadioCardGroup.Description className="mt-1 text-xs">
              {plan.description}
            </RadioCardGroup.Description>
          </RadioCardGroup.Item>
        ))}
      </RadioCardGroup.Group>

      <p className="mt-4 text-xs text-nb-muted-fg">
        Annual billing saves 20%. No credit card required to start.
      </p>
    </div>
  );
}

const regions = [
  { id: 'us-east', label: 'US East', latency: '12ms' },
  { id: 'us-west', label: 'US West', latency: '28ms' },
  { id: 'eu-central', label: 'EU Central', latency: '45ms' },
];

const plans = [
  {
    id: 'hobby',
    title: 'Hobby',
    price: '$40',
    features: [
      '1,000 requests / day',
      '3 environments',
      'Up to 10 user seats',
      'Community support',
    ],
  },
  {
    id: 'premium',
    title: 'Premium',
    price: '$80',
    features: [
      '100,000 requests / day',
      '10 environments',
      'Up to 50 user seats',
      'Premium Slack support',
    ],
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    price: '$160',
    features: [
      'Unlimited requests / day',
      'Unlimited environments',
      'SAML Single-Sign-On (SSO)',
      '99.99% SLA',
    ],
  },
];

export function FormCreateWorkspace() {
  return (
    <div className="w-full max-w-3xl">
      <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
        <FieldRoot>
          <FieldLabel>Workspace name</FieldLabel>
          <FieldControl placeholder="acme-prod" />
          <FieldDescription>A unique name for your new workspace.</FieldDescription>
        </FieldRoot>

        <div>
          <p className="text-sm font-semibold text-nb-fg">Region</p>
          <RadioCardGroup.Group defaultValue="us-east" className="mt-3 gap-3 sm:grid-cols-3">
            {regions.map((region) => (
              <RadioCardGroup.Item
                key={region.id}
                value={region.id}
                className="items-center justify-between"
              >
                <div>
                  <RadioCardGroup.Label className="text-sm">{region.label}</RadioCardGroup.Label>
                  <RadioCardGroup.Description className="mt-0.5 text-xs">
                    {region.latency}
                  </RadioCardGroup.Description>
                </div>
                <RadioCardGroup.Indicator />
              </RadioCardGroup.Item>
            ))}
          </RadioCardGroup.Group>
        </div>

        <div>
          <p className="text-sm font-semibold text-nb-fg">Plan</p>
          <RadioCardGroup.Group defaultValue="premium" className="mt-3 gap-3">
            {plans.map((plan) => (
              <RadioCardGroup.Item
                key={plan.id}
                value={plan.id}
                className="w-full flex-col items-start"
              >
                <div className="flex w-full items-start justify-between gap-2">
                  <RadioCardGroup.Label className="text-sm">{plan.title}</RadioCardGroup.Label>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-nb-fg">{plan.price}</p>
                    <p className="text-xs text-nb-muted-fg">/ month</p>
                  </div>
                </div>
                <ul className="mt-2 space-y-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-nb-muted-fg">
                      <Check className="h-3.5 w-3.5 shrink-0 text-nb-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </RadioCardGroup.Item>
            ))}
          </RadioCardGroup.Group>
        </div>

        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Create workspace</Button>
        </div>
      </form>
    </div>
  );
}
