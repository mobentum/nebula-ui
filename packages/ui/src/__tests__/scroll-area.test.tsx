import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ScrollArea } from '../components/scroll-area';

describe('ScrollArea', () => {
  it('renders ScrollArea.Root', () => {
    render(<ScrollArea.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('ScrollArea.Root applies default classes', () => {
    render(<ScrollArea.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveClass('relative', 'overflow-hidden');
  });

  it('renders ScrollArea.Viewport', () => {
    render(
      <ScrollArea.Root>
        <ScrollArea.Viewport data-testid="v" />
      </ScrollArea.Root>,
    );
    expect(screen.getByTestId('v')).toBeInTheDocument();
  });

  it('ScrollArea.Scrollbar has displayName', () => {
    expect(ScrollArea.Scrollbar.displayName).toBe('ScrollArea.Scrollbar');
  });

  it('ScrollArea.Thumb has displayName', () => {
    expect(ScrollArea.Thumb.displayName).toBe('ScrollArea.Thumb');
  });

  it('ScrollArea.Corner has displayName', () => {
    expect(ScrollArea.Corner.displayName).toBe('ScrollArea.Corner');
  });

  it('combines custom className', () => {
    render(<ScrollArea.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(ScrollArea.Root.displayName).toBe('ScrollArea.Root');
    expect(ScrollArea.Viewport.displayName).toBe('ScrollArea.Viewport');
    expect(ScrollArea.Scrollbar.displayName).toBe('ScrollArea.Scrollbar');
    expect(ScrollArea.Thumb.displayName).toBe('ScrollArea.Thumb');
    expect(ScrollArea.Corner.displayName).toBe('ScrollArea.Corner');
  });
});
