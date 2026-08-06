'use client';

import { Badge, CardRoot } from '@mobentum/nebula-ui';
import { projects } from '../data';

export function ProjectsView() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((p) => (
        <CardRoot key={p.name} className="p-5 transition-colors hover:border-nb-primary/50">
          <div className="flex items-center justify-between">
            <div className={`flex h-9 w-9 items-center justify-center rounded-md ${p.color}`}>
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
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
