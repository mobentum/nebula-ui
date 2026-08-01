import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Combobox } from '../components/combobox';

beforeAll(() => {
  globalThis.PointerEvent = MouseEvent as any;
});

describe('Combobox', () => {
  it('renders Combobox.Input', () => {
    render(
      <Combobox.Root>
        <Combobox.Input data-testid="i" />
      </Combobox.Root>,
    );
    expect(screen.getByTestId('i')).toBeInTheDocument();
  });

  it('Combobox.Input is an input element', () => {
    render(
      <Combobox.Root>
        <Combobox.Input data-testid="i" />
      </Combobox.Root>,
    );
    expect(screen.getByTestId('i').tagName).toBe('INPUT');
  });

  it('Combobox.Input applies default classes', () => {
    render(
      <Combobox.Root>
        <Combobox.Input data-testid="i" />
      </Combobox.Root>,
    );
    expect(screen.getByTestId('i')).toHaveClass('flex', 'h-10', 'w-full', 'rounded-md', 'border');
  });

  it('Combobox.Input combines custom className', () => {
    render(
      <Combobox.Root>
        <Combobox.Input data-testid="i" className="my-custom" />
      </Combobox.Root>,
    );
    expect(screen.getByTestId('i')).toHaveClass('my-custom');
  });

  it('Combobox.Input forwards ref', () => {
    const ref = { current: null };
    render(
      <Combobox.Root>
        <Combobox.Input ref={ref} />
      </Combobox.Root>,
    );
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('has displayNames', () => {
    expect(Combobox.Input.displayName).toBe('Combobox.Input');
    expect(Combobox.Popup.displayName).toBe('Combobox.Popup');
    expect(Combobox.Item.displayName).toBe('Combobox.Item');
    expect(Combobox.Positioner.displayName).toBe('Combobox.Positioner');
    expect(Combobox.Portal.displayName).toBe('Combobox.Portal');
  });
});
