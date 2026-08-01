import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToggleGroup } from '../components/toggle-group';

describe('ToggleGroup', () => {
  it('renders ToggleGroup.Root', () => {
    render(<ToggleGroup.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('ToggleGroup.Root applies default classes', () => {
    render(<ToggleGroup.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveClass('inline-flex', 'items-center', 'gap-0', 'ltr:-space-x-px', 'rounded-md', 'border');
  });

  it('ToggleGroup.Root combines custom className', () => {
    render(<ToggleGroup.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('renders ToggleGroup.Item', () => {
    render(
      <ToggleGroup.Root>
        <ToggleGroup.Item data-testid="i" value="a" />
      </ToggleGroup.Root>,
    );
    expect(screen.getByTestId('i')).toBeInTheDocument();
  });

  it('ToggleGroup.Item applies default classes', () => {
    render(
      <ToggleGroup.Root>
        <ToggleGroup.Item data-testid="i" value="a" />
      </ToggleGroup.Root>,
    );
    const el = screen.getByTestId('i');
    expect(el).toHaveClass('inline-flex', 'items-center', 'rounded-none', 'border', 'px-3', 'py-2', 'text-sm');
  });

  it('ToggleGroup.Item is a button', () => {
    render(
      <ToggleGroup.Root>
        <ToggleGroup.Item data-testid="i" value="a" />
      </ToggleGroup.Root>,
    );
    expect(screen.getByTestId('i').tagName).toBe('BUTTON');
  });

  it('toggles item on click', async () => {
    const user = userEvent.setup();
    render(
      <ToggleGroup.Root>
        <ToggleGroup.Item data-testid="i" value="a">Toggle</ToggleGroup.Item>
      </ToggleGroup.Root>,
    );
    const item = screen.getByTestId('i');
    expect(item).toHaveAttribute('aria-pressed', 'false');
    await user.click(item);
    expect(item).toHaveAttribute('aria-pressed', 'true');
  });

  it('ToggleGroup.Root forwards ref', () => {
    const ref = { current: null };
    render(<ToggleGroup.Root ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayNames', () => {
    expect(ToggleGroup.Root.displayName).toBe('ToggleGroup.Root');
    expect(ToggleGroup.Item.displayName).toBe('ToggleGroup.Item');
  });
});
