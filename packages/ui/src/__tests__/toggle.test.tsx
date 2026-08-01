import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toggle } from '../components/toggle';

describe('Toggle', () => {
  it('renders a button', () => {
    render(<Toggle data-testid="t">Mute</Toggle>);
    const el = screen.getByTestId('t');
    expect(el.tagName).toBe('BUTTON');
    expect(el).toHaveTextContent('Mute');
  });

  it('applies default variant and size', () => {
    render(<Toggle data-testid="t">Mute</Toggle>);
    expect(screen.getByTestId('t')).toHaveClass('border', 'border-nb-input', 'bg-nb-bg', 'h-10', 'px-4', 'text-sm');
  });

  it('applies solid variant', () => {
    render(<Toggle data-testid="t" variant="solid">Mute</Toggle>);
    expect(screen.getByTestId('t')).toHaveClass('bg-nb-primary', 'text-nb-primary-fg');
  });

  it('applies ghost variant', () => {
    render(<Toggle data-testid="t" variant="ghost">Mute</Toggle>);
    expect(screen.getByTestId('t')).toHaveClass('hover:bg-nb-accent');
  });

  it('applies size classes', () => {
    render(<Toggle data-testid="t" size="sm">Mute</Toggle>);
    expect(screen.getByTestId('t')).toHaveClass('h-8', 'px-3', 'text-xs');
  });

  it('toggles pressed state on click', async () => {
    const user = userEvent.setup();
    render(<Toggle data-testid="t">Mute</Toggle>);
    const el = screen.getByTestId('t');
    expect(el).not.toHaveAttribute('data-pressed');
    await user.click(el);
    expect(el).toHaveAttribute('data-pressed');
    await user.click(el);
    expect(el).not.toHaveAttribute('data-pressed');
  });

  it('combines custom className', () => {
    render(<Toggle data-testid="t" className="my-custom">Mute</Toggle>);
    expect(screen.getByTestId('t')).toHaveClass('my-custom');
  });

  it('has displayName', () => {
    expect(Toggle.displayName).toBe('Toggle');
  });
});
