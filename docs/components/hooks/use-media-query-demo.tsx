'use client';

import { Text, useMediaQuery } from '@mobentum/nebula-ui';

export function UseMediaQueryDemo() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <div className="flex flex-col items-center gap-3">
      <Text size="sm">
        Query: <span className="font-mono text-nb-fg">(min-width: 768px)</span>
      </Text>
      <Text muted size="sm">
        Matches: <span className="text-nb-fg">{isDesktop ? 'true' : 'false'}</span>
      </Text>
    </div>
  );
}
