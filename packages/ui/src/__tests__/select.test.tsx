import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from '../components/select';

beforeAll(() => {
  globalThis.PointerEvent = MouseEvent as any;
});

describe('Select', () => {
  it('renders Select.Trigger', () => {
    render(
      <Select.Root>
        <Select.Trigger data-testid="t" />
      </Select.Root>,
    );
    expect(screen.getByTestId('t')).toBeInTheDocument();
  });

  it('Select.Trigger is a button', () => {
    render(
      <Select.Root>
        <Select.Trigger data-testid="t" />
      </Select.Root>,
    );
    expect(screen.getByTestId('t').tagName).toBe('BUTTON');
  });

  it('Select.Trigger applies default classes', () => {
    render(
      <Select.Root>
        <Select.Trigger data-testid="t" />
      </Select.Root>,
    );
    expect(screen.getByTestId('t')).toHaveClass('flex', 'h-10', 'w-full', 'rounded-md', 'border');
  });

  it('renders Select.Value', () => {
    render(
      <Select.Root defaultValue="apple">
        <Select.Trigger>
          <Select.Value data-testid="v" />
        </Select.Trigger>
      </Select.Root>,
    );
    expect(screen.getByTestId('v')).toBeInTheDocument();
  });

  it('renders Select.Popup when open', async () => {
    const user = userEvent.setup();
    render(
      <Select.Root>
        <Select.Trigger data-testid="t">
          <Select.Value />
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner>
            <Select.Popup data-testid="p">
              <Select.Item value="a">Option A</Select.Item>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>,
    );
    await user.click(screen.getByTestId('t'));
    expect(screen.getByTestId('p')).toBeInTheDocument();
  });

  it('renders Select.Item', async () => {
    const user = userEvent.setup();
    render(
      <Select.Root>
        <Select.Trigger data-testid="t">
          <Select.Value />
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner>
            <Select.Popup>
              <Select.Item data-testid="i" value="a">Option A</Select.Item>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>,
    );
    await user.click(screen.getByTestId('t'));
    expect(screen.getByTestId('i')).toHaveTextContent('Option A');
  });

  it('Select.Item applies default classes', async () => {
    const user = userEvent.setup();
    render(
      <Select.Root>
        <Select.Trigger data-testid="t">
          <Select.Value />
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner>
            <Select.Popup>
              <Select.Item data-testid="i" value="a">Option A</Select.Item>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>,
    );
    await user.click(screen.getByTestId('t'));
    expect(screen.getByTestId('i')).toHaveClass('relative', 'flex', 'rounded-md', 'px-2.5', 'py-2', 'text-sm');
  });

  it('selects item on click', async () => {
    const user = userEvent.setup();
    render(
      <Select.Root>
        <Select.Trigger data-testid="t">
          <Select.Value />
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner>
            <Select.Popup data-testid="popup">
              <Select.Item value="a">Option A</Select.Item>
              <Select.Item value="b">Option B</Select.Item>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>,
    );
    await user.click(screen.getByTestId('t'));
    expect(screen.getByTestId('popup')).toHaveAttribute('data-open', '');
    await user.click(screen.getByText('Option B'));
    expect(screen.getByTestId('popup')).toHaveAttribute('data-closed', '');
  });

  it('Select.Trigger forwards ref', () => {
    const ref = { current: null };
    render(
      <Select.Root>
        <Select.Trigger ref={ref} />
      </Select.Root>,
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('has displayNames', () => {
    expect(Select.Trigger.displayName).toBe('Select.Trigger');
    expect(Select.Value.displayName).toBe('Select.Value');
    expect(Select.Popup.displayName).toBe('Select.Popup');
    expect(Select.Arrow.displayName).toBe('Select.Arrow');
    expect(Select.Item.displayName).toBe('Select.Item');
    expect(Select.ItemText.displayName).toBe('Select.ItemText');
    expect(Select.ItemIndicator.displayName).toBe('Select.ItemIndicator');
  });
});
