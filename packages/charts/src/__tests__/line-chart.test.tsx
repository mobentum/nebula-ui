import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LineChart } from '../components/line-chart';

const data = [
  { month: 'Jan', revenue: 120, expenses: 90 },
  { month: 'Feb', revenue: 140, expenses: 100 },
  { month: 'Mar', revenue: 110, expenses: 95 },
];

describe('LineChart', () => {
  it('renders an svg chart', () => {
    const { container } = render(
      <LineChart data={data} index="month" categories={['revenue', 'expenses']} />,
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders series names in the legend', () => {
    render(<LineChart data={data} index="month" categories={['revenue', 'expenses']} />);
    expect(screen.getByText('revenue')).toBeInTheDocument();
    expect(screen.getByText('expenses')).toBeInTheDocument();
  });

  it('renders x-axis categories', () => {
    render(<LineChart data={data} index="month" categories={['revenue']} />);
    expect(screen.getByText('Jan')).toBeInTheDocument();
    expect(screen.getByText('Mar')).toBeInTheDocument();
  });

  it('applies a custom className', () => {
    const { container } = render(
      <LineChart data={data} index="month" categories={['revenue']} className="h-96" />,
    );
    expect(container.querySelector('.h-96')).toBeInTheDocument();
  });

  it('applies an explicit height via inline style', () => {
    const { container } = render(
      <LineChart data={data} index="month" categories={['revenue']} height={320} />,
    );
    expect(container.querySelector('.recharts-wrapper')?.parentElement).toHaveStyle({
      height: '320px',
    });
  });

  it('renders with a fixed y-axis domain', () => {
    const { container } = render(
      <LineChart
        data={data}
        index="month"
        categories={['revenue']}
        minValue={0}
        maxValue={200}
      />,
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders without animation when showAnimation is false', () => {
    const { container } = render(
      <LineChart data={data} index="month" categories={['revenue']} showAnimation={false} />,
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('hides the legend when showLegend is false', () => {
    render(
      <LineChart data={data} index="month" categories={['revenue']} showLegend={false} />,
    );
    expect(screen.queryByText('revenue')).not.toBeInTheDocument();
  });
});
