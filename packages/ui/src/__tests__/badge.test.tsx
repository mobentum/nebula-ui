import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from '../components/badge';

describe('Badge', () => {
  it('renders with children', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('renders as span', () => {
    render(<Badge data-testid="b">New</Badge>);
    expect(screen.getByTestId('b').tagName).toBe('SPAN');
  });

  it('applies default variant solid', () => {
    render(<Badge data-testid="b">New</Badge>);
    expect(screen.getByTestId('b')).toHaveClass('bg-nb-primary', 'text-nb-primary-fg');
  });

  it('applies outline variant', () => {
    render(<Badge data-testid="b" variant="outline">New</Badge>);
    expect(screen.getByTestId('b')).toHaveClass('border', 'border-nb-primary', 'text-nb-primary');
  });

  it('applies subtle variant', () => {
    render(<Badge data-testid="b" variant="subtle">New</Badge>);
    expect(screen.getByTestId('b')).toHaveClass('bg-nb-primary/10', 'text-nb-primary');
  });

  it('applies default size md', () => {
    render(<Badge data-testid="b">New</Badge>);
    expect(screen.getByTestId('b')).toHaveClass('h-6', 'px-3', 'text-sm');
  });

  it('applies sm size', () => {
    render(<Badge data-testid="b" size="sm">New</Badge>);
    expect(screen.getByTestId('b')).toHaveClass('h-5', 'px-2', 'text-xs');
  });

  it('applies lg size', () => {
    render(<Badge data-testid="b" size="lg">New</Badge>);
    expect(screen.getByTestId('b')).toHaveClass('h-7', 'px-4', 'text-sm');
  });

  it('applies base classes', () => {
    render(<Badge data-testid="b">New</Badge>);
    expect(screen.getByTestId('b')).toHaveClass('inline-flex', 'items-center', 'rounded-full', 'font-medium');
  });

  it('combines custom className', () => {
    render(<Badge data-testid="b" className="my-custom">New</Badge>);
    expect(screen.getByTestId('b')).toHaveClass('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Badge ref={ref}>New</Badge>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('has displayName', () => {
    expect(Badge.displayName).toBe('Badge');
  });
});
