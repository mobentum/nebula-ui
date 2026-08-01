import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Input } from '../components/input';

describe('Input', () => {
  it('renders as input element', () => {
    render(<Input data-testid="i" />);
    expect(screen.getByTestId('i').tagName).toBe('INPUT');
  });

  it('passes placeholder', () => {
    render(<Input data-testid="i" placeholder="Enter text" />);
    expect(screen.getByTestId('i')).toHaveAttribute('placeholder', 'Enter text');
  });

  it('applies default classes', () => {
    render(<Input data-testid="i" />);
    const el = screen.getByTestId('i');
    expect(el).toHaveClass('flex', 'h-10', 'w-full', 'rounded-md', 'border');
  });

  it('combines custom className', () => {
    render(<Input data-testid="i" className="my-custom" />);
    expect(screen.getByTestId('i')).toHaveClass('my-custom');
  });

  it('renders as disabled', () => {
    render(<Input data-testid="i" disabled />);
    expect(screen.getByTestId('i')).toBeDisabled();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('has displayName', () => {
    expect(Input.displayName).toBe('Input');
  });
});
