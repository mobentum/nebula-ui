'use client';

import { Button, Text, useToggle } from '@nebula/ui';

export function UseToggleDemo() {
  const [on, toggle] = useToggle(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <Button variant={on ? 'primary' : 'outline'} onClick={() => toggle()}>
        {on ? 'Turn off' : 'Turn on'}
      </Button>
      <Text muted size="sm">
        State: {on ? 'on' : 'off'}
      </Text>
    </div>
  );
}
