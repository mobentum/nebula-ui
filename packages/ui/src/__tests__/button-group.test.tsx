import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ButtonGroup } from '../components/button-group';

describe('ButtonGroup', () => {
  it('renders ButtonGroup.Root', () => {
    render(<ButtonGroup.Root data-testid="bg" />);
    expect(screen.getByTestId('bg')).toBeInTheDocument();
  });

  it('renders as div', () => {
    render(<ButtonGroup.Root data-testid="bg" />);
    expect(screen.getByTestId('bg').tagName).toBe('DIV');
  });

  it('applies default classes', () => {
    render(<ButtonGroup.Root data-testid="bg" />);
    expect(screen.getByTestId('bg')).toHaveClass('inline-flex', 'items-center', 'rounded-md');
  });

  it('combines custom className', () => {
    render(<ButtonGroup.Root data-testid="bg" className="my-custom" />);
    expect(screen.getByTestId('bg')).toHaveClass('my-custom');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<ButtonGroup.Root ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayName', () => {
    expect(ButtonGroup.Root.displayName).toBe('ButtonGroup.Root');
  });
});
