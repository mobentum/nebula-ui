import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../components/button';

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('applies default variant and size', () => {
    render(<Button data-testid="btn">Click</Button>);
    const btn = screen.getByTestId('btn');
    expect(btn).toHaveClass('bg-nb-primary');
    expect(btn).toHaveClass('h-10');
  });

  it('uses a pointer cursor for interactive buttons', () => {
    render(<Button data-testid="btn">Click</Button>);
    expect(screen.getByTestId('btn')).toHaveStyle({ cursor: 'pointer' });
  });

  it('removes the browser outline and keeps a keyboard focus ring', () => {
    render(<Button data-testid="btn">Click</Button>);
    expect(screen.getByTestId('btn')).toHaveClass('focus:outline-none');
    expect(screen.getByTestId('btn')).toHaveClass('focus-visible:ring-2');
  });

  it('applies variant classes', () => {
    render(<Button data-testid="btn" variant="secondary">Click</Button>);
    expect(screen.getByTestId('btn')).toHaveClass('bg-nb-secondary');
    expect(screen.getByTestId('btn')).toHaveClass('hover:bg-nb-secondary/80');
    expect(screen.getByTestId('btn')).toHaveClass('text-nb-secondary-fg');
  });

  it('applies size classes', () => {
    render(<Button data-testid="btn" size="lg">Click</Button>);
    expect(screen.getByTestId('btn')).toHaveClass('h-12');
  });

  it('applies fullWidth class', () => {
    render(<Button data-testid="btn" fullWidth>Click</Button>);
    expect(screen.getByTestId('btn')).toHaveClass('w-full');
  });

  it('renders as disabled', () => {
    render(<Button data-testid="btn" disabled>Click</Button>);
    expect(screen.getByTestId('btn')).toBeDisabled();
  });

  it('renders as disabled when loading', () => {
    render(<Button data-testid="btn" loading>Click</Button>);
    expect(screen.getByTestId('btn')).toBeDisabled();
  });

  it('shows spinner when loading', () => {
    render(<Button loading>Click</Button>);
    const btn = screen.getByRole('button');
    expect(btn.querySelector('svg')).toBeTruthy();
  });

  it('combines custom className', () => {
    render(<Button data-testid="btn" className="my-custom">Click</Button>);
    expect(screen.getByTestId('btn')).toHaveClass('my-custom');
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick}>Click</Button>);
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick} disabled>Click</Button>);
    await user.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Button ref={ref}>Click</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('sets type button by default', () => {
    render(<Button data-testid="btn">Click</Button>);
    expect(screen.getByTestId('btn')).toHaveAttribute('type', 'button');
  });

  it('supports type submit', () => {
    render(<Button data-testid="btn" type="submit">Submit</Button>);
    expect(screen.getByTestId('btn')).toHaveAttribute('type', 'submit');
  });
});
