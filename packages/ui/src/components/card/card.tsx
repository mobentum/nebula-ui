'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

/* ───────── Card.Root ───────── */

export interface CardRootProps extends HTMLAttributes<HTMLDivElement> {}

const Root = forwardRef<HTMLDivElement, CardRootProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border border-nb-border bg-nb-card shadow-sm',
          className,
        )}
        {...props}
      />
    );

  },
);
Root.displayName = 'Card.Root';

/* ───────── Card.Header ───────── */

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('border-b border-nb-border px-6 py-4', className)}
        {...props}
      />
    );

  },
);
Header.displayName = 'Card.Header';

/* ───────── Card.Body ───────── */

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

const Body = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('p-6', className)} {...props} />
    );

  },
);
Body.displayName = 'Card.Body';

/* ───────── Card.Footer ───────── */

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

const Footer = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('border-t border-nb-border px-6 py-4', className)}
        {...props}
      />
    );

  },
);
Footer.displayName = 'Card.Footer';

/* ───────── Compound export ───────── */

export { Root as CardRoot, Header as CardHeader, Body as CardBody, Footer as CardFooter };
export const Card = {
  Root,
  Header,
  Body,
  Footer,
};
