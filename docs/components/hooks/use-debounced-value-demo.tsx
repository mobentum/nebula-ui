'use client';

import { Input, Text, useDebouncedValue } from '@nebula/ui';
import { useState } from 'react';

export function UseDebouncedValueDemo() {
  const [value, setValue] = useState('');
  const debounced = useDebouncedValue(value, 300);

  return (
    <div className="flex flex-col gap-3">
      <Input
        placeholder="Type to search..."
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <div className="flex flex-col gap-1 text-sm">
        <Text muted size="sm">
          Immediate: <span className="text-nb-fg">{value || '—'}</span>
        </Text>
        <Text muted size="sm">
          Debounced (300ms): <span className="text-nb-fg">{debounced || '—'}</span>
        </Text>
      </div>
    </div>
  );
}
