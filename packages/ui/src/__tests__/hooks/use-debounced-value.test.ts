import { describe, it, expect, vi, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDebouncedValue } from '../../hooks/use-debounced-value';

describe('useDebouncedValue', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns the initial value immediately', () => {
    const { result } = renderHook(() => useDebouncedValue('a'));
    expect(result.current).toBe('a');
  });

  it('returns the updated value after the delay', async () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(({ value }) => useDebouncedValue(value), {
      initialProps: { value: 'a' },
    });
    rerender({ value: 'b' });
    expect(result.current).toBe('a');
    await act(async () => {
      await vi.advanceTimersByTimeAsync(300);
    });
    expect(result.current).toBe('b');
  });

  it('resets the timer when the value changes rapidly', async () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(({ value }) => useDebouncedValue(value), {
      initialProps: { value: 'a' },
    });
    rerender({ value: 'b' });
    await act(async () => {
      await vi.advanceTimersByTimeAsync(100);
    });
    rerender({ value: 'c' });
    await act(async () => {
      await vi.advanceTimersByTimeAsync(100);
    });
    expect(result.current).toBe('a');
    await act(async () => {
      await vi.advanceTimersByTimeAsync(200);
    });
    expect(result.current).toBe('c');
  });

  it('honors a custom delay', async () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(({ value }) => useDebouncedValue(value, 100), {
      initialProps: { value: 'a' },
    });
    rerender({ value: 'b' });
    await act(async () => {
      await vi.advanceTimersByTimeAsync(50);
    });
    expect(result.current).toBe('a');
    await act(async () => {
      await vi.advanceTimersByTimeAsync(50);
    });
    expect(result.current).toBe('b');
  });
});
