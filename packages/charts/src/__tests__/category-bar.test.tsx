import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CategoryBar } from '../components/category-bar';

describe('CategoryBar', () => {
  it('renders one segment per value', () => {
    const { container } = render(<CategoryBar values={[30, 40, 30]} />);
    expect(container.querySelectorAll('div.rounded-full.bg-nb-muted > div').length).toBe(3);
  });

  it('scales segment widths to the total', () => {
    const { container } = render(<CategoryBar values={[25, 75]} />);
    const segments = container.querySelectorAll('div.rounded-full.bg-nb-muted > div');
    expect(segments[0]).toHaveStyle({ width: '25%' });
    expect(segments[1]).toHaveStyle({ width: '75%' });
  });

  it('renders a marker at the given value', () => {
    const { container } = render(<CategoryBar values={[50, 50]} markerValue={60} />);
    const marker = container.querySelector('div.absolute');
    expect(marker).toHaveStyle({ left: '60%' });
  });

  it('shows percentage labels when showLabels is true', () => {
    render(<CategoryBar values={[50, 50]} showLabels />);
    expect(screen.getAllByText('50%')).toHaveLength(2);
  });

  it('exposes an accessible label', () => {
    render(<CategoryBar values={[30, 40, 30]} ariaLabel="Usage by plan" />);
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Usage by plan');
  });

  it('applies a custom className', () => {
    const { container } = render(<CategoryBar values={[50, 50]} className="max-w-md" />);
    expect(container.querySelector('.max-w-md')).toBeInTheDocument();
  });
});
