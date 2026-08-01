import '@testing-library/jest-dom/vitest';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

vi.mock('recharts/es6/component/ResponsiveContainer', async (importOriginal) => {
  const actual =
    await importOriginal<typeof import('recharts/es6/component/ResponsiveContainer')>();
  const SIZE = { width: 600, height: 300 };
  return {
    ...actual,
    useResponsiveContainerContext: () => SIZE,
  };
});

vi.mock('recharts', async (importOriginal) => {
  const actual = await importOriginal<typeof import('recharts')>();
  const React = await import('react');
  return {
    ...actual,
    ResponsiveContainer: ({ children }: { children: React.ReactElement }) =>
      React.cloneElement(children, { width: 600, height: 300 }),
  };
});
