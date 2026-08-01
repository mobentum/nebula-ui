'use client';

import { forwardRef, type ComponentProps } from 'react';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLElement, ComponentProps<'nav'>>(
  ({ className, ...props }, ref) => (
    <nav ref={ref} className={cn('', className)} aria-label="breadcrumb" {...props} />
  ),
);

Root.displayName = 'Breadcrumb.Root';

const List = forwardRef<HTMLOListElement, ComponentProps<'ol'>>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        'flex flex-wrap items-center gap-1.5 break-words text-sm text-nb-muted-fg',
        className,
      )}
      {...props}
    />
  ),
);

List.displayName = 'Breadcrumb.List';

const Item = forwardRef<HTMLLIElement, ComponentProps<'li'>>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  ),
);

Item.displayName = 'Breadcrumb.Item';

const Link = forwardRef<HTMLAnchorElement, ComponentProps<'a'>>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        'transition-colors hover:text-nb-fg',
        className,
      )}
      {...props}
    />
  ),
);

Link.displayName = 'Breadcrumb.Link';

const Separator = forwardRef<HTMLSpanElement, ComponentProps<'span'>>(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('text-nb-muted-fg', className)}
      role="presentation"
      aria-hidden="true"
      {...props}
    >
      {children ?? '/'}
    </span>
  ),
);

Separator.displayName = 'Breadcrumb.Separator';

const Page = forwardRef<HTMLSpanElement, ComponentProps<'span'>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('font-medium text-nb-fg', className)}
      aria-current="page"
      {...props}
    />
  ),
);

Page.displayName = 'Breadcrumb.Page';

export { Root as BreadcrumbRoot, List as BreadcrumbList, Item as BreadcrumbItem, Link as BreadcrumbLink, Separator as BreadcrumbSeparator, Page as BreadcrumbPage };
export const Breadcrumb = { Root, List, Item, Link, Separator, Page };
export type BreadcrumbRootProps = ComponentProps<'nav'>;
export type BreadcrumbListProps = ComponentProps<'ol'>;
export type BreadcrumbItemProps = ComponentProps<'li'>;
export type BreadcrumbLinkProps = ComponentProps<'a'>;
export type BreadcrumbSeparatorProps = ComponentProps<'span'>;
export type BreadcrumbPageProps = ComponentProps<'span'>;
