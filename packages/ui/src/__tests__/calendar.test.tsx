import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Calendar } from '../components/calendar';

const JAN_2026 = new Date(2026, 0, 15);

describe('Calendar', () => {
  it('renders the month label', () => {
    render(<Calendar.Root date={JAN_2026} />);
    expect(screen.getByText('January 2026')).toBeInTheDocument();
  });

  it('renders weekday headers', () => {
    render(<Calendar.Root date={JAN_2026} />);
    for (const day of ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']) {
      expect(screen.getByText(day)).toBeInTheDocument();
    }
  });

  it('renders day cells for the month', () => {
    render(<Calendar.Root date={JAN_2026} />);
    expect(screen.getByRole('gridcell', { name: /January 15, 2026/ })).toHaveTextContent('15');
  });

  it('navigates to the previous month', async () => {
    const user = userEvent.setup();
    render(<Calendar.Root selected={JAN_2026} />);
    await user.click(screen.getByRole('button', { name: 'Previous month' }));
    expect(screen.getByText('December 2025')).toBeInTheDocument();
  });

  it('navigates to the next month', async () => {
    const user = userEvent.setup();
    render(<Calendar.Root selected={JAN_2026} />);
    await user.click(screen.getByRole('button', { name: 'Next month' }));
    expect(screen.getByText('February 2026')).toBeInTheDocument();
  });

  it('marks the selected date', () => {
    render(<Calendar.Root date={JAN_2026} selected={JAN_2026} />);
    const cell = screen.getByRole('gridcell', { name: /January 15, 2026/ });
    expect(cell).toHaveAttribute('aria-selected', 'true');
    expect(cell).toHaveClass('bg-nb-primary');
  });

  it('calls onSelect when a day is clicked', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<Calendar.Root date={JAN_2026} onSelect={onSelect} />);
    await user.click(screen.getByRole('gridcell', { name: /January 15, 2026/ }));
    expect(onSelect).toHaveBeenCalledWith(new Date(2026, 0, 15));
  });

  it('disables days outside min/max bounds', () => {
    render(
      <Calendar.Root
        date={JAN_2026}
        min={new Date(2026, 0, 10)}
        max={new Date(2026, 0, 20)}
      />,
    );
    expect(screen.getByRole('gridcell', { name: /January 5, 2026/ })).toBeDisabled();
    expect(screen.getByRole('gridcell', { name: /January 15, 2026/ })).toBeEnabled();
    expect(screen.getByRole('gridcell', { name: /January 25, 2026/ })).toBeDisabled();
  });

  it('does not select a disabled day', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <Calendar.Root date={JAN_2026} min={new Date(2026, 0, 10)} onSelect={onSelect} />,
    );
    await user.click(screen.getByRole('gridcell', { name: /January 5, 2026/ }));
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('calls onRangeSelect with the range', async () => {
    const user = userEvent.setup();
    const onRangeSelect = vi.fn();
    render(
      <Calendar.Root
        date={JAN_2026}
        onRangeSelect={onRangeSelect}
      />,
    );
    await user.click(screen.getByRole('gridcell', { name: /January 10, 2026/ }));
    await user.click(screen.getByRole('gridcell', { name: /January 15, 2026/ }));
    expect(onRangeSelect).toHaveBeenCalledWith(
      new Date(2026, 0, 10),
      new Date(2026, 0, 15),
    );
  });

  it('combines custom className', () => {
    render(<Calendar.Root date={JAN_2026} className="my-custom" />);
    expect(screen.getByRole('group')).toHaveClass('my-custom');
  });

  it('renders Calendar.Day sub-component', () => {
    render(<Calendar.Day data-testid="d" />);
    expect(screen.getByTestId('d').tagName).toBe('BUTTON');
  });

  it('has displayNames', () => {
    expect(Calendar.Root.displayName).toBeUndefined();
    expect(Calendar.Header.displayName).toBe('Calendar.Header');
    expect(Calendar.Grid.displayName).toBe('Calendar.Grid');
    expect(Calendar.Month.displayName).toBe('Calendar.Month');
    expect(Calendar.Prev.displayName).toBe('Calendar.Prev');
    expect(Calendar.Next.displayName).toBe('Calendar.Next');
    expect(Calendar.Day.displayName).toBe('Calendar.Day');
    expect(Calendar.Weekday.displayName).toBe('Calendar.Weekday');
  });
});
