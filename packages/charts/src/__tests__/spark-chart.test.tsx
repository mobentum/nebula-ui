import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SparkChart } from '../components/spark-chart';

const data = [
  { month: 'Jan', revenue: 120 },
  { month: 'Feb', revenue: 140 },
  { month: 'Mar', revenue: 130 },
];

describe('SparkChart', () => {
  it('renders an svg chart', () => {
    const { container } = render(
      <SparkChart data={data} index="month" categories={['revenue']} />,
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('exposes an accessible label', () => {
    render(
      <SparkChart
        data={data}
        index="month"
        categories={['revenue']}
        ariaLabel="Revenue trend"
      />,
    );
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Revenue trend');
  });

  it('applies a custom className', () => {
    const { container } = render(
      <SparkChart data={data} index="month" categories={['revenue']} className="h-16" />,
    );
    expect(container.querySelector('.h-16')).toBeInTheDocument();
  });
});
