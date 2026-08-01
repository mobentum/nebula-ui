import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SelectNative } from '../components/select-native';

describe('SelectNative', () => {
  it('renders a select element', () => {
    render(
      <SelectNative data-testid="s">
        <option value="a">A</option>
        <option value="b">B</option>
      </SelectNative>,
    );
    const el = screen.getByTestId('s');
    expect(el.tagName).toBe('SELECT');
    expect(screen.getByRole('option', { name: 'A' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'B' })).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<SelectNative data-testid="s" />);
    expect(screen.getByTestId('s')).toHaveClass('flex', 'h-10', 'w-full', 'rounded-md', 'border', 'border-nb-input', 'bg-nb-bg', 'px-2.5', 'py-1.5', 'text-sm');
  });

  it('passes through native select props', () => {
    render(
      <SelectNative data-testid="s" disabled defaultValue="b">
        <option value="a">A</option>
        <option value="b">B</option>
      </SelectNative>,
    );
    expect(screen.getByTestId('s')).toBeDisabled();
    expect(screen.getByTestId('s')).toHaveValue('b');
  });

  it('combines custom className', () => {
    render(<SelectNative data-testid="s" className="my-custom" />);
    expect(screen.getByTestId('s')).toHaveClass('my-custom');
  });

  it('has displayName', () => {
    expect(SelectNative.displayName).toBe('SelectNative');
  });
});
