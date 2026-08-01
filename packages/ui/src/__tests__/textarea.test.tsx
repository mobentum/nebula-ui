import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Textarea } from '../components/textarea';

describe('Textarea', () => {
  it('renders as textarea element', () => {
    render(<Textarea data-testid="t" />);
    expect(screen.getByTestId('t').tagName).toBe('TEXTAREA');
  });

  it('passes placeholder', () => {
    render(<Textarea data-testid="t" placeholder="Enter text" />);
    expect(screen.getByTestId('t')).toHaveAttribute('placeholder', 'Enter text');
  });

  it('applies default classes', () => {
    render(<Textarea data-testid="t" />);
    const el = screen.getByTestId('t');
    expect(el).toHaveClass('flex', 'min-h-[80px]', 'w-full', 'rounded-md', 'border', 'resize-y');
  });

  it('combines custom className', () => {
    render(<Textarea data-testid="t" className="my-custom" />);
    expect(screen.getByTestId('t')).toHaveClass('my-custom');
  });

  it('renders with given rows', () => {
    render(<Textarea data-testid="t" rows={4} />);
    expect(screen.getByTestId('t')).toHaveAttribute('rows', '4');
  });

  it('renders as disabled', () => {
    render(<Textarea data-testid="t" disabled />);
    expect(screen.getByTestId('t')).toBeDisabled();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it('has displayName', () => {
    expect(Textarea.displayName).toBe('Textarea');
  });
});
