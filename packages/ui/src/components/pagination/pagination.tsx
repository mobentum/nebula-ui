'use client';

import { forwardRef, type ComponentProps } from 'react';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLElement, ComponentProps<'nav'>>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn('mx-auto flex w-full justify-center', className)}
      aria-label="pagination"
      {...props}
    />
  ),
);

Root.displayName = 'Pagination.Root';

const List = forwardRef<HTMLUListElement, ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  ),
);

List.displayName = 'Pagination.List';

const Item = forwardRef<HTMLLIElement, ComponentProps<'li'>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn('', className)} {...props} />
  ),
);

Item.displayName = 'Pagination.Item';

const Previous = forwardRef<HTMLButtonElement, ComponentProps<'button'>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex h-9 items-center justify-center gap-1 rounded-md px-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary hover:bg-nb-accent hover:text-nb-accent-fg disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  ),
);

Previous.displayName = 'Pagination.Previous';

const Next = forwardRef<HTMLButtonElement, ComponentProps<'button'>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex h-9 items-center justify-center gap-1 rounded-md px-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nb-primary hover:bg-nb-accent hover:text-nb-accent-fg disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  ),
);

Next.displayName = 'Pagination.Next';

const Page = forwardRef<HTMLButtonElement, ComponentProps<'button'>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-nb-accent hover:text-nb-accent-fg aria-current:bg-nb-accent aria-current:text-nb-accent-fg disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  ),
);

Page.displayName = 'Pagination.Page';

const Ellipsis = forwardRef<HTMLSpanElement, ComponentProps<'span'>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('flex h-9 w-9 items-center justify-center text-sm', className)}
      {...props}
    >
      ...
    </span>
  ),
);

Ellipsis.displayName = 'Pagination.Ellipsis';

export { Root as PaginationRoot, List as PaginationList, Item as PaginationItem, Previous as PaginationPrevious, Next as PaginationNext, Page as PaginationPage, Ellipsis as PaginationEllipsis };
export const Pagination = { Root, List, Item, Previous, Next, Page, Ellipsis };
export type PaginationRootProps = ComponentProps<'nav'>;
export type PaginationListProps = ComponentProps<'ul'>;
export type PaginationItemProps = ComponentProps<'li'>;
export type PaginationPreviousProps = ComponentProps<'button'>;
export type PaginationNextProps = ComponentProps<'button'>;
export type PaginationPageProps = ComponentProps<'button'>;
export type PaginationEllipsisProps = ComponentProps<'span'>;
