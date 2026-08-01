'use client';

import { forwardRef, type ComponentProps } from 'react';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLTableElement, ComponentProps<'table'>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  ),
);

Root.displayName = 'Table.Root';

const Header = forwardRef<HTMLTableSectionElement, ComponentProps<'thead'>>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
  ),
);

Header.displayName = 'Table.Header';

const Body = forwardRef<HTMLTableSectionElement, ComponentProps<'tbody'>>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  ),
);

Body.displayName = 'Table.Body';

const Row = forwardRef<HTMLTableRowElement, ComponentProps<'tr'>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        'border-b border-nb-border transition-colors hover:bg-nb-muted/50 data-selected:bg-nb-muted',
        className,
      )}
      {...props}
    />
  ),
);

Row.displayName = 'Table.Row';

const Head = forwardRef<HTMLTableCellElement, ComponentProps<'th'>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        'h-12 px-4 text-left align-middle font-medium text-nb-muted-fg [&:has([role=checkbox])]:pr-0',
        className,
      )}
      {...props}
    />
  ),
);

Head.displayName = 'Table.Head';

const Cell = forwardRef<HTMLTableCellElement, ComponentProps<'td'>>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn(
        'p-4 align-middle [&:has([role=checkbox])]:pr-0',
        className,
      )}
      {...props}
    />
  ),
);

Cell.displayName = 'Table.Cell';

const Caption = forwardRef<HTMLTableCaptionElement, ComponentProps<'caption'>>(
  ({ className, ...props }, ref) => (
    <caption
      ref={ref}
      className={cn('mt-4 text-sm text-nb-muted-fg', className)}
      {...props}
    />
  ),
);

Caption.displayName = 'Table.Caption';

export { Root as TableRoot, Header as TableHeader, Body as TableBody, Row as TableRow, Head as TableHead, Cell as TableCell, Caption as TableCaption };
export const Table = { Root, Header, Body, Row, Head, Cell, Caption };
export type TableRootProps = ComponentProps<'table'>;
export type TableHeaderProps = ComponentProps<'thead'>;
export type TableBodyProps = ComponentProps<'tbody'>;
export type TableRowProps = ComponentProps<'tr'>;
export type TableHeadProps = ComponentProps<'th'>;
export type TableCellProps = ComponentProps<'td'>;
export type TableCaptionProps = ComponentProps<'caption'>;
