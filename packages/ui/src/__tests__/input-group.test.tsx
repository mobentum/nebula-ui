import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputGroup } from '../components/input-group';
import { Input } from '../components/input';

describe('InputGroup', () => {
  it('renders InputGroup.Root', () => {
    render(<InputGroup.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('InputGroup.Root applies flex classes', () => {
    render(<InputGroup.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveClass('flex', 'w-full', 'items-center');
  });

  it('renders InputGroup.Addon', () => {
    render(<InputGroup.Addon data-testid="a">$</InputGroup.Addon>);
    expect(screen.getByTestId('a')).toHaveTextContent('$');
  });

  it('InputGroup.Addon applies default classes', () => {
    render(<InputGroup.Addon data-testid="a">$</InputGroup.Addon>);
    expect(screen.getByTestId('a')).toHaveClass('inline-flex', 'h-10', 'items-center', 'rounded-md', 'border', 'border-nb-border', 'bg-nb-muted', 'px-3', 'text-sm', 'text-nb-muted-fg');
  });

  it('renders Input inside InputGroup', () => {
    render(
      <InputGroup.Root>
        <InputGroup.Addon>$</InputGroup.Addon>
        <Input data-testid="i" placeholder="Amount" />
        <InputGroup.Addon>.00</InputGroup.Addon>
      </InputGroup.Root>,
    );
    expect(screen.getByTestId('i')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Amount')).toBeInTheDocument();
  });

  it('combines custom className on Root', () => {
    render(<InputGroup.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('combines custom className on Addon', () => {
    render(<InputGroup.Addon data-testid="a" className="my-custom">$</InputGroup.Addon>);
    expect(screen.getByTestId('a')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(InputGroup.Root.displayName).toBe('InputGroup.Root');
    expect(InputGroup.Addon.displayName).toBe('InputGroup.Addon');
  });
});
