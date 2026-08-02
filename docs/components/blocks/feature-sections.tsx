'use client';

const features = [
  {
    title: 'Real-time analytics',
    desc: 'Stream metrics as they happen with sub-second latency.',
    icon: 'M3 17l6-6 4 4 8-8',
  },
  {
    title: 'Global edge network',
    desc: 'Deploy to 30+ regions with automatic failover.',
    icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z',
  },
  {
    title: 'Enterprise security',
    desc: 'SOC 2, SSO, and encryption at rest by default.',
    icon: 'M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7z',
  },
  {
    title: 'Team collaboration',
    desc: 'Shared dashboards, comments, and role-based access.',
    icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  },
  {
    title: 'Unlimited integrations',
    desc: 'Connect 100+ tools with prebuilt connectors.',
    icon: 'M8 12h8M12 8v8M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z',
  },
  {
    title: 'Reliable uptime',
    desc: '99.99% SLA with proactive monitoring.',
    icon: 'M12 6v6l4 2M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z',
  },
];

export function FeatureGrid() {
  return (
    <div className="w-full py-10">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-nb-fg">Everything you need to scale</h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-nb-muted-fg">
            Powerful features designed for teams building production applications.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-nb-border bg-nb-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-nb-primary/10 text-nb-primary">
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d={f.icon} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="mt-4 text-sm font-medium text-nb-fg">{f.title}</h4>
              <p className="mt-1.5 text-sm leading-6 text-nb-muted-fg">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const splitFeatures = [
  {
    eyebrow: 'Analytics',
    title: 'See every metric in real time',
    desc: 'Dashboards update as events stream in. No waiting for batch jobs or manual refreshes.',
    icon: 'M3 17l6-6 4 4 8-8',
  },
  {
    eyebrow: 'Security',
    title: 'Built for compliance from day one',
    desc: 'SOC 2 Type II, GDPR, and encryption at rest. Your data stays yours.',
    icon: 'M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7z',
  },
];

export function FeatureSplit() {
  return (
    <div className="w-full py-10">
      <div className="mx-auto max-w-4xl">
        {splitFeatures.map((f, i) => (
          <div
            key={f.title}
            className={`flex flex-col items-center gap-10 py-10 md:flex-row ${
              i % 2 === 1 ? 'md:flex-row-reverse' : ''
            } ${i > 0 ? 'border-t border-nb-border' : ''}`}
          >
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-nb-primary">
                {f.eyebrow}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-nb-fg">{f.title}</h3>
              <p className="mt-3 text-sm leading-6 text-nb-muted-fg">{f.desc}</p>
            </div>
            <div className="flex h-48 w-full max-w-sm items-center justify-center rounded-xl border border-nb-border bg-nb-muted/40 md:h-40 md:w-1/2">
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
              <svg
                className="h-10 w-10 text-nb-muted-fg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <path d={f.icon} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const alternating = [
  {
    title: 'One-click deploys',
    desc: 'Ship to the edge with a single command and zero-downtime rollouts.',
    icon: 'M12 5v14M5 12h14',
  },
  {
    title: 'Built-in observability',
    desc: 'Traces, logs, and metrics in one place with anomaly alerts.',
    icon: 'M3 12h4l3-9 4 18 3-9h4',
  },
];

export function FeatureAlternating() {
  return (
    <div className="w-full space-y-10">
      {alternating.map((feature, index) => (
        <div
          key={feature.title}
          className={`flex flex-col items-start gap-6 sm:flex-row sm:items-center ${
            index % 2 === 1 ? 'sm:flex-row-reverse' : ''
          }`}
        >
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
          <svg
            className="h-16 w-16 shrink-0 rounded-lg bg-nb-primary/10 p-4 text-nb-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d={feature.icon} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="sm:flex-1">
            <h3 className="text-lg font-semibold text-nb-fg">{feature.title}</h3>
            <p className="mt-1 text-sm text-nb-muted-fg">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
