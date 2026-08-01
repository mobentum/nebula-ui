import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { usePrevious } from '../../hooks/use-previous';

describe('usePrevious', () => {
  it('returns undefined on the first render', () => {
    const { result } = renderHook(() => usePrevious('a'));
    expect(result.current).toBeUndefined();
  });

  it('returns the previous value after an update', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 'a' },
    });
    rerender({ value: 'b' });
    expect(result.current).toBe('a');
    rerender({ value: 'c' });
    expect(result.current).toBe('b');
  });
});
