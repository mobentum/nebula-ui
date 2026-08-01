import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Skeleton } from '../components/skeleton';

describe('Skeleton', () => {
  it('renders as div', () => {
    render(<Skeleton data-testid="s" />);
    expect(screen.getByTestId('s').tagName).toBe('DIV');
  });

  it('applies animate-pulse and bg classes', () => {
    render(<Skeleton data-testid="s" />);
    expect(screen.getByTestId('s')).toHaveClass('animate-pulse', 'bg-nb-accent');
  });

  it('applies default variant text', () => {
    render(<Skeleton data-testid="s" />);
    expect(screen.getByTestId('s')).toHaveClass('h-4', 'w-full', 'rounded');
  });

  it('applies circular variant', () => {
    render(<Skeleton data-testid="s" variant="circular" />);
    expect(screen.getByTestId('s')).toHaveClass('rounded-full');
  });

  it('applies rectangular variant', () => {
    render(<Skeleton data-testid="s" variant="rectangular" />);
    expect(screen.getByTestId('s')).toHaveClass('rounded');
  });

  it('applies width and height as inline style', () => {
    render(<Skeleton data-testid="s" width={200} height={100} />);
    const el = screen.getByTestId('s');
    expect(el.style.width).toBe('200px');
    expect(el.style.height).toBe('100px');
  });

  it('combines custom className', () => {
    render(<Skeleton data-testid="s" className="my-custom" />);
    expect(screen.getByTestId('s')).toHaveClass('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Skeleton ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayName', () => {
    expect(Skeleton.displayName).toBe('Skeleton');
  });
});
