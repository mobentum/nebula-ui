'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

const PREVIEW_LOADING_MS = 300;

interface PreviewProps {
  children: ReactNode;
  label?: string;
  resettable?: boolean;
}

export function Preview({ children, label = 'Preview', resettable = true }: PreviewProps) {
  const [key, setKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), PREVIEW_LOADING_MS);
    return () => window.clearTimeout(timer);
  }, [key]);

  return (
    <div className="not-prose my-6 overflow-hidden rounded-lg border border-nb-border">
      <div className="flex items-center justify-between border-b border-nb-border bg-nb-muted/50 px-4 py-2">
        <span className="text-xs font-medium text-nb-muted-fg">{label}</span>
        {resettable && (
          <button
            type="button"
            onClick={() => { setKey((k) => k + 1); setIsLoading(true); }}
            className="rounded-sm px-2 py-1 text-xs text-nb-muted-fg transition-colors hover:bg-nb-muted hover:text-nb-fg"
          >
            Reset
          </button>
        )}
      </div>
      <div className="flex min-h-[100px] w-full items-center justify-center bg-nb-bg p-6" key={key} style={{ contain: 'content' }}>
        {isLoading ? (
          <div className="flex min-h-[100px] w-full flex-col gap-3 rounded-md border border-dashed border-nb-muted-foreground/20 bg-nb-muted/20 p-4">
            <div className="h-4 w-full max-w-[240px] animate-pulse rounded bg-nb-muted" />
            <div className="h-4 w-full max-w-[180px] animate-pulse rounded bg-nb-muted" />
            <div className="h-4 w-full max-w-[120px] animate-pulse rounded bg-nb-muted" />
          </div>
        ) : (
          <div className="w-full">{children}</div>
        )}
      </div>
    </div>
  );
}
