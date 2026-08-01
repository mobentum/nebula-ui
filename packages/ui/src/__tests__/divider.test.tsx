import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Divider } from '../components/divider';

describe('Divider', () => {
  it('renders a separator role by default', () => {
    render(<Divider.Root data-testid="r" />);
    const el = screen.getByTestId('r');
    expect(el).toHaveAttribute('role', 'separator');
    expect(el).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('renders a fallback line when no children', () => {
    render(<Divider.Root data-testid="r" />);
    expect(screen.getByTestId('r').querySelector('.h-px')).toBeTruthy();
  });

  it('renders children and hides the fallback line', () => {
    render(
      <Divider.Root data-testid="r">
        <Divider.Label>Section</Divider.Label>
      </Divider.Root>,
    );
    expect(screen.getByText('Section')).toBeInTheDocument();
    expect(screen.getByTestId('r').querySelector('.h-px')).toBeNull();
  });

  it('applies default classes', () => {
    render(<Divider.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveClass('flex', 'items-center', 'gap-3');
  });

  it('renders Divider.Line', () => {
    render(<Divider.Line data-testid="l" />);
    expect(screen.getByTestId('l')).toHaveClass('h-px', 'flex-1', 'bg-nb-border');
  });

  it('renders Divider.Label', () => {
    render(<Divider.Label data-testid="lb">Label</Divider.Label>);
    expect(screen.getByTestId('lb')).toHaveTextContent('Label');
    expect(screen.getByTestId('lb')).toHaveClass('shrink-0');
  });

  it('combines custom className', () => {
    render(<Divider.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(Divider.Root.displayName).toBe('Divider.Root');
    expect(Divider.Line.displayName).toBe('Divider.Line');
    expect(Divider.Label.displayName).toBe('Divider.Label');
  });
});
