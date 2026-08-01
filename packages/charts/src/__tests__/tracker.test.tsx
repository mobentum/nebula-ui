import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Tracker } from '../components/tracker';

const data = [
  { color: 'var(--color-nb-success)' },
  { color: 'var(--color-nb-success)' },
  { color: 'var(--color-nb-warning)', tooltip: 'Degraded' },
  { color: 'var(--color-nb-destructive)', tooltip: 'Downtime' },
];

describe('Tracker', () => {
  it('renders one cell per datum', () => {
    const { container } = render(<Tracker data={data} />);
    expect(container.querySelectorAll('div.rounded-sm').length).toBe(4);
  });

  it('applies a fallback color to cells without one', () => {
    const { container } = render(
      <Tracker data={[{}, {}]} color="var(--color-nb-primary)" />,
    );
    const cells = container.querySelectorAll('div.rounded-sm');
    expect(cells[0]).toHaveStyle({ backgroundColor: 'var(--color-nb-primary)' });
  });

  it('exposes an accessible label', () => {
    render(<Tracker data={data} ariaLabel="Uptime last 90 days" />);
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Uptime last 90 days');
  });

  it('applies a custom className', () => {
    const { container } = render(<Tracker data={data} className="max-w-lg" />);
    expect(container.querySelector('.max-w-lg')).toBeInTheDocument();
  });
});
