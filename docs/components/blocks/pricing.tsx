'use client';

import { Badge, Button } from '@mobentum/nebula-ui';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'For personal projects and experiments.',
    features: ['3 projects', '1GB storage', 'Community support'],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$25',
    description: 'For teams building at scale.',
    features: ['Unlimited projects', '100GB storage', 'Priority support', 'Custom domains'],
    cta: 'Start trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations with advanced needs.',
    features: ['SSO & SAML', 'Dedicated support', 'SLA', 'Audit logs'],
    cta: 'Contact sales',
    featured: false,
  },
];

export function PricingSection() {
  return (
    <div className="w-full py-10">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-nb-fg">Simple, transparent pricing</h3>
          <p className="mt-2 text-sm text-nb-muted-fg">
            Start free. Upgrade when you're ready. No hidden fees.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-lg border p-6 ${
                plan.featured
                  ? 'border-nb-primary bg-nb-primary/5 shadow-lg'
                  : 'border-nb-border bg-nb-card'
              }`}
            >
              {plan.featured && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most popular</Badge>
              )}
              <h4 className="text-sm font-medium text-nb-fg">{plan.name}</h4>
              <p className="mt-4 text-3xl font-bold text-nb-fg">{plan.price}</p>
              <p className="mt-1 text-xs text-nb-muted-fg">{plan.description}</p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-nb-fg">
                    {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
                    <svg
                      className="h-4 w-4 shrink-0 text-nb-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant={plan.featured ? 'primary' : 'outline'} className="mt-8 w-full">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const tiers = ['Starter', 'Pro', 'Enterprise'];
const rows = [
  { label: 'Projects', values: ['3', 'Unlimited', 'Unlimited'] },
  { label: 'Storage', values: ['1GB', '100GB', 'Custom'] },
  { label: 'Custom domains', values: ['—', '✓', '✓'] },
  { label: 'SSO / SAML', values: ['—', '—', '✓'] },
  { label: 'Audit logs', values: ['—', '—', '✓'] },
  { label: 'Support', values: ['Community', 'Priority', 'Dedicated'] },
];

export function PricingTable() {
  return (
    <div className="w-full py-10">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-xl border border-nb-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-nb-border bg-nb-muted/50">
                <th className="px-6 py-4 text-left font-medium text-nb-muted-fg">Feature</th>
                {tiers.map((t) => (
                  <th key={t} className="px-6 py-4 text-center font-medium text-nb-fg">
                    {t}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 1 ? 'bg-nb-muted/20' : ''}>
                  <td className="border-t border-nb-border px-6 py-3.5 text-nb-fg">{row.label}</td>
                  {row.values.map((v) => (
                    <td
                      key={String(v)}
                      className="border-t border-nb-border px-6 py-3.5 text-center text-nb-muted-fg"
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="px-6 py-4" />
                {tiers.map((t, j) => (
                  <td key={t} className="px-6 py-4 text-center">
                    <Button size="sm" variant={j === 1 ? 'primary' : 'outline'}>
                      {j === 0 ? 'Start free' : j === 1 ? 'Start trial' : 'Contact sales'}
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function PricingTiers() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-lg border p-6 ${
            plan.featured ? 'border-nb-primary bg-nb-primary/5' : 'border-nb-border bg-nb-card'
          }`}
        >
          {plan.featured && (
            <span className="absolute right-4 top-4">
              <Badge variant="solid">Popular</Badge>
            </span>
          )}
          <h3 className="text-sm font-semibold text-nb-fg">{plan.name}</h3>
          <p className="mt-2 text-2xl font-bold text-nb-fg">{plan.price}</p>
          <p className="mt-1 text-xs text-nb-muted-fg">{plan.description}</p>
          <ul className="mt-4 space-y-2 text-sm text-nb-fg">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-nb-primary" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
          <Button variant={plan.featured ? 'primary' : 'outline'} className="mt-6 w-full">
            {plan.featured ? 'Get started' : plan.cta}
          </Button>
        </div>
      ))}
    </div>
  );
}
