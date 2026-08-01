import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useControllableState } from '../../hooks/use-controllable-state';

describe('useControllableState', () => {
  it('returns the default value when uncontrolled', () => {
    const { result } = renderHook(() => useControllableState({ defaultValue: 'a' }));
    expect(result.current[0]).toBe('a');
  });

  it('updates the internal value when uncontrolled', () => {
    const { result } = renderHook(() => useControllableState({ defaultValue: 'a' }));
    act(() => result.current[1]('b'));
    expect(result.current[0]).toBe('b');
  });

  it('supports functional updates', () => {
    const { result } = renderHook(() => useControllableState({ defaultValue: 1 }));
    act(() => result.current[1]((prev) => (prev ?? 0) + 1));
    expect(result.current[0]).toBe(2);
  });

  it('returns the controlled value without internal updates', () => {
    const { result } = renderHook(() => useControllableState({ value: 'x' }));
    act(() => result.current[1]('y'));
    expect(result.current[0]).toBe('x');
  });

  it('calls onChange when controlled', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() =>
      useControllableState({ value: 'x', onChange }),
    );
    act(() => result.current[1]('y'));
    expect(onChange).toHaveBeenCalledWith('y');
  });

  it('calls onChange when uncontrolled', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() =>
      useControllableState({ defaultValue: 'a', onChange }),
    );
    act(() => result.current[1]('b'));
    expect(onChange).toHaveBeenCalledWith('b');
  });

  it('calls onChange with the resolved value for functional updates', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() =>
      useControllableState({ defaultValue: 1, onChange }),
    );
    act(() => result.current[1]((prev) => (prev ?? 0) + 1));
    expect(onChange).toHaveBeenCalledWith(2);
  });
});
