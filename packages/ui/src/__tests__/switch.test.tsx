import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from '../components/switch';

beforeAll(() => {
  globalThis.PointerEvent = MouseEvent as any;
});

describe('Switch', () => {
  it('renders Switch.Root', () => {
    render(<Switch.Root data-testid="s" />);
    expect(screen.getByTestId('s')).toBeInTheDocument();
  });

  it('renders Switch.Thumb', () => {
    render(
      <Switch.Root>
        <Switch.Thumb data-testid="t" />
      </Switch.Root>,
    );
    expect(screen.getByTestId('t')).toBeInTheDocument();
  });

  it('Switch.Root applies default classes', () => {
    render(<Switch.Root data-testid="s" />);
    expect(screen.getByTestId('s')).toHaveClass('relative', 'inline-flex', 'h-6', 'w-11', 'rounded-full');
  });

  it('Switch.Root combines custom className', () => {
    render(<Switch.Root data-testid="s" className="my-custom" />);
    expect(screen.getByTestId('s')).toHaveClass('my-custom');
  });

  it('Switch.Thumb applies default classes', () => {
    render(
      <Switch.Root>
        <Switch.Thumb data-testid="t" />
      </Switch.Root>,
    );
    expect(screen.getByTestId('t')).toHaveClass('block', 'h-5', 'w-5', 'rounded-full', 'bg-nb-bg', 'shadow-sm', 'transition-transform', 'ltr:data-checked:translate-x-[22px]');
  });

  it('Switch.Thumb combines custom className', () => {
    render(
      <Switch.Root>
        <Switch.Thumb data-testid="t" className="my-custom" />
      </Switch.Root>,
    );
    expect(screen.getByTestId('t')).toHaveClass('my-custom');
  });

  it('toggles on click', async () => {
    const user = userEvent.setup();
    render(
      <Switch.Root data-testid="s">
        <Switch.Thumb />
      </Switch.Root>,
    );
    const root = screen.getByTestId('s');
    expect(root).toHaveAttribute('data-unchecked', '');
    await user.click(root);
    expect(root).toHaveAttribute('data-checked', '');
  });

  it('Switch.Root forwards ref', () => {
    const ref = { current: null };
    render(<Switch.Root ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('Switch.Thumb forwards ref', () => {
    const ref = { current: null };
    render(
      <Switch.Root>
        <Switch.Thumb ref={ref} />
      </Switch.Root>,
    );
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('has displayNames', () => {
    expect(Switch.Root.displayName).toBe('Switch.Root');
    expect(Switch.Thumb.displayName).toBe('Switch.Thumb');
  });
});
