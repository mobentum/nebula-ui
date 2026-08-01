'use client';

import { Badge, Button, Text, useOnClickOutside } from '@nebula/ui';
import { useRef, useState } from 'react';

export function UseOnClickOutsideDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        ref={ref}
        className="flex flex-col items-center gap-2 rounded-lg border border-nb-border bg-nb-muted/40 p-6"
      >
        <Badge variant={open ? 'solid' : 'outline'}>{open ? 'Open' : 'Closed'}</Badge>
        <Text muted size="sm">
          Click inside to open, outside to close
        </Text>
        <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
          Open
        </Button>
      </div>
    </div>
  );
}
