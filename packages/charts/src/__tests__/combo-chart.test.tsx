import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComboChart } from '../components/combo-chart';

const data = [
  { month: 'Jan', revenue: 4200, target: 3800 },
  { month: 'Feb', revenue: 5100, target: 4000 },
];

describe('ComboChart', () => {
  it('renders an svg chart', () => {
    const { container } = render(
      <ComboChart
        data={data}
        index="month"
        barSeries={['revenue']}
        lineSeries={['target']}
      />,
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders both series names in the legend', () => {
    render(
      <ComboChart
        data={data}
        index="month"
        barSeries={['revenue']}
        lineSeries={['target']}
      />,
    );
    expect(screen.getByText('revenue')).toBeInTheDocument();
    expect(screen.getByText('target')).toBeInTheDocument();
  });

  it('renders bars and lines', () => {
    const { container } = render(
      <ComboChart
        data={data}
        index="month"
        barSeries={['revenue']}
        lineSeries={['target']}
      />,
    );
    expect(container.querySelectorAll('.recharts-bar-rectangle').length).toBeGreaterThan(0);
    expect(container.querySelectorAll('.recharts-line-curve').length).toBeGreaterThan(0);
  });

  it('applies a custom className', () => {
    const { container } = render(
      <ComboChart
        data={data}
        index="month"
        barSeries={['revenue']}
        lineSeries={['target']}
        className="h-96"
      />,
    );
    expect(container.querySelector('.h-96')).toBeInTheDocument();
  });
});
