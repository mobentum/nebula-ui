import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Heading } from '../components/typography';

describe('Heading', () => {
  it('renders with children', () => {
    render(<Heading>Hello World</Heading>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders h2 by default', () => {
    render(<Heading data-testid="h">Hello</Heading>);
    expect(screen.getByTestId('h').tagName).toBe('H2');
  });

  it('renders the specified heading level', () => {
    render(<Heading data-testid="h" as="h1">Hello</Heading>);
    expect(screen.getByTestId('h').tagName).toBe('H1');
  });

  it('renders h6 with as="h6"', () => {
    render(<Heading data-testid="h" as="h6">Hello</Heading>);
    expect(screen.getByTestId('h').tagName).toBe('H6');
  });

  it('applies default weight class', () => {
    render(<Heading data-testid="h">Hello</Heading>);
    expect(screen.getByTestId('h')).toHaveClass('font-semibold');
  });

  it('applies weight variant', () => {
    render(<Heading data-testid="h" weight="bold">Hello</Heading>);
    expect(screen.getByTestId('h')).toHaveClass('font-bold');
  });

  it('applies align variant', () => {
    render(<Heading data-testid="h" align="center">Hello</Heading>);
    expect(screen.getByTestId('h')).toHaveClass('text-center');
  });

  it('applies truncate class', () => {
    render(<Heading data-testid="h" truncate>Hello</Heading>);
    expect(screen.getByTestId('h')).toHaveClass('truncate');
  });

  it('applies default tracking-tight', () => {
    render(<Heading data-testid="h">Hello</Heading>);
    expect(screen.getByTestId('h')).toHaveClass('tracking-tight');
  });

  it('combines custom className', () => {
    render(<Heading data-testid="h" className="my-custom">Hello</Heading>);
    expect(screen.getByTestId('h')).toHaveClass('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Heading ref={ref}>Hello</Heading>);
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
  });

  it('has displayName', () => {
    expect(Heading.displayName).toBe('Heading');
  });
});
