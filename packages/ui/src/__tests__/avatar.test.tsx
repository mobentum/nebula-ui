import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from '../components/avatar';

describe('Avatar', () => {
  it('renders as span', () => {
    render(<Avatar data-testid="a" />);
    expect(screen.getByTestId('a').tagName).toBe('SPAN');
  });

  it('renders initials from alt text', () => {
    render(<Avatar alt="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders fallback when provided', () => {
    render(<Avatar fallback="JD" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('shows fallback while image is loading', () => {
    render(<Avatar alt="John" src="https://example.com/avatar.jpg" />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('renders Avatar.Root', () => {
    render(
      <Avatar.Root data-testid="r">
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar.Root>,
    );
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('renders Avatar.Fallback children', () => {
    render(
      <Avatar.Root>
        <Avatar.Fallback data-testid="f">FB</Avatar.Fallback>
      </Avatar.Root>,
    );
    expect(screen.getByTestId('f')).toHaveTextContent('FB');
  });

  it('applies default size md', () => {
    render(<Avatar data-testid="a" alt="John" />);
    expect(screen.getByTestId('a')).toHaveClass('h-10', 'w-10', 'text-sm');
  });

  it('applies sm size', () => {
    render(<Avatar data-testid="a" alt="John" size="sm" />);
    expect(screen.getByTestId('a')).toHaveClass('h-8', 'w-8', 'text-xs');
  });

  it('applies lg size', () => {
    render(<Avatar data-testid="a" alt="John" size="lg" />);
    expect(screen.getByTestId('a')).toHaveClass('h-12', 'w-12', 'text-base');
  });

  it('applies xl size', () => {
    render(<Avatar data-testid="a" alt="John" size="xl" />);
    expect(screen.getByTestId('a')).toHaveClass('h-16', 'w-16', 'text-lg');
  });

  it('applies base classes', () => {
    render(<Avatar data-testid="a" alt="John" />);
    expect(screen.getByTestId('a')).toHaveClass('inline-flex', 'items-center', 'rounded-full', 'overflow-hidden');
  });

  it('combines custom className', () => {
    render(<Avatar data-testid="a" alt="John" className="my-custom" />);
    expect(screen.getByTestId('a')).toHaveClass('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Avatar ref={ref} alt="John" />);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('has displayName', () => {
    expect(Avatar.displayName).toBe('Avatar');
  });
});
