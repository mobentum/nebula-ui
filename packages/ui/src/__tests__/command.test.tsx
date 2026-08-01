import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Command } from '../components/command';

describe('Command', () => {
  it('renders Command.Root', () => {
    render(<Command.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('Command.Root applies default classes', () => {
    render(<Command.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveClass('flex', 'flex-col', 'rounded-md', 'bg-nb-popover');
  });

  it('renders Command.Input', () => {
    render(
      <Command.Root>
        <Command.Input data-testid="i" placeholder="Search..." />
      </Command.Root>,
    );
    expect(screen.getByTestId('i')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('combines custom className on Root', () => {
    render(<Command.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(Command.Root.displayName).toBe('Command.Root');
    expect(Command.Input.displayName).toBe('Command.Input');
    expect(Command.List.displayName).toBe('Command.List');
    expect(Command.Empty.displayName).toBe('Command.Empty');
    expect(Command.Group.displayName).toBe('Command.Group');
    expect(Command.Item.displayName).toBe('Command.Item');
    expect(Command.Separator.displayName).toBe('Command.Separator');
    expect(Command.Dialog.displayName).toBe('Command.Dialog');
  });
});
