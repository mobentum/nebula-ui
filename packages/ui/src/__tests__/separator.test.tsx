import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Separator } from '../components/layout';

describe('Separator', () => {
  it('renders as a div', () => {
    render(<Separator data-testid="s" />);
    expect(screen.getByTestId('s').tagName).toBe('DIV');
  });

  it('renders horizontal by default', () => {
    render(<Separator data-testid="s" />);
    const el = screen.getByTestId('s');
    expect(el).toHaveClass('h-px', 'w-full');
  });

  it('renders vertical orientation', () => {
    render(<Separator data-testid="s" orientation="vertical" />);
    const el = screen.getByTestId('s');
    expect(el).toHaveClass('h-full', 'w-px');
  });

  it('sets decorative role by default', () => {
    render(<Separator data-testid="s" />);
    expect(screen.getByTestId('s')).toHaveAttribute('role', 'none');
  });

  it('sets separator role when not decorative', () => {
    render(<Separator data-testid="s" decorative={false} />);
    const el = screen.getByTestId('s');
    expect(el).toHaveAttribute('role', 'separator');
    expect(el).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('sets data-orientation attribute', () => {
    render(<Separator data-testid="s" orientation="vertical" />);
    expect(screen.getByTestId('s')).toHaveAttribute('data-orientation', 'vertical');
  });

  it('combines custom className', () => {
    render(<Separator data-testid="s" className="custom" />);
    expect(screen.getByTestId('s')).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Separator ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
