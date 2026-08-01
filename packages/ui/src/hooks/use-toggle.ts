'use client';

import { useCallback, useState } from 'react';

export function useToggle(initial = false) {
  const [on, setOn] = useState(initial);

  const setToggle = useCallback((value: boolean) => setOn(value), []);
  const toggle = useCallback(() => setOn((prev) => !prev), []);
  const setOnValue = useCallback(() => setOn(true), []);
  const setOffValue = useCallback(() => setOn(false), []);

  return [on, toggle, setToggle, setOnValue, setOffValue] as const;
}
