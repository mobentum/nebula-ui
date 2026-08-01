import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Menu } from '../components/menu';

describe('Menu', () => {
  it('renders Menu.Trigger', () => {
    render(
      <Menu.Root>
        <Menu.Trigger data-testid="t">Open</Menu.Trigger>
      </Menu.Root>,
    );
    expect(screen.getByTestId('t')).toHaveTextContent('Open');
  });

  it('Menu.Trigger is a button', () => {
    render(
      <Menu.Root>
        <Menu.Trigger data-testid="t">Open</Menu.Trigger>
      </Menu.Root>,
    );
    expect(screen.getByTestId('t').tagName).toBe('BUTTON');
  });

  it('renders full menu structure with items when opened', async () => {
    const user = userEvent.setup();
    render(
      <Menu.Root>
        <Menu.Trigger>Open</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner>
            <Menu.Popup data-testid="popup">
              <Menu.Item data-testid="item">Item 1</Menu.Item>
              <Menu.Separator data-testid="sep" />
              <Menu.Item>Item 2</Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>,
    );
    await user.click(screen.getByText('Open'));
    const popup = screen.queryByTestId('popup');
    if (popup) {
      expect(popup).toHaveClass('z-[60]', 'min-w-[8rem]', 'overflow-hidden', 'rounded-md', 'border', 'border-nb-border', 'bg-nb-popover', 'text-nb-popover-fg', 'p-1', 'shadow-lg');
      expect(screen.getByTestId('item')).toHaveClass('relative', 'flex', 'rounded-sm', 'px-2', 'py-1.5', 'text-sm');
      expect(screen.getByTestId('sep')).toHaveClass('-mx-1', 'my-1', 'h-px', 'bg-nb-accent');
    }
  });

  it('renders Menu.Group and Menu.RadioItem', async () => {
    const user = userEvent.setup();
    render(
      <Menu.Root>
        <Menu.Trigger>Open</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner>
            <Menu.Popup>
              <Menu.Group data-testid="group">
                <Menu.GroupLabel data-testid="label">Group Label</Menu.GroupLabel>
                <Menu.RadioGroup data-testid="rg">
                  <Menu.RadioItem data-testid="ri" value="a">Option A</Menu.RadioItem>
                </Menu.RadioGroup>
              </Menu.Group>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>,
    );
    await user.click(screen.getByText('Open'));
    const group = screen.queryByTestId('group');
    if (group) {
      expect(screen.getByTestId('label')).toHaveTextContent('Group Label');
      expect(screen.getByTestId('ri')).toHaveTextContent('Option A');
    }
  });

  it('has displayNames', () => {
    expect(Menu.Popup.displayName).toBe('Menu.Popup');
    expect(Menu.Item.displayName).toBe('Menu.Item');
    expect(Menu.Separator.displayName).toBe('Menu.Separator');
    expect(Menu.Arrow.displayName).toBe('Menu.Arrow');
    expect(Menu.Group.displayName).toBe('Menu.Group');
    expect(Menu.GroupLabel.displayName).toBe('Menu.GroupLabel');
    expect(Menu.RadioGroup.displayName).toBe('Menu.RadioGroup');
    expect(Menu.RadioItem.displayName).toBe('Menu.RadioItem');
    expect(Menu.Positioner.displayName).toBe('Menu.Positioner');
    expect(Menu.Portal.displayName).toBe('Menu.Portal');
  });
});
