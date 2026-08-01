import { describe, it, expect } from 'vitest';
import { Resizable } from '../components/resizable';

describe('Resizable', () => {
  it('has displayNames', () => {
    expect(Resizable.Group.displayName).toBe('Resizable.Group');
    expect(Resizable.Panel.displayName).toBe('Resizable.Panel');
    expect(Resizable.Handle.displayName).toBe('Resizable.Handle');
  });
});
