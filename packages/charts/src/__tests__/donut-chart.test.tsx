import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DonutChart } from '../components/donut-chart';

const data = [
  { name: 'Free', value: 4200 },
  { name: 'Pro', value: 2600 },
  { name: 'Enterprise', value: 1100 },
];

describe('DonutChart', () => {
  it('renders an svg chart', () => {
    const { container } = render(
      <DonutChart data={data} index="name" category="value" />,
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('exposes an accessible label', () => {
    render(
      <DonutChart
        data={data}
        index="name"
        category="value"
        ariaLabel="Revenue share by plan"
      />,
    );
    const chart = screen.getByRole('img');
    expect(chart).toHaveAttribute('aria-label', 'Revenue share by plan');
  });

  it('applies a custom className', () => {
    const { container } = render(
      <DonutChart data={data} index="name" category="value" className="h-96" />,
    );
    expect(container.querySelector('.h-96')).toBeInTheDocument();
  });
});
