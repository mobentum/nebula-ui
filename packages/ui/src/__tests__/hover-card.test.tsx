import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HoverCard } from '../components/hover-card';

describe('HoverCard', () => {
  it('renders HoverCard.Trigger', () => {
    render(
      <HoverCard.Root>
        <HoverCard.Trigger data-testid="t">Hover me</HoverCard.Trigger>
      </HoverCard.Root>,
    );
    expect(screen.getByTestId('t')).toHaveTextContent('Hover me');
  });

  it('HoverCard.Trigger is a link', () => {
    render(
      <HoverCard.Root>
        <HoverCard.Trigger data-testid="t">Hover me</HoverCard.Trigger>
      </HoverCard.Root>,
    );
    expect(screen.getByTestId('t').tagName).toBe('A');
  });

  it('renders HoverCard.Popup', () => {
    render(
      <HoverCard.Root defaultOpen>
        <HoverCard.Portal>
          <HoverCard.Positioner>
            <HoverCard.Popup data-testid="p">
              Content
            </HoverCard.Popup>
          </HoverCard.Positioner>
        </HoverCard.Portal>
      </HoverCard.Root>,
    );
    expect(screen.getByTestId('p')).toBeInTheDocument();
  });

  it('HoverCard.Popup applies default classes', () => {
    render(
      <HoverCard.Root defaultOpen>
        <HoverCard.Portal>
          <HoverCard.Positioner>
            <HoverCard.Popup data-testid="p">
              Content
            </HoverCard.Popup>
          </HoverCard.Positioner>
        </HoverCard.Portal>
      </HoverCard.Root>,
    );
    expect(screen.getByTestId('p')).toHaveClass('z-[60]', 'w-64', 'rounded-md', 'border', 'border-nb-border', 'bg-nb-popover', 'p-4', 'text-nb-popover-fg', 'shadow-lg', 'outline-none');
  });

  it('renders HoverCard.Arrow', () => {
    render(
      <HoverCard.Root defaultOpen>
        <HoverCard.Portal>
          <HoverCard.Positioner>
            <HoverCard.Popup>
              <HoverCard.Arrow data-testid="a" />
            </HoverCard.Popup>
          </HoverCard.Positioner>
        </HoverCard.Portal>
      </HoverCard.Root>,
    );
    expect(screen.getByTestId('a')).toBeInTheDocument();
  });

  it('combines custom className', () => {
    render(
      <HoverCard.Root defaultOpen>
        <HoverCard.Portal>
          <HoverCard.Positioner>
            <HoverCard.Popup data-testid="p" className="my-custom">
              Content
            </HoverCard.Popup>
          </HoverCard.Positioner>
        </HoverCard.Portal>
      </HoverCard.Root>,
    );
    expect(screen.getByTestId('p')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(HoverCard.Popup.displayName).toBe('HoverCard.Popup');
    expect(HoverCard.Arrow.displayName).toBe('HoverCard.Arrow');
  });
});
