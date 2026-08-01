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

/* ───────── Context ───────── */

interface DatePickerContextValue {
  selected?: Date;
}

const DatePickerContext = createContext<DatePickerContextValue>({});

/* ───────── Root ───────── */

export interface DatePickerRootProps {
  value?: Date;
  onChange?: (date: Date) => void;
  children?: React.ReactNode;
  min?: Date;
  max?: Date;
}

const Root = forwardRef<HTMLDivElement, DatePickerRootProps>(
  ({ value, onChange, children, min, max }, ref) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<Date | undefined>(value);

    const handleSelect = useCallback(
      (date: Date) => {
        setSelected(date);
        onChange?.(date);
        setOpen(false);
      },
      [onChange],
    );

    return (
      <DatePickerContext.Provider value={{ selected }}>
        <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
          <div ref={ref} data-date-picker-root="">
            {children}
          </div>
          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Positioner className="z-[60]">
              <PopoverPrimitive.Popup className="rounded-lg border border-nb-border bg-nb-card p-4 shadow-lg outline-none">
                <CalendarRoot selected={selected} onSelect={handleSelect} min={min} max={max} />
              </PopoverPrimitive.Popup>
            </PopoverPrimitive.Positioner>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
      </DatePickerContext.Provider>
    );
  },
);
Root.displayName = 'DatePicker.Root';

/* ───────── Trigger ───────── */

export interface DatePickerTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Trigger = forwardRef<HTMLButtonElement, DatePickerTriggerProps>(
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
Trigger.displayName = 'DatePicker.Trigger';

/* ───────── Input ───────── */

export interface DatePickerInputProps extends HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
}

const Input = forwardRef<HTMLSpanElement, DatePickerInputProps>(
  ({ className, children, placeholder = 'Pick a date', ...props }, ref) => {
    const { selected } = useContext(DatePickerContext);
    return (
      <PopoverPrimitive.Trigger
        className={cn(
          'inline-flex items-center justify-between w-full h-10 rounded-md border border-nb-input bg-nb-bg px-2.5 py-1.5 text-sm ring-offset-nb-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary focus-visible:ring-offset-2',
          className,
        )}
      >
        <span ref={ref} {...props}>
          {children || (selected ? formatDate(selected) : placeholder)}
        </span>
        <CalendarBlank className="h-4 w-4 text-nb-muted-fg" aria-hidden />
      </PopoverPrimitive.Trigger>
    );
  },
);
Input.displayName = 'DatePicker.Input';

export { Root as DatePickerRoot, Trigger as DatePickerTrigger, Input as DatePickerInput };
export const DatePicker = { Root, Trigger, Input };
