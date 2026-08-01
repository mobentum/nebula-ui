import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { OTPField } from '../components/otp-field';

describe('OTPField', () => {
  it('renders OTPField.Root', () => {
    render(<OTPField.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('OTPField.Root applies default classes', () => {
    render(<OTPField.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveClass('flex', 'items-center', 'gap-2');
  });

  it('renders OTPField.Group', () => {
    render(
      <OTPField.Root>
        <OTPField.Group data-testid="g" />
      </OTPField.Root>,
    );
    expect(screen.getByTestId('g')).toBeInTheDocument();
  });

  it('OTPField.Group applies default classes', () => {
    render(
      <OTPField.Root>
        <OTPField.Group data-testid="g" />
      </OTPField.Root>,
    );
    expect(screen.getByTestId('g')).toHaveClass('flex', 'items-center', 'gap-2');
  });

  it('renders OTPField.Slot as input', () => {
    render(
      <OTPField.Root>
        <OTPField.Group>
          <OTPField.Slot data-testid="s" index={0} />
        </OTPField.Group>
      </OTPField.Root>,
    );
    expect(screen.getByTestId('s').tagName).toBe('INPUT');
  });

  it('OTPField.Slot has type text', () => {
    render(
      <OTPField.Root>
        <OTPField.Group>
          <OTPField.Slot data-testid="s" index={0} />
        </OTPField.Group>
      </OTPField.Root>,
    );
    expect(screen.getByTestId('s')).toHaveAttribute('type', 'text');
  });

  it('renders OTPField.Separator', () => {
    render(
      <OTPField.Root>
        <OTPField.Group>
          <OTPField.Slot index={0} />
          <OTPField.Separator data-testid="sep" />
          <OTPField.Slot index={1} />
        </OTPField.Group>
      </OTPField.Root>,
    );
    expect(screen.getByTestId('sep')).toBeInTheDocument();
  });

  it('OTPField.Separator is a span', () => {
    render(
      <OTPField.Root>
        <OTPField.Group>
          <OTPField.Slot index={0} />
          <OTPField.Separator data-testid="sep" />
          <OTPField.Slot index={1} />
        </OTPField.Group>
      </OTPField.Root>,
    );
    expect(screen.getByTestId('sep').tagName).toBe('SPAN');
  });

  it('OTPField.Separator applies default classes', () => {
    render(
      <OTPField.Root>
        <OTPField.Group>
          <OTPField.Slot index={0} />
          <OTPField.Separator data-testid="sep" />
          <OTPField.Slot index={1} />
        </OTPField.Group>
      </OTPField.Root>,
    );
    expect(screen.getByTestId('sep')).toHaveClass('text-nb-muted-fg');
  });

  it('OTPField.Root combines custom className', () => {
    render(<OTPField.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('OTPField.Root forwards ref', () => {
    const ref = { current: null };
    render(<OTPField.Root ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayNames', () => {
    expect(OTPField.Root.displayName).toBe('OTPField.Root');
    expect(OTPField.Group.displayName).toBe('OTPField.Group');
    expect(OTPField.Slot.displayName).toBe('OTPField.Slot');
    expect(OTPField.Separator.displayName).toBe('OTPField.Separator');
  });
});
