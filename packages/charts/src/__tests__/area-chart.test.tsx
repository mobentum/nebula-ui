import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AreaChart } from '../components/area-chart';

const data = [
  { month: 'Jan', revenue: 120 },
  { month: 'Feb', revenue: 140 },
];

describe('AreaChart', () => {
  it('renders an svg chart', () => {
    const { container } = render(
      <AreaChart data={data} index="month" categories={['revenue']} />,
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders series names in the legend', () => {
    render(<AreaChart data={data} index="month" categories={['revenue']} />);
    expect(screen.getByText('revenue')).toBeInTheDocument();
  });

  it('renders gradient fills per category', () => {
    const { container } = render(
      <AreaChart data={data} index="month" categories={['revenue', 'expenses']} />,
    );
    expect(container.querySelectorAll('linearGradient').length).toBe(2);
  });

  it('applies a custom className', () => {
    const { container } = render(
      <AreaChart data={data} index="month" categories={['revenue']} className="h-96" />,
    );
    expect(container.querySelector('.h-96')).toBeInTheDocument();
  });
});
