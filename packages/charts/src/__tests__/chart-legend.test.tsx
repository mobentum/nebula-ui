import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ChartLegend } from '../internals/chart-legend';

describe('ChartLegend', () => {
  it('returns null when there are no entries', () => {
    const { container } = render(<ChartLegend payload={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders entry names', () => {
    render(
      <ChartLegend
        payload={[
          { value: 'revenue', color: 'var(--color-nb-primary)' },
          { value: 'expenses', color: 'var(--color-nb-success)' },
        ]}
      />,
    );
    expect(screen.getByText('revenue')).toBeInTheDocument();
    expect(screen.getByText('expenses')).toBeInTheDocument();
  });
});
