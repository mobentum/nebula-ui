import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BarList } from '../components/bar-list';

const data = [
  { name: 'Project A', value: 320 },
  { name: 'Project B', value: 120 },
];

describe('BarList', () => {
  it('renders item names and values', () => {
    render(<BarList data={data} />);
    expect(screen.getByText('Project A')).toBeInTheDocument();
    expect(screen.getByText('Project B')).toBeInTheDocument();
    expect(screen.getByText('320')).toBeInTheDocument();
    expect(screen.getByText('120')).toBeInTheDocument();
  });

  it('scales bar widths relative to the max value', () => {
    const { container } = render(<BarList data={data} />);
    const bars = container.querySelectorAll('div.rounded-full.bg-nb-muted > div');
    expect(bars.length).toBe(2);
    expect(bars[0]).toHaveStyle({ width: '100%' });
    expect(bars[1]).toHaveStyle({ width: '37.5%' });
  });

  it('applies a custom value formatter', () => {
    render(
      <BarList
        data={data}
        valueFormatter={(value) => `$${value.toLocaleString()}`}
      />,
    );
    expect(screen.getByText('$320')).toBeInTheDocument();
  });

  it('applies a custom className', () => {
    const { container } = render(<BarList data={data} className="max-w-md" />);
    expect(container.querySelector('.max-w-md')).toBeInTheDocument();
  });
});
