import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useLayoutEffect } from 'react';
import { useIsomorphicLayoutEffect } from '../../hooks/use-isomorphic-layout-effect';

describe('useIsomorphicLayoutEffect', () => {
  it('runs the effect in the browser environment (jsdom)', () => {
    const spy = vi.fn();
    renderHook(() => {
      useIsomorphicLayoutEffect(spy);
    });
    expect(spy).toHaveBeenCalledOnce();
  });

  it('is useLayoutEffect when window is defined', () => {
    expect(typeof window).not.toBe('undefined');
    expect(useIsomorphicLayoutEffect).toBe(useLayoutEffect);
  });
});
