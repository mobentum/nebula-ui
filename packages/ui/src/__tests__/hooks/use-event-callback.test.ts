import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useEventCallback } from '../../hooks/use-event-callback';

describe('useEventCallback', () => {
  it('calls the current callback', () => {
    const fn = vi.fn(() => 'result');
    const { result } = renderHook(() => useEventCallback(fn));
    expect(result.current()).toBe('result');
    expect(fn).toHaveBeenCalled();
  });

  it('forwards arguments', () => {
    const fn = vi.fn((a: number, b: number) => a + b);
    const { result } = renderHook(() => useEventCallback(fn));
    expect(result.current(2, 3)).toBe(5);
  });

  it('returns a stable reference', () => {
    const { result, rerender } = renderHook(() => useEventCallback(() => 'x'));
    const first = result.current;
    rerender();
    expect(result.current).toBe(first);
  });

  it('always calls the latest callback', () => {
    const first = vi.fn(() => 'first');
    const second = vi.fn(() => 'second');
    const { result, rerender } = renderHook(({ fn }) => useEventCallback(fn), {
      initialProps: { fn: first },
    });
    rerender({ fn: second });
    expect(result.current()).toBe('second');
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });
});
