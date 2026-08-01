import type { ReactNode } from 'react';

export type AsChildProps = {
  asChild?: boolean;
};

export type PolymorphicProps<E extends React.ElementType = 'div'> = {
  as?: E;
} & React.ComponentPropsWithoutRef<E>;

export type WithChildren<T = Record<string, never>> = T & {
  children?: ReactNode;
};

export type WithClassName<T = Record<string, never>> = T & {
  className?: string;
};
