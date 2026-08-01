import '@testing-library/jest-dom/vitest';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

vi.mock('@xyflow/react', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@xyflow/react')>();
  const React = await import('react');
  return {
    ...actual,
    Handle: ({
      type,
      'aria-label': ariaLabel,
      position,
      ...props
    }: Record<string, unknown> & { type?: string; 'aria-label'?: string }) => {
      void position;
      return React.createElement('div', {
        'data-handle-type': type,
        'aria-label': ariaLabel,
        ...props,
      });
    },
  };
});
