'use client';

import { Button, Text, useControllableState } from '@nebula/ui';

export function UseControllableStateDemo() {
  const [value, setValue] = useControllableState({ defaultValue: 'A' });

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        {['A', 'B', 'C'].map((option) => (
          <Button
            key={option}
            size="sm"
            variant={value === option ? 'primary' : 'outline'}
            onClick={() => setValue(option)}
          >
            {option}
          </Button>
        ))}
      </div>
      <Text muted size="sm">
        Selected: {value}
      </Text>
    </div>
  );
}
