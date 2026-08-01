'use client';

import { forwardRef, useState, useCallback, createContext, useContext, type ButtonHTMLAttributes, type HTMLAttributes } from 'react';
import { Popover as PopoverPrimitive } from '@base-ui/react/popover';
import { CalendarBlank } from '@phosphor-icons/react';
import { CalendarRoot } from '../calendar/calendar';
import { cn } from '../../lib/cn';

/* ───────── Helpers ───────── */

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatRange(start?: Date, end?: Date): string {
  if (start && end) return `${formatDate(start)} - ${formatDate(end)}`;
  if (start) return `${formatDate(start)} - ...`;
  return 'Pick date range';
}

/* ───────── Context ───────── */

interface DateRangePickerContextValue {
  start?: Date;
  end?: Date;
}

const DateRangePickerContext = createContext<DateRangePickerContextValue>({});

/* ───────── Root ───────── */

export interface DateRangePickerRootProps {
  startDate?: Date;
  endDate?: Date;
  onChange?: (start: Date, end: Date) => void;
  children?: React.ReactNode;
  min?: Date;
  max?: Date;
}

const Root = forwardRef<HTMLDivElement, DateRangePickerRootProps>(
  ({ startDate: extStart, endDate: extEnd, onChange, children, min, max }, ref) => {
    const [open, setOpen] = useState(false);
    const [start, setStart] = useState<Date | undefined>(extStart);
    const [end, setEnd] = useState<Date | undefined>(extEnd);

    const handleRangeSelect = useCallback(
      (s: Date, e: Date) => {
        setStart(s);
        setEnd(e);
        onChange?.(s, e);
      },
      [onChange],
    );

    return (
      <DateRangePickerContext.Provider value={{ start, end }}>
        <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
          <div ref={ref} data-date-range-picker-root="">
            {children}
          </div>
          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Positioner className="z-[60]">
              <PopoverPrimitive.Popup className="rounded-lg border border-nb-border bg-nb-card p-4 shadow-lg outline-none">
                <CalendarRoot
                  startDate={start}
                  endDate={end}
                  onRangeSelect={handleRangeSelect}
                  min={min}
                  max={max}
                />
              </PopoverPrimitive.Popup>
            </PopoverPrimitive.Positioner>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
      </DateRangePickerContext.Provider>
    );
  },
);
Root.displayName = 'DateRangePicker.Root';

/* ───────── Trigger ───────── */

export interface DateRangePickerTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Trigger = forwardRef<HTMLButtonElement, DateRangePickerTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <PopoverPrimitive.Trigger
      ref={ref}
      className={cn(
        'inline-flex items-center justify-between w-full h-10 rounded-md border border-nb-input bg-nb-bg px-2.5 py-1.5 text-sm ring-offset-nb-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    >
      {children}
    </PopoverPrimitive.Trigger>
  ),
);
Trigger.displayName = 'DateRangePicker.Trigger';

/* ───────── Input ───────── */

export interface DateRangePickerInputProps extends HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
}

const Input = forwardRef<HTMLSpanElement, DateRangePickerInputProps>(
  ({ className, children, ...props }, ref) => {
    const { start, end } = useContext(DateRangePickerContext);
    return (
      <PopoverPrimitive.Trigger
        className={cn(
          'inline-flex items-center justify-between w-full h-10 rounded-md border border-nb-input bg-nb-bg px-2.5 py-1.5 text-sm ring-offset-nb-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2',
          className,
        )}
      >
        <span ref={ref} {...props}>
          {children || formatRange(start, end)}
        </span>
        <CalendarBlank className="h-4 w-4 text-nb-muted-fg" aria-hidden />
      </PopoverPrimitive.Trigger>
    );
  },
);
Input.displayName = 'DateRangePicker.Input';

export {
  Root as DateRangePickerRoot,
  Trigger as DateRangePickerTrigger,
  Input as DateRangePickerInput,
};
export const DateRangePicker = { Root, Trigger, Input };
