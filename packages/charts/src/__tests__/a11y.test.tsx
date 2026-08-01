import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { configureAxe } from 'jest-axe';
import { AreaChart } from '../components/area-chart';
import { BarChart } from '../components/bar-chart';
import { BarList } from '../components/bar-list';
import { CategoryBar } from '../components/category-bar';
import { ComboChart } from '../components/combo-chart';
import { DonutChart } from '../components/donut-chart';
import { LineChart } from '../components/line-chart';
import { SparkChart } from '../components/spark-chart';
import { Tracker } from '../components/tracker';

const axe = configureAxe({
  rules: {
    'color-contrast': { enabled: false },
    region: { enabled: false },
  },
});

const data = [
  { month: 'Jan', revenue: 120, expenses: 90 },
  { month: 'Feb', revenue: 140, expenses: 100 },
];

describe('a11y: charts', () => {
  it('LineChart has no violations', async () => {
    const { container } = render(
      <LineChart data={data} index="month" categories={['revenue', 'expenses']} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('LineChart exposes an accessible label', () => {
    render(
      <LineChart
        data={data}
        index="month"
        categories={['revenue']}
        ariaLabel="Revenue by month"
      />,
    );
    const chart = screen.getByRole('img');
    expect(chart).toHaveAttribute('aria-label', 'Revenue by month');
  });

  it('AreaChart has no violations', async () => {
    const { container } = render(
      <AreaChart data={data} index="month" categories={['revenue', 'expenses']} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('BarChart has no violations', async () => {
    const { container } = render(
      <BarChart data={data} index="month" categories={['revenue', 'expenses']} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('BarChart stacked has no violations', async () => {
    const { container } = render(
      <BarChart data={data} index="month" categories={['revenue', 'expenses']} stacked />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('ComboChart has no violations', async () => {
    const { container } = render(
      <ComboChart
        data={data}
        index="month"
        barSeries={['revenue']}
        lineSeries={['expenses']}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('DonutChart has no violations', async () => {
    const { container } = render(
      <DonutChart
        data={[
          { name: 'Free', value: 4200 },
          { name: 'Pro', value: 2600 },
        ]}
        index="name"
        category="value"
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('BarList has no violations', async () => {
    const { container } = render(
      <BarList
        data={[
          { name: 'Project A', value: 320 },
          { name: 'Project B', value: 120 },
        ]}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('SparkChart has no violations', async () => {
    const { container } = render(
      <SparkChart data={data} index="month" categories={['revenue']} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('CategoryBar has no violations', async () => {
    const { container } = render(<CategoryBar values={[30, 40, 30]} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Tracker has no violations', async () => {
    const { container } = render(
      <Tracker data={[{ color: 'var(--color-nb-success)' }, { color: 'var(--color-nb-warning)' }]} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
