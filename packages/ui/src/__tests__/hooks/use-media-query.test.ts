import { describe, it, expect, vi, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useMediaQuery } from '../../hooks/use-media-query';

type Listener = (event: { matches: boolean }) => void;

function mockMatchMedia(initialMatches: boolean) {
  const listeners = new Set<Listener>();
  const mql = {
    matches: initialMatches,
    addEventListener: vi.fn((_: string, listener: Listener) => {
      listeners.add(listener);
    }),
    removeEventListener: vi.fn((_: string, listener: Listener) => {
      listeners.delete(listener);
    }),
    emit: (matches: boolean) => {
      mql.matches = matches;
      for (const listener of listeners) listener({ matches });
    },
  };
  return mql;
}

describe('useMediaQuery', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns the initial match state', () => {
    const mql = mockMatchMedia(true);
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue(mql));
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    expect(result.current).toBe(true);
  });

  it('updates when the query matches', () => {
    const mql = mockMatchMedia(false);
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue(mql));
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    act(() => mql.emit(true));
    expect(result.current).toBe(true);
  });

  it('does not fail when window.matchMedia is undefined', () => {
    vi.stubGlobal('matchMedia', undefined);
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    expect(result.current).toBe(false);
  });
});
