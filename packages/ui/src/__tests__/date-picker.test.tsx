import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DatePicker } from '../components/date-picker';

beforeAll(() => {
  globalThis.PointerEvent = MouseEvent as any;
});

describe('DatePicker', () => {
  it('renders DatePicker.Trigger', () => {
    render(
      <DatePicker.Root>
        <DatePicker.Trigger data-testid="t">Pick</DatePicker.Trigger>
      </DatePicker.Root>,
    );
    expect(screen.getByTestId('t')).toHaveTextContent('Pick');
  });

  it('opens the calendar on trigger click', async () => {
    const user = userEvent.setup();
    render(
      <DatePicker.Root>
        <DatePicker.Trigger>Open</DatePicker.Trigger>
      </DatePicker.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getAllByRole('gridcell').length).toBeGreaterThan(0);
  });

  it('renders the placeholder in Input when nothing selected', () => {
    render(
      <DatePicker.Root>
        <DatePicker.Input data-testid="i" />
      </DatePicker.Root>,
    );
    expect(screen.getByTestId('i')).toHaveTextContent('Pick a date');
  });

  it('renders the formatted selected date in Input', () => {
    render(
      <DatePicker.Root value={new Date(2026, 0, 15)}>
        <DatePicker.Input data-testid="i" />
      </DatePicker.Root>,
    );
    expect(screen.getByTestId('i')).toHaveTextContent('Jan 15, 2026');
  });

  it('selects a date from the calendar and calls onChange', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <DatePicker.Root value={new Date(2026, 0, 15)} onChange={onChange}>
        <DatePicker.Trigger>Open</DatePicker.Trigger>
      </DatePicker.Root>,
    );
    await user.click(screen.getByText('Open'));
    await user.click(screen.getByRole('gridcell', { name: /January 20, 2026/ }));
    expect(onChange).toHaveBeenCalledWith(new Date(2026, 0, 20));
  });

  it('combines custom className on Trigger', () => {
    render(
      <DatePicker.Root>
        <DatePicker.Trigger data-testid="t" className="my-custom">Pick</DatePicker.Trigger>
      </DatePicker.Root>,
    );
    expect(screen.getByTestId('t')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(DatePicker.Root.displayName).toBe('DatePicker.Root');
    expect(DatePicker.Trigger.displayName).toBe('DatePicker.Trigger');
    expect(DatePicker.Input.displayName).toBe('DatePicker.Input');
  });
});
