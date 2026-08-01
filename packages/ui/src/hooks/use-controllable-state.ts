'use client';

import { useCallback, useRef, useState } from 'react';

interface UseControllableStateOptions<T> {
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
}

type Setter<T> = (next: T | ((prev: T) => T)) => void;

export function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: UseControllableStateOptions<T>): [T | undefined, Setter<T>] {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState<T | undefined>(defaultValue);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const setValue = useCallback<Setter<T>>(
    (next) => {
      if (isControlled) {
        const resolved =
          typeof next === 'function' ? (next as (prev: T) => T)(value as T) : next;
        onChangeRef.current?.(resolved);
        return;
      }

      setInternal((prev) => {
        const resolved = typeof next === 'function' ? (next as (prev: T) => T)(prev as T) : next;
        onChangeRef.current?.(resolved);
        return resolved;
      });
    },
    [isControlled, value],
  );

  return [isControlled ? value : internal, setValue];
}
