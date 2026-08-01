import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../components/checkbox';

beforeAll(() => {
  globalThis.PointerEvent = MouseEvent as any;
});

describe('Checkbox', () => {
  it('renders Checkbox.Root', () => {
    render(<Checkbox.Root data-testid="c" />);
    expect(screen.getByTestId('c')).toBeInTheDocument();
  });

  it('renders Checkbox.Indicator', () => {
    render(
      <Checkbox.Root defaultChecked>
        <Checkbox.Indicator data-testid="i" />
      </Checkbox.Root>,
    );
    expect(screen.getByTestId('i')).toBeInTheDocument();
  });

  it('Checkbox.Root applies default classes', () => {
    render(<Checkbox.Root data-testid="c" />);
    expect(screen.getByTestId('c')).toHaveClass('flex', 'h-5', 'w-5', 'rounded', 'border');
  });

  it('Checkbox.Root combines custom className', () => {
    render(<Checkbox.Root data-testid="c" className="my-custom" />);
    expect(screen.getByTestId('c')).toHaveClass('my-custom');
  });

  it('Checkbox.Indicator renders svg', () => {
    render(
      <Checkbox.Root defaultChecked>
        <Checkbox.Indicator data-testid="i" />
      </Checkbox.Root>,
    );
    const indicator = screen.getByTestId('i');
    expect(indicator.querySelector('svg')).toBeTruthy();
  });

  it('toggles on click', async () => {
    const user = userEvent.setup();
    render(<Checkbox.Root data-testid="c" />);
    const root = screen.getByTestId('c');
    expect(root).toHaveAttribute('data-unchecked', '');
    await user.click(root);
    expect(root).toHaveAttribute('data-checked', '');
  });

  it('Checkbox.Root forwards ref', () => {
    const ref = { current: null };
    render(<Checkbox.Root ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('Checkbox.Root applies class for disabled state', () => {
    render(<Checkbox.Root data-testid="c" disabled />);
    expect(screen.getByTestId('c')).toHaveClass('data-disabled:cursor-not-allowed', 'data-disabled:opacity-50');
  });

  it('renders Checkbox.Label', () => {
    render(<Checkbox.Label data-testid="l" />);
    expect(screen.getByTestId('l')).toBeInTheDocument();
  });

  it('Checkbox.Label is a label element', () => {
    render(<Checkbox.Label data-testid="l" />);
    expect(screen.getByTestId('l').tagName).toBe('LABEL');
  });

  it('Checkbox.Label applies flex alignment classes', () => {
    render(<Checkbox.Label data-testid="l" />);
    expect(screen.getByTestId('l')).toHaveClass('flex', 'items-center', 'gap-2');
  });

  it('Checkbox.Label combines custom className', () => {
    render(<Checkbox.Label data-testid="l" className="my-custom" />);
    expect(screen.getByTestId('l')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(Checkbox.Root.displayName).toBe('Checkbox.Root');
    expect(Checkbox.Indicator.displayName).toBe('Checkbox.Indicator');
    expect(Checkbox.Label.displayName).toBe('Checkbox.Label');
  });
});
