'use client';

import { forwardRef, useState, useCallback, type HTMLAttributes, type ButtonHTMLAttributes } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';

/* ───────── Helpers ───────── */

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function getMonthLabel(year: number, month: number) {
  return new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/* ───────── Types ───────── */

export interface CalendarRootProps {
  selected?: Date;
  onSelect?: (date: Date) => void;
  date?: Date;
  onDateChange?: (date: Date) => void;
  className?: string;
  min?: Date;
  max?: Date;
  startDate?: Date;
  endDate?: Date;
  onRangeSelect?: (start: Date, end: Date) => void;
}

/* ───────── Calendar ───────── */

export function CalendarRoot({
  selected,
  onSelect,
  date,
  onDateChange,
  className,
  min,
  max,
  startDate,
  endDate,
  onRangeSelect,
}: CalendarRootProps) {
  const today = new Date();
  const [internalMonth, setInternalMonth] = useState(() => date ?? selected ?? today);
  const viewMonth = date ? date : internalMonth;
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();

  const isRange = !!onRangeSelect;
  const [rangeStart, setRangeStart] = useState<Date | undefined>(startDate);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const label = getMonthLabel(year, month);

  const goToPrevMonth = useCallback(() => {
    const d = new Date(year, month - 1, 1);
    if (onDateChange) onDateChange(d);
    else setInternalMonth(d);
  }, [year, month, onDateChange]);

  const goToNextMonth = useCallback(() => {
    const d = new Date(year, month + 1, 1);
    if (onDateChange) onDateChange(d);
    else setInternalMonth(d);
  }, [year, month, onDateChange]);

  const handleDayClick = useCallback(
    (day: number) => {
      const date = new Date(year, month, day);
      if (min && date < min) return;
      if (max && date > max) return;

      if (isRange) {
        if (!rangeStart) {
          setRangeStart(date);
          onRangeSelect?.(date, date);
          return;
        }
        if (date < rangeStart) {
          onRangeSelect?.(date, rangeStart);
        } else {
          onRangeSelect?.(rangeStart, date);
        }
        setRangeStart(undefined);
        return;
      }

      onSelect?.(date);
    },
    [year, month, onSelect, min, max, isRange, rangeStart, onRangeSelect],
  );

  function isInRange(day: number): boolean {
    if (!isRange) return false;
    const effectiveStart = rangeStart ?? startDate;
    if (!effectiveStart || !endDate) return false;
    const d = new Date(year, month, day);
    const start = effectiveStart < endDate ? effectiveStart : endDate;
    const end = effectiveStart < endDate ? endDate : effectiveStart;
    return d > start && d < end;
  }

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div className={cn('w-full', className)} role="group" aria-label={label}>
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={goToPrevMonth}
          className="inline-flex items-center justify-center rounded-md p-1 hover:bg-nb-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary"
          aria-label="Previous month"
        >
          <CaretLeft className="h-4 w-4" aria-hidden />
        </button>
        <span className="text-sm font-medium">{label}</span>
        <button
          type="button"
          onClick={goToNextMonth}
          className="inline-flex items-center justify-center rounded-md p-1 hover:bg-nb-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary"
          aria-label="Next month"
        >
          <CaretRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center" role="grid" aria-label={label}>
        {WEEKDAYS.map((day) => (
          <div key={day} className="text-xs font-medium text-nb-muted-fg py-1">
            {day}
          </div>
        ))}
        {days.map((day, i) => {
          if (day === null) return <div key={`empty-${i}`} />;
          const date = new Date(year, month, day);
          const isSel = selected && isSameDay(selected, date);
          const isToday = isSameDay(today, date);
          const disabled = (min && date < min) || (max && date > max);
          const effectiveRangeStart = rangeStart ?? startDate;
          const isRangeStart = effectiveRangeStart && isSameDay(effectiveRangeStart, date);
          const isRangeEnd = endDate && isSameDay(endDate, date);
          const inRange = isInRange(day);

          return (
            <button
              key={day}
              type="button"
              role="gridcell"
              disabled={disabled}
              onClick={() => handleDayClick(day)}
              className={cn(
                'inline-flex items-center justify-center rounded-md text-sm h-8 w-8',
                isSel && 'bg-nb-primary text-nb-primary-fg',
                !isSel && isRangeStart && 'bg-nb-primary text-nb-primary-fg',
                !isSel && isRangeEnd && 'bg-nb-primary text-nb-primary-fg',
                inRange && 'bg-nb-primary/10',
                !isSel && !isRangeStart && !isRangeEnd && !inRange && isToday && 'border border-nb-border',
                !isSel && !isRangeStart && !isRangeEnd && !inRange && !isToday && 'hover:bg-nb-accent',
                disabled && 'opacity-50 cursor-not-allowed',
              )}
              aria-label={date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              aria-selected={isSel || undefined}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Sub-components (simple re-exports for compound API) ─── */

export interface CalendarHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header = forwardRef<HTMLDivElement, CalendarHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center justify-between', className)} {...props}>
      {children}
    </div>
  ),
);
Header.displayName = 'Calendar.Header';

export interface CalendarGridProps extends HTMLAttributes<HTMLDivElement> {}

const Grid = forwardRef<HTMLDivElement, CalendarGridProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('grid grid-cols-7 gap-1 text-center', className)} {...props} />
  ),
);
Grid.displayName = 'Calendar.Grid';

export interface CalendarMonthProps extends HTMLAttributes<HTMLSpanElement> {}

const Month = forwardRef<HTMLSpanElement, CalendarMonthProps>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn('text-sm font-medium', className)} {...props} />
  ),
);
Month.displayName = 'Calendar.Month';

export interface CalendarPrevProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Prev = forwardRef<HTMLButtonElement, CalendarPrevProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn('inline-flex items-center justify-center rounded-md p-1 hover:bg-nb-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary', className)}
      {...props}
    />
  ),
);
Prev.displayName = 'Calendar.Prev';

export interface CalendarNextProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Next = forwardRef<HTMLButtonElement, CalendarNextProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn('inline-flex items-center justify-center rounded-md p-1 hover:bg-nb-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary', className)}
      {...props}
    />
  ),
);
Next.displayName = 'Calendar.Next';

export interface CalendarDayProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  day?: number;
  current?: boolean;
  selected?: boolean;
  today?: boolean;
  disabled?: boolean;
}

const Day = forwardRef<HTMLButtonElement, CalendarDayProps>(
  ({ className, selected, today, disabled, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      role="gridcell"
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm h-8 w-8',
        selected && 'bg-nb-primary text-nb-primary-fg',
        !selected && today && 'border border-nb-border',
        !selected && !today && 'hover:bg-nb-accent',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
      {...props}
    />
  ),
);
Day.displayName = 'Calendar.Day';

export interface CalendarWeekdayProps extends HTMLAttributes<HTMLDivElement> {}

const Weekday = forwardRef<HTMLDivElement, CalendarWeekdayProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-xs font-medium text-nb-muted-fg py-1', className)} {...props} />
  ),
);
Weekday.displayName = 'Calendar.Weekday';

export {
  Header as CalendarHeader,
  Grid as CalendarGrid,
  Month as CalendarMonth,
  Prev as CalendarPrev,
  Next as CalendarNext,
  Day as CalendarDay,
  Weekday as CalendarWeekday,
};
export const Calendar = { Root: CalendarRoot, Header, Grid, Month, Prev, Next, Day, Weekday };
