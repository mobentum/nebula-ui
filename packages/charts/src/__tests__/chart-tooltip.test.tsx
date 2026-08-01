import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ChartTooltip } from '../internals/chart-tooltip';

describe('ChartTooltip', () => {
  it('returns null when inactive', () => {
    const { container } = render(
      <ChartTooltip payload={[{ name: 'revenue', value: 120, color: 'red' }]} />,
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders the label and formatted values', () => {
    render(
      <ChartTooltip
        active
        label="Jan"
        payload={[
          { name: 'revenue', value: 1200, color: 'var(--color-nb-primary)' },
          { name: 'expenses', value: 900, color: 'var(--color-nb-success)' },
        ]}
        valueFormatter={(value) => `$${value}`}
      />,
    );
    expect(screen.getByText('Jan')).toBeInTheDocument();
    expect(screen.getByText('revenue')).toBeInTheDocument();
    expect(screen.getByText('$1200')).toBeInTheDocument();
    expect(screen.getByText('$900')).toBeInTheDocument();
  });
});
