'use client';

import { Avatar, Badge, Button, CardRoot } from '@mobentum/nebula-ui';
import { CheckCircle, Rocket, Sparkle } from '@phosphor-icons/react';

const steps = [
  { id: 1, title: 'Create workspace', description: 'Name your workspace and region.', done: true },
  { id: 2, title: 'Invite teammates', description: 'Send invites to your team.', done: true },
  { id: 3, title: 'Connect a channel', description: 'Link your first messaging app.', done: false },
  { id: 4, title: 'Deploy an agent', description: 'Ship a working assistant.', done: false },
];

export function OnboardingSteps() {
  return (
    <div className="w-full max-w-md">
      <CardRoot className="p-6">
        <div className="flex items-center gap-2">
          <Rocket className="h-5 w-5 text-nb-primary" aria-hidden />
          <h3 className="text-base font-semibold text-nb-fg">Finish setting up</h3>
          <Badge variant="subtle" color="primary" className="ml-auto">
            2 of 4
          </Badge>
        </div>
        <p className="mt-1 text-sm text-nb-muted-fg">
          Complete these steps to launch your workspace.
        </p>
        <ol className="mt-5 space-y-1">
          {steps.map((step) => (
            <li
              key={step.id}
              className={`flex items-start gap-3 rounded-md px-2 py-2 ${
                !step.done ? 'opacity-100' : ''
              }`}
            >
              <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                  step.done
                    ? 'bg-nb-success text-nb-success-fg'
                    : 'border border-nb-border text-nb-muted-fg'
                }`}
              >
                {step.done ? <CheckCircle className="h-4 w-4" aria-hidden /> : step.id}
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className={`text-sm font-medium ${step.done ? 'text-nb-muted-fg' : 'text-nb-fg'}`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-nb-muted-fg">{step.description}</p>
              </div>
              {!step.done && step.id === 3 && (
                <Button size="sm" className="shrink-0">
                  Continue
                </Button>
              )}
            </li>
          ))}
        </ol>
      </CardRoot>
    </div>
  );
}

const feed = [
  { name: 'Emma Bern', action: 'deployed', target: 'api-gateway', time: '2m ago', avatar: 'EB' },
  {
    name: 'Aaron Wave',
    action: 'invited',
    target: 'Priya to the team',
    time: '1h ago',
    avatar: 'AW',
  },
  {
    name: 'Alissia Stone',
    action: 'paid invoice',
    target: 'INV-2026-071',
    time: '3h ago',
    avatar: 'AS',
  },
  {
    name: 'Support Bot',
    action: 'resolved',
    target: 'incident #4821',
    time: '5h ago',
    avatar: 'SB',
  },
];

export function ActivityFeed() {
  return (
    <div className="w-full max-w-md">
      <CardRoot className="p-6">
        <div className="flex items-center gap-2">
          <Sparkle className="h-5 w-5 text-nb-primary" aria-hidden />
          <h3 className="text-base font-semibold text-nb-fg">Workspace activity</h3>
        </div>
        <ul className="mt-4 space-y-1">
          {feed.map((item) => (
            <li key={item.time} className="flex items-start gap-3 rounded-md px-2 py-2.5">
              <Avatar fallback={item.avatar} className="h-8 w-8 text-xs" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-nb-fg">
                  <span className="font-medium">{item.name}</span>{' '}
                  <span className="text-nb-muted-fg">{item.action}</span>{' '}
                  <span className="font-medium">{item.target}</span>
                </p>
              </div>
              <span className="shrink-0 text-xs text-nb-muted-fg">{item.time}</span>
            </li>
          ))}
        </ul>
      </CardRoot>
    </div>
  );
}

export function WelcomeBanner() {
  return (
    <div className="w-full max-w-2xl">
      <CardRoot className="flex flex-col items-start gap-4 border-nb-primary/20 bg-nb-primary/5 p-6 sm:flex-row sm:items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-nb-primary/10 text-nb-primary">
          <Rocket className="h-6 w-6" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-nb-fg">Welcome to Acme</h3>
          <p className="mt-1 text-sm text-nb-muted-fg">
            Connect your first channel and deploy an agent to get started.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button size="sm" variant="outline">
            Dismiss
          </Button>
          <Button size="sm">Get started</Button>
        </div>
      </CardRoot>
    </div>
  );
}
