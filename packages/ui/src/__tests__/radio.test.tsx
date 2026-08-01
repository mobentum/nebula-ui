import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio } from '../components/radio';

beforeAll(() => {
  globalThis.PointerEvent = MouseEvent as any;
});

describe('Radio', () => {
  it('renders Radio.Group', () => {
    render(<Radio.Group data-testid="g" />);
    expect(screen.getByTestId('g')).toBeInTheDocument();
  });

  it('Radio.Group applies default classes', () => {
    render(<Radio.Group data-testid="g" />);
    expect(screen.getByTestId('g')).toHaveClass('flex', 'flex-col', 'gap-2');
  });

  it('Radio.Group combines custom className', () => {
    render(<Radio.Group data-testid="g" className="my-custom" />);
    expect(screen.getByTestId('g')).toHaveClass('my-custom');
  });

  it('renders Radio.Item', () => {
    render(
      <Radio.Group>
        <Radio.Item data-testid="i" value="a" />
      </Radio.Group>,
    );
    expect(screen.getByTestId('i')).toBeInTheDocument();
  });

  it('Radio.Item applies default classes', () => {
    render(
      <Radio.Group>
        <Radio.Item data-testid="i" value="a" />
      </Radio.Group>,
    );
    expect(screen.getByTestId('i')).toHaveClass('flex', 'items-center', 'gap-2');
  });

  it('renders Radio.Indicator', () => {
    render(
      <Radio.Group defaultValue="a">
        <Radio.Item value="a">
          <Radio.Indicator data-testid="ind" />
        </Radio.Item>
      </Radio.Group>,
    );
    expect(screen.getByTestId('ind')).toBeInTheDocument();
  });

  it('Radio.Indicator has data-checked when selected', () => {
    render(
      <Radio.Group defaultValue="a">
        <Radio.Item value="a">
          <Radio.Indicator data-testid="ind" />
        </Radio.Item>
      </Radio.Group>,
    );
    expect(screen.getByTestId('ind')).toHaveAttribute('data-checked', '');
  });

  it('Radio.Indicator applies default classes', () => {
    render(
      <Radio.Group defaultValue="a">
        <Radio.Item value="a">
          <Radio.Indicator data-testid="ind" />
        </Radio.Item>
      </Radio.Group>,
    );
    expect(screen.getByTestId('ind')).toHaveClass('h-4', 'w-4', 'rounded-full', 'border-2');
  });

  it('selects a radio option on click', async () => {
    const user = userEvent.setup();
    render(
      <Radio.Group>
        <Radio.Item value="a" />
        <Radio.Item value="b" />
      </Radio.Group>,
    );
    const radios = screen.getAllByRole('radio');
    await user.click(radios[1]);
    expect(radios[1]).toHaveAttribute('aria-checked', 'true');
  });

  it('Radio.Group forwards ref', () => {
    const ref = { current: null };
    render(<Radio.Group ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayNames', () => {
    expect(Radio.Group.displayName).toBe('Radio.Group');
    expect(Radio.Item.displayName).toBe('Radio.Item');
    expect(Radio.Indicator.displayName).toBe('Radio.Indicator');
  });
});
