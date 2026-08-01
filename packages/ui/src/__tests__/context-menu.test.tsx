import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContextMenu } from '../components/context-menu';

beforeAll(() => {
  globalThis.PointerEvent = MouseEvent as any;
});

describe('ContextMenu', () => {
  it('renders ContextMenu.Trigger', () => {
    render(
      <ContextMenu.Root>
        <ContextMenu.Trigger data-testid="t">Right click</ContextMenu.Trigger>
      </ContextMenu.Root>,
    );
    expect(screen.getByTestId('t')).toHaveTextContent('Right click');
  });

  it('ContextMenu.Trigger is a div', () => {
    render(
      <ContextMenu.Root>
        <ContextMenu.Trigger data-testid="t">Right click</ContextMenu.Trigger>
      </ContextMenu.Root>,
    );
    expect(screen.getByTestId('t').tagName).toBe('DIV');
  });

  it('renders ContextMenu.Popup', () => {
    render(
      <ContextMenu.Root defaultOpen>
        <ContextMenu.Portal>
          <ContextMenu.Positioner>
            <ContextMenu.Popup data-testid="p">
              <ContextMenu.Item value="a">Item A</ContextMenu.Item>
            </ContextMenu.Popup>
          </ContextMenu.Positioner>
        </ContextMenu.Portal>
      </ContextMenu.Root>,
    );
    expect(screen.getByTestId('p')).toBeInTheDocument();
  });

  it('renders ContextMenu.Item', () => {
    render(
      <ContextMenu.Root defaultOpen>
        <ContextMenu.Portal>
          <ContextMenu.Positioner>
            <ContextMenu.Popup>
              <ContextMenu.Item data-testid="i" id="a">Item A</ContextMenu.Item>
            </ContextMenu.Popup>
          </ContextMenu.Positioner>
        </ContextMenu.Portal>
      </ContextMenu.Root>,
    );
    expect(screen.getByTestId('i')).toHaveTextContent('Item A');
  });

  it('renders ContextMenu.Separator', () => {
    render(
      <ContextMenu.Root defaultOpen>
        <ContextMenu.Portal>
          <ContextMenu.Positioner>
            <ContextMenu.Popup>
              <ContextMenu.Separator data-testid="s" />
            </ContextMenu.Popup>
          </ContextMenu.Positioner>
        </ContextMenu.Portal>
      </ContextMenu.Root>,
    );
    expect(screen.getByTestId('s')).toBeInTheDocument();
  });

  it('renders ContextMenu.Arrow', () => {
    render(
      <ContextMenu.Root defaultOpen>
        <ContextMenu.Portal>
          <ContextMenu.Positioner>
            <ContextMenu.Popup>
              <ContextMenu.Arrow data-testid="a" />
            </ContextMenu.Popup>
          </ContextMenu.Positioner>
        </ContextMenu.Portal>
      </ContextMenu.Root>,
    );
    expect(screen.getByTestId('a')).toBeInTheDocument();
  });

  it('renders ContextMenu.Group', () => {
    render(
      <ContextMenu.Root>
        <ContextMenu.Group data-testid="g" />
      </ContextMenu.Root>,
    );
    expect(screen.getByTestId('g')).toBeInTheDocument();
  });

  it('renders ContextMenu.RadioItem', () => {
    render(
      <ContextMenu.Root defaultOpen>
        <ContextMenu.Portal>
          <ContextMenu.Positioner>
            <ContextMenu.Popup>
              <ContextMenu.RadioGroup>
                <ContextMenu.RadioItem data-testid="r" value="a">Radio</ContextMenu.RadioItem>
              </ContextMenu.RadioGroup>
            </ContextMenu.Popup>
          </ContextMenu.Positioner>
        </ContextMenu.Portal>
      </ContextMenu.Root>,
    );
    expect(screen.getByTestId('r')).toHaveTextContent('Radio');
  });

  it('ContextMenu.Popup applies default classes', () => {
    render(
      <ContextMenu.Root defaultOpen>
        <ContextMenu.Portal>
          <ContextMenu.Positioner>
            <ContextMenu.Popup data-testid="p">
              <ContextMenu.Item id="a">A</ContextMenu.Item>
            </ContextMenu.Popup>
          </ContextMenu.Positioner>
        </ContextMenu.Portal>
      </ContextMenu.Root>,
    );
    expect(screen.getByTestId('p')).toHaveClass('z-[60]', 'min-w-[8rem]', 'overflow-hidden', 'rounded-md', 'border', 'border-nb-border', 'bg-nb-popover', 'p-1', 'text-nb-popover-fg', 'shadow-lg');
  });

  it('has displayNames', () => {
    expect(ContextMenu.Popup.displayName).toBe('ContextMenu.Popup');
    expect(ContextMenu.Item.displayName).toBe('ContextMenu.Item');
    expect(ContextMenu.Separator.displayName).toBe('ContextMenu.Separator');
    expect(ContextMenu.Arrow.displayName).toBe('ContextMenu.Arrow');
    expect(ContextMenu.Group.displayName).toBe('ContextMenu.Group');
    expect(ContextMenu.RadioItem.displayName).toBe('ContextMenu.RadioItem');
  });
});
