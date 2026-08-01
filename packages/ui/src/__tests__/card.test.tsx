import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '../components/card';

describe('Card', () => {
  it('renders Card.Root with children', () => {
    render(<Card.Root data-testid="c">Content</Card.Root>);
    const el = screen.getByTestId('c');
    expect(el).toHaveTextContent('Content');
    expect(el.tagName).toBe('DIV');
  });

  it('Card.Root applies default classes', () => {
    render(<Card.Root data-testid="c">Content</Card.Root>);
    expect(screen.getByTestId('c')).toHaveClass('rounded-xl', 'border', 'border-nb-border', 'bg-nb-card', 'shadow-sm');
  });

  it('Card.Root combines custom className', () => {
    render(<Card.Root data-testid="c" className="my-custom">Content</Card.Root>);
    expect(screen.getByTestId('c')).toHaveClass('my-custom');
  });

  it('Card.Root forwards ref', () => {
    const ref = { current: null };
    render(<Card.Root ref={ref}>Content</Card.Root>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('Card.Root has displayName', () => {
    expect(Card.Root.displayName).toBe('Card.Root');
  });

  it('renders Card.Header', () => {
    render(<Card.Header data-testid="h">Header</Card.Header>);
    expect(screen.getByTestId('h')).toHaveTextContent('Header');
    expect(screen.getByTestId('h')).toHaveClass('border-b', 'px-6', 'py-4');
  });

  it('Card.Header forwards ref', () => {
    const ref = { current: null };
    render(<Card.Header ref={ref}>Header</Card.Header>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('Card.Header has displayName', () => {
    expect(Card.Header.displayName).toBe('Card.Header');
  });

  it('renders Card.Body', () => {
    render(<Card.Body data-testid="b">Body</Card.Body>);
    expect(screen.getByTestId('b')).toHaveTextContent('Body');
    expect(screen.getByTestId('b')).toHaveClass('p-6');
  });

  it('Card.Body forwards ref', () => {
    const ref = { current: null };
    render(<Card.Body ref={ref}>Body</Card.Body>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('Card.Body has displayName', () => {
    expect(Card.Body.displayName).toBe('Card.Body');
  });

  it('renders Card.Footer', () => {
    render(<Card.Footer data-testid="f">Footer</Card.Footer>);
    expect(screen.getByTestId('f')).toHaveTextContent('Footer');
    expect(screen.getByTestId('f')).toHaveClass('border-t', 'px-6', 'py-4');
  });

  it('Card.Footer forwards ref', () => {
    const ref = { current: null };
    render(<Card.Footer ref={ref}>Footer</Card.Footer>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('Card.Footer has displayName', () => {
    expect(Card.Footer.displayName).toBe('Card.Footer');
  });

  it('renders full card composition', () => {
    render(
      <Card.Root>
        <Card.Header>Header</Card.Header>
        <Card.Body>Body</Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card.Root>,
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
