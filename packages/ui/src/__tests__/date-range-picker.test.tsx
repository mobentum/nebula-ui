import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DateRangePicker } from '../components/date-range-picker';

beforeAll(() => {
  globalThis.PointerEvent = MouseEvent as any;
});

describe('DateRangePicker', () => {
  it('renders DateRangePicker.Trigger', () => {
    render(
      <DateRangePicker.Root>
        <DateRangePicker.Trigger data-testid="t">Pick</DateRangePicker.Trigger>
      </DateRangePicker.Root>,
    );
    expect(screen.getByTestId('t')).toHaveTextContent('Pick');
  });

  it('opens the calendar on trigger click', async () => {
    const user = userEvent.setup();
    render(
      <DateRangePicker.Root>
        <DateRangePicker.Trigger>Open</DateRangePicker.Trigger>
      </DateRangePicker.Root>,
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getAllByRole('gridcell').length).toBeGreaterThan(0);
  });

  it('renders the default placeholder in Input', () => {
    render(
      <DateRangePicker.Root>
        <DateRangePicker.Input data-testid="i" />
      </DateRangePicker.Root>,
    );
    expect(screen.getByTestId('i')).toHaveTextContent('Pick date range');
  });

  it('renders the formatted range in Input', () => {
    render(
      <DateRangePicker.Root
        startDate={new Date(2026, 0, 10)}
        endDate={new Date(2026, 0, 15)}
      >
        <DateRangePicker.Input data-testid="i" />
      </DateRangePicker.Root>,
    );
    expect(screen.getByTestId('i')).toHaveTextContent('Jan 10, 2026 - Jan 15, 2026');
  });

  it('selects a range and calls onChange', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const now = new Date();
    const dayLabel = (d: number) =>
      new Date(now.getFullYear(), now.getMonth(), d).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    render(
      <DateRangePicker.Root onChange={onChange}>
        <DateRangePicker.Trigger>Open</DateRangePicker.Trigger>
      </DateRangePicker.Root>,
    );
    await user.click(screen.getByText('Open'));
    await user.click(screen.getByRole('gridcell', { name: dayLabel(12) }));
    await user.click(screen.getByRole('gridcell', { name: dayLabel(20) }));
    expect(onChange).toHaveBeenCalledWith(
      new Date(now.getFullYear(), now.getMonth(), 12),
      new Date(now.getFullYear(), now.getMonth(), 20),
    );
  });

  it('combines custom className on Trigger', () => {
    render(
      <DateRangePicker.Root>
        <DateRangePicker.Trigger data-testid="t" className="my-custom">Pick</DateRangePicker.Trigger>
      </DateRangePicker.Root>,
    );
    expect(screen.getByTestId('t')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(DateRangePicker.Root.displayName).toBe('DateRangePicker.Root');
    expect(DateRangePicker.Trigger.displayName).toBe('DateRangePicker.Trigger');
    expect(DateRangePicker.Input.displayName).toBe('DateRangePicker.Input');
  });
});
