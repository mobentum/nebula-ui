import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Spinner } from '../components/spinner';

describe('Spinner', () => {
  it('renders an svg', () => {
    render(<Spinner data-testid="s" />);
    const el = screen.getByTestId('s');
    expect(el.tagName).toBe('svg');
  });

  it('has default aria-label', () => {
    render(<Spinner data-testid="s" />);
    expect(screen.getByTestId('s')).toHaveAttribute('aria-label', 'Loading');
  });

  it('accepts custom aria-label', () => {
    render(<Spinner data-testid="s" aria-label="Please wait" />);
    expect(screen.getByTestId('s')).toHaveAttribute('aria-label', 'Please wait');
  });

  it('applies animate-spin class', () => {
    render(<Spinner data-testid="s" />);
    expect(screen.getByTestId('s')).toHaveClass('animate-spin');
  });

  it('applies default size md', () => {
    render(<Spinner data-testid="s" />);
    expect(screen.getByTestId('s')).toHaveClass('h-6', 'w-6');
  });

  it('applies sm size', () => {
    render(<Spinner data-testid="s" size="sm" />);
    expect(screen.getByTestId('s')).toHaveClass('h-4', 'w-4');
  });

  it('applies lg size', () => {
    render(<Spinner data-testid="s" size="lg" />);
    expect(screen.getByTestId('s')).toHaveClass('h-8', 'w-8');
  });

  it('combines custom className', () => {
    render(<Spinner data-testid="s" className="my-custom" />);
    expect(screen.getByTestId('s')).toHaveClass('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Spinner ref={ref} />);
    expect(ref.current).toBeInstanceOf(SVGSVGElement);
  });

  it('has displayName', () => {
    expect(Spinner.displayName).toBe('Spinner');
  });
});
