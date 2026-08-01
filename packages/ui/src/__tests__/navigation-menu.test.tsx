import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NavigationMenu } from '../components/navigation-menu';

describe('NavigationMenu', () => {
  it('renders NavigationMenu.Root', () => {
    render(<NavigationMenu.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('NavigationMenu.Root applies default classes', () => {
    render(<NavigationMenu.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveClass('relative', 'flex', 'items-center', 'justify-center');
  });

  it('renders NavigationMenu.List', () => {
    render(
      <NavigationMenu.Root>
        <NavigationMenu.List data-testid="l" />
      </NavigationMenu.Root>,
    );
    expect(screen.getByTestId('l')).toBeInTheDocument();
  });

  it('renders NavigationMenu.Item', () => {
    render(
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item data-testid="i" />
        </NavigationMenu.List>
      </NavigationMenu.Root>,
    );
    expect(screen.getByTestId('i')).toBeInTheDocument();
  });

  it('renders NavigationMenu.Trigger', () => {
    render(
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger data-testid="t">Getting Started</NavigationMenu.Trigger>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>,
    );
    expect(screen.getByTestId('t')).toHaveTextContent('Getting Started');
  });

  it('renders NavigationMenu.Link', () => {
    render(
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Link data-testid="l" href="/docs">Docs</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>,
    );
    expect(screen.getByTestId('l')).toHaveAttribute('href', '/docs');
  });

  it('combines custom className on Root', () => {
    render(<NavigationMenu.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(NavigationMenu.Root.displayName).toBe('NavigationMenu.Root');
    expect(NavigationMenu.List.displayName).toBe('NavigationMenu.List');
    expect(NavigationMenu.Item.displayName).toBe('NavigationMenu.Item');
    expect(NavigationMenu.Trigger.displayName).toBe('NavigationMenu.Trigger');
    expect(NavigationMenu.Popup.displayName).toBe('NavigationMenu.Popup');
    expect(NavigationMenu.Content.displayName).toBe('NavigationMenu.Content');
    expect(NavigationMenu.Link.displayName).toBe('NavigationMenu.Link');
    expect(NavigationMenu.Viewport.displayName).toBe('NavigationMenu.Viewport');
    expect(NavigationMenu.Arrow.displayName).toBe('NavigationMenu.Arrow');
    expect(NavigationMenu.Indicator.displayName).toBe('NavigationMenu.Indicator');
  });
});
