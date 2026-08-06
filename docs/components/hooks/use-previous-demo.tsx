'use client';

import { Button, Text, usePrevious } from '@mobentum/nebula-ui';
import { useState } from 'react';

export function UsePreviousDemo() {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);

  return (
    <div className="flex flex-col items-center gap-3">
      <Button onClick={() => setCount((value) => value + 1)}>Increment</Button>
      <Text muted size="sm">
        Current: <span className="text-nb-fg">{count}</span> · Previous:{' '}
        <span className="text-nb-fg">{previous ?? '—'}</span>
      </Text>
    </div>
  );
}
