import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Kbd } from '../components/kbd';

describe('Kbd', () => {
  it('renders kbd with text', () => {
    render(<Kbd data-testid="k">⌘K</Kbd>);
    expect(screen.getByTestId('k')).toHaveTextContent('⌘K');
  });

  it('renders as kbd element', () => {
    render(<Kbd data-testid="k">K</Kbd>);
    expect(screen.getByTestId('k').tagName).toBe('KBD');
  });

  it('applies default classes', () => {
    render(<Kbd data-testid="k">K</Kbd>);
    expect(screen.getByTestId('k')).toHaveClass('inline-flex', 'h-5', 'rounded', 'border', 'font-mono');
  });

  it('combines custom className', () => {
    render(<Kbd data-testid="k" className="my-custom">K</Kbd>);
    expect(screen.getByTestId('k')).toHaveClass('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Kbd ref={ref}>K</Kbd>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('has displayName', () => {
    expect(Kbd.displayName).toBe('Kbd');
  });
});
