import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BarChart } from '../components/bar-chart';

const data = [
  { month: 'Jan', revenue: 120, expenses: 90 },
  { month: 'Feb', revenue: 140, expenses: 100 },
];

describe('BarChart', () => {
  it('renders an svg chart', () => {
    const { container } = render(
      <BarChart data={data} index="month" categories={['revenue', 'expenses']} />,
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders series names in the legend', () => {
    render(<BarChart data={data} index="month" categories={['revenue', 'expenses']} />);
    expect(screen.getByText('revenue')).toBeInTheDocument();
    expect(screen.getByText('expenses')).toBeInTheDocument();
  });

  it('renders stacked bars when stacked is true', () => {
    const { container } = render(
      <BarChart data={data} index="month" categories={['revenue', 'expenses']} stacked />,
    );
    const bars = container.querySelectorAll('.recharts-bar-rectangle');
    expect(bars.length).toBeGreaterThan(0);
  });

  it('applies a custom className', () => {
    const { container } = render(
      <BarChart data={data} index="month" categories={['revenue']} className="h-96" />,
    );
    expect(container.querySelector('.h-96')).toBeInTheDocument();
  });
});
