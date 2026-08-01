import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useToggle } from '../../hooks/use-toggle';

describe('useToggle', () => {
  it('defaults to off', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
  });

  it('accepts an initial value', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current[0]).toBe(true);
  });

  it('toggles the value', () => {
    const { result } = renderHook(() => useToggle());
    act(() => result.current[1]());
    expect(result.current[0]).toBe(true);
    act(() => result.current[1]());
    expect(result.current[0]).toBe(false);
  });

  it('sets an explicit value', () => {
    const { result } = renderHook(() => useToggle());
    act(() => result.current[2](true));
    expect(result.current[0]).toBe(true);
    act(() => result.current[2](false));
    expect(result.current[0]).toBe(false);
  });

  it('turns on', () => {
    const { result } = renderHook(() => useToggle());
    act(() => result.current[3]());
    expect(result.current[0]).toBe(true);
  });

  it('turns off', () => {
    const { result } = renderHook(() => useToggle(true));
    act(() => result.current[4]());
    expect(result.current[0]).toBe(false);
  });
});
