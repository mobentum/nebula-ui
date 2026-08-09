import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  AlertDialog,
  Combobox,
  Dialog,
  Drawer,
  Menu,
  Popover,
  Tooltip,
} from '../../index';
import { axe } from './axe';

beforeAll(() => {
  globalThis.PointerEvent = MouseEvent as any;
});

const fruits = ['Apple', 'Banana', 'Orange', 'Pineapple'];

describe('a11y: overlays', () => {
  it('open Dialog has no violations', async () => {
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup>
            <Dialog.Title>Confirm</Dialog.Title>
            <Dialog.Description>Are you sure?</Dialog.Description>
            <Dialog.Close>Close</Dialog.Close>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(await axe(document.body)).toHaveNoViolations();
  });

  it('Dialog moves focus to the popup on open and back on close', async () => {
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup data-testid="popup">
            <Dialog.Title>Title</Dialog.Title>
            <Dialog.Close>Close</Dialog.Close>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    const trigger = screen.getByText('Open');
    await user.click(trigger);
    expect(document.activeElement).toBe(screen.getByText('Close'));
    await user.click(screen.getByText('Close'));
    expect(trigger).toHaveFocus();
  });

  it('Dialog closes on Escape', async () => {
    const user = userEvent.setup();
    render(
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup>
            <Dialog.Title>Title</Dialog.Title>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>,
    );
    await user.click(screen.getByText('Open'));
    await user.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });

  it('open AlertDialog has no violations', async () => {
    const user = userEvent.setup();
    render(
      <AlertDialog.Root>
        <AlertDialog.Trigger>Delete</AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Backdrop />
          <AlertDialog.Popup>
            <AlertDialog.Title>Delete item?</AlertDialog.Title>
            <AlertDialog.Description>This cannot be undone.</AlertDialog.Description>
            <AlertDialog.Close>Cancel</AlertDialog.Close>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>,
    );
    await user.click(screen.getByText('Delete'));
    expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    expect(await axe(document.body)).toHaveNoViolations();
  });

  it('open Popover has no violations', async () => {
    const user = userEvent.setup();
    render(
      <Popover.Root>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Portal>
          <Popover.Positioner>
            <Popover.Popup>
              <Popover.Title>Heading</Popover.Title>
              <Popover.Description>Body text</Popover.Description>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(await axe(document.body)).toHaveNoViolations();
  });

  it('open Menu has no violations', async () => {
    const user = userEvent.setup();
    render(
      <Menu.Root>
        <Menu.Trigger>Open</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner>
            <Menu.Popup>
              <Menu.Item>New</Menu.Item>
              <Menu.Item>Open</Menu.Item>
              <Menu.Separator />
              <Menu.Item>Delete</Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(await axe(document.body)).toHaveNoViolations();
  });

  it('Menu closes on Escape', async () => {
    const user = userEvent.setup();
    render(
      <Menu.Root>
        <Menu.Trigger>Open</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner>
            <Menu.Popup>
              <Menu.Item>New</Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>,
    );
    await user.click(screen.getByText('Open'));
    const item = await screen.findByRole('menuitem', { name: 'New' });
    item.focus();
    await user.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });

  it('open Combobox has no violations', async () => {
    const user = userEvent.setup();
    render(
      <Combobox.Root items={fruits}>
        <Combobox.Trigger id="combobox-trigger" aria-label="Choose a fruit">Open</Combobox.Trigger>
        <Combobox.Portal>
          <Combobox.Positioner>
            <Combobox.Popup aria-labelledby="combobox-trigger">
              <Combobox.List aria-label="Fruits">
                {(item: string) => (
                  <Combobox.Item key={item} value={item}>
                    {item}
                  </Combobox.Item>
                )}
              </Combobox.List>
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(await axe(document.body)).toHaveNoViolations();
  });

  it('Combobox filters options while typing', async () => {
    const user = userEvent.setup();
    render(
      <Combobox.Root items={fruits}>
        <Combobox.Input data-testid="combobox-input" />
        <Combobox.Portal>
          <Combobox.Positioner>
            <Combobox.Popup>
              <Combobox.List>
                {(item: string) => (
                  <Combobox.Item key={item} value={item}>
                    {item}
                  </Combobox.Item>
                )}
              </Combobox.List>
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>,
    );
    const input = screen.getByTestId('combobox-input');
    await user.click(input);
    await user.keyboard('ban');
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.queryByText('Apple')).not.toBeInTheDocument();
  });

  it('open Tooltip has no violations', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip.Root>
        <Tooltip.Trigger as="button">Hover</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner>
            <Tooltip.Popup data-testid="tooltip">Tooltip content</Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>,
    );
    await user.hover(screen.getByText('Hover'));
    expect(await screen.findByTestId('tooltip', {}, { timeout: 3000 })).toBeInTheDocument();
    expect(await axe(document.body)).toHaveNoViolations();
  });

  it('open Drawer has no violations', async () => {
    const user = userEvent.setup();
    render(
      <Drawer.Root>
        <Drawer.Trigger>Open</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop />
          <Drawer.Popup>
            <Drawer.Title>Settings</Drawer.Title>
            <Drawer.Description>Adjust your preferences.</Drawer.Description>
          </Drawer.Popup>
        </Drawer.Portal>
      </Drawer.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(await axe(document.body)).toHaveNoViolations();
  });
});
