import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NumberField } from '../components/number-field';

beforeAll(() => {
  globalThis.PointerEvent = MouseEvent as any;
});

describe('NumberField', () => {
  it('renders NumberField.Root', () => {
    render(<NumberField.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('NumberField.Root applies default classes', () => {
    render(<NumberField.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveClass('flex', 'items-center', 'gap-1');
  });

  it('renders NumberField.Input', () => {
    render(
      <NumberField.Root>
        <NumberField.Input data-testid="i" />
      </NumberField.Root>,
    );
    expect(screen.getByTestId('i')).toBeInTheDocument();
  });

  it('NumberField.Input is an input element', () => {
    render(
      <NumberField.Root>
        <NumberField.Input data-testid="i" />
      </NumberField.Root>,
    );
    expect(screen.getByTestId('i').tagName).toBe('INPUT');
  });

  it('NumberField.Input applies default classes', () => {
    render(
      <NumberField.Root>
        <NumberField.Input data-testid="i" />
      </NumberField.Root>,
    );
    expect(screen.getByTestId('i')).toHaveClass('flex', 'h-10', 'w-full', 'rounded-md', 'border');
  });

  it('renders NumberField.Decrement', () => {
    render(
      <NumberField.Root>
        <NumberField.Decrement data-testid="d" />
      </NumberField.Root>,
    );
    expect(screen.getByTestId('d')).toBeInTheDocument();
  });

  it('NumberField.Decrement is a button', () => {
    render(
      <NumberField.Root>
        <NumberField.Decrement data-testid="d" />
      </NumberField.Root>,
    );
    expect(screen.getByTestId('d').tagName).toBe('BUTTON');
  });

  it('NumberField.Decrement applies default classes', () => {
    render(
      <NumberField.Root>
        <NumberField.Decrement data-testid="d" />
      </NumberField.Root>,
    );
    expect(screen.getByTestId('d')).toHaveClass('h-8', 'w-8', 'rounded-md', 'border');
  });

  it('renders NumberField.Increment', () => {
    render(
      <NumberField.Root>
        <NumberField.Increment data-testid="inc" />
      </NumberField.Root>,
    );
    expect(screen.getByTestId('inc')).toBeInTheDocument();
  });

  it('NumberField.Increment is a button', () => {
    render(
      <NumberField.Root>
        <NumberField.Increment data-testid="inc" />
      </NumberField.Root>,
    );
    expect(screen.getByTestId('inc').tagName).toBe('BUTTON');
  });

  it('increments value on click', async () => {
    const user = userEvent.setup();
    render(
      <NumberField.Root defaultValue={5}>
        <NumberField.Input data-testid="i" />
        <NumberField.Increment />
      </NumberField.Root>,
    );
    const input = screen.getByTestId('i') as HTMLInputElement;
    expect(input.value).toBe('5');
    await user.click(screen.getByRole('button', { name: 'Increase value' }));
    expect(input.value).toBe('6');
  });

  it('decrements value on click', async () => {
    const user = userEvent.setup();
    render(
      <NumberField.Root defaultValue={5}>
        <NumberField.Input data-testid="i" />
        <NumberField.Decrement />
        <NumberField.Increment />
      </NumberField.Root>,
    );
    const input = screen.getByTestId('i') as HTMLInputElement;
    expect(input.value).toBe('5');
    await user.click(screen.getByRole('button', { name: 'Decrease value' }));
    expect(input.value).toBe('4');
  });

  it('renders NumberField.ScrubArea', () => {
    render(
      <NumberField.Root>
        <NumberField.ScrubArea data-testid="sa" />
      </NumberField.Root>,
    );
    expect(screen.getByTestId('sa')).toBeInTheDocument();
  });

  it('NumberField.ScrubArea applies default classes', () => {
    render(
      <NumberField.Root>
        <NumberField.ScrubArea data-testid="sa" />
      </NumberField.Root>,
    );
    expect(screen.getByTestId('sa')).toHaveClass('cursor-ew-resize');
  });

  it('NumberField.Root combines custom className', () => {
    render(<NumberField.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('NumberField.Input forwards ref', () => {
    const ref = { current: null };
    render(
      <NumberField.Root>
        <NumberField.Input ref={ref} />
      </NumberField.Root>,
    );
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('has displayNames', () => {
    expect(NumberField.Root.displayName).toBe('NumberField.Root');
    expect(NumberField.Input.displayName).toBe('NumberField.Input');
    expect(NumberField.Decrement.displayName).toBe('NumberField.Decrement');
    expect(NumberField.Increment.displayName).toBe('NumberField.Increment');
    expect(NumberField.ScrubArea.displayName).toBe('NumberField.ScrubArea');
  });
});
