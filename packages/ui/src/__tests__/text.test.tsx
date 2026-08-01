import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Text } from '../components/typography';

describe('Text', () => {
  it('renders with children', () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders as p by default', () => {
    render(<Text data-testid="t">Hello</Text>);
    expect(screen.getByTestId('t').tagName).toBe('P');
  });

  it('renders as span when specified', () => {
    render(<Text data-testid="t" as="span">Hello</Text>);
    expect(screen.getByTestId('t').tagName).toBe('SPAN');
  });

  it('renders as div when specified', () => {
    render(<Text data-testid="t" as="div">Hello</Text>);
    expect(screen.getByTestId('t').tagName).toBe('DIV');
  });

  it('renders as label when specified', () => {
    render(<Text data-testid="t" as="label">Hello</Text>);
    expect(screen.getByTestId('t').tagName).toBe('LABEL');
  });

  it('applies size variant', () => {
    render(<Text data-testid="t" size="sm">Hello</Text>);
    expect(screen.getByTestId('t')).toHaveClass('text-sm');
  });

  it('applies weight variant', () => {
    render(<Text data-testid="t" weight="bold">Hello</Text>);
    expect(screen.getByTestId('t')).toHaveClass('font-bold');
  });

  it('applies align variant', () => {
    render(<Text data-testid="t" align="center">Hello</Text>);
    expect(screen.getByTestId('t')).toHaveClass('text-center');
  });

  it('applies truncate class', () => {
    render(<Text data-testid="t" truncate>Hello</Text>);
    expect(screen.getByTestId('t')).toHaveClass('truncate');
  });

  it('applies muted class', () => {
    render(<Text data-testid="t" muted>Hello</Text>);
    expect(screen.getByTestId('t')).toHaveClass('text-nb-muted-fg');
  });

  it('applies subtle class', () => {
    render(<Text data-testid="t" subtle>Hello</Text>);
    expect(screen.getByTestId('t')).toHaveClass('text-nb-muted-fg/80');
  });

  it('applies inverse class', () => {
    render(<Text data-testid="t" inverse>Hello</Text>);
    expect(screen.getByTestId('t')).toHaveClass('text-nb-primary-fg');
  });

  it('combines custom className', () => {
    render(<Text data-testid="t" className="my-custom">Hello</Text>);
    expect(screen.getByTestId('t')).toHaveClass('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Text ref={ref}>Hello</Text>);
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
  });

  it('forwards ref with span', () => {
    const ref = { current: null };
    render(<Text ref={ref} as="span">Hello</Text>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('has displayName', () => {
    expect(Text.displayName).toBe('Text');
  });
});
