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

/* ───────── Card.Title ───────── */

export interface CardTitleProps extends HTMLAttributes<HTMLDivElement> {}

const Title = forwardRef<HTMLDivElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('font-semibold leading-none tracking-tight', className)}
        {...props}
      />
    );

  },
);
Title.displayName = 'Card.Title';

/* ───────── Card.Description ───────── */

export interface CardDescriptionProps extends HTMLAttributes<HTMLDivElement> {}

const Description = forwardRef<HTMLDivElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('text-sm text-nb-muted-fg', className)}
        {...props}
      />
    );

  },
);
Description.displayName = 'Card.Description';

/* ───────── Card.Content ───────── */

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

const Content = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('p-6 pt-0', className)}
        {...props}
      />
    );

  },
);
Content.displayName = 'Card.Content';

/* ───────── Compound export ───────── */

export { Root as CardRoot, Header as CardHeader, Body as CardBody, Footer as CardFooter, Title as CardTitle, Description as CardDescription, Content as CardContent };
export const Card = {
  Root,
  Header,
  Body,
  Footer,
  Title,
  Description,
  Content,
};
