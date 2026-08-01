import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioCardGroup } from '../components/radio-card-group';

beforeAll(() => {
  globalThis.PointerEvent = MouseEvent as any;
});

describe('RadioCardGroup', () => {
  it('renders RadioCardGroup.Group', () => {
    render(<RadioCardGroup.Group data-testid="g" />);
    expect(screen.getByTestId('g')).toBeInTheDocument();
  });

  it('RadioCardGroup.Group applies default classes', () => {
    render(<RadioCardGroup.Group data-testid="g" />);
    expect(screen.getByTestId('g')).toHaveClass('grid', 'grid-cols-1', 'gap-3');
  });

  it('renders RadioCardGroup.Item', () => {
    render(
      <RadioCardGroup.Group>
        <RadioCardGroup.Item data-testid="i" value="a" />
      </RadioCardGroup.Group>,
    );
    expect(screen.getByTestId('i')).toBeInTheDocument();
  });

  it('RadioCardGroup.Item applies default classes', () => {
    render(
      <RadioCardGroup.Group>
        <RadioCardGroup.Item data-testid="i" value="a" />
      </RadioCardGroup.Group>,
    );
    expect(screen.getByTestId('i')).toHaveClass('rounded-lg', 'border', 'border-nb-border', 'bg-nb-bg', 'p-4', 'cursor-pointer');
  });

  it('checks the item with the default value', () => {
    render(
      <RadioCardGroup.Group defaultValue="a">
        <RadioCardGroup.Item data-testid="a" value="a" />
        <RadioCardGroup.Item data-testid="b" value="b" />
      </RadioCardGroup.Group>,
    );
    expect(screen.getByTestId('a')).toHaveAttribute('data-checked', '');
    expect(screen.getByTestId('b')).not.toHaveAttribute('data-checked');
  });

  it('switches selection on click', async () => {
    const user = userEvent.setup();
    render(
      <RadioCardGroup.Group defaultValue="a">
        <RadioCardGroup.Item data-testid="a" value="a" />
        <RadioCardGroup.Item data-testid="b" value="b" />
      </RadioCardGroup.Group>,
    );
    await user.click(screen.getByTestId('b'));
    expect(screen.getByTestId('a')).not.toHaveAttribute('data-checked');
    expect(screen.getByTestId('b')).toHaveAttribute('data-checked', '');
  });

  it('renders RadioCardGroup.Indicator', () => {
    render(
      <RadioCardGroup.Group defaultValue="a">
        <RadioCardGroup.Item value="a">
          <RadioCardGroup.Indicator data-testid="ind" />
        </RadioCardGroup.Item>
      </RadioCardGroup.Group>,
    );
    expect(screen.getByTestId('ind')).toBeInTheDocument();
  });

  it('renders RadioCardGroup.Label', () => {
    render(<RadioCardGroup.Label data-testid="l">Standard</RadioCardGroup.Label>);
    expect(screen.getByTestId('l')).toHaveTextContent('Standard');
    expect(screen.getByTestId('l')).toHaveClass('font-medium');
  });

  it('renders RadioCardGroup.Description', () => {
    render(<RadioCardGroup.Description data-testid="d">Sub text</RadioCardGroup.Description>);
    expect(screen.getByTestId('d')).toHaveTextContent('Sub text');
    expect(screen.getByTestId('d')).toHaveClass('text-sm', 'text-nb-muted-foreground');
  });

  it('combines custom className', () => {
    render(<RadioCardGroup.Group data-testid="g" className="my-custom" />);
    expect(screen.getByTestId('g')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(RadioCardGroup.Group.displayName).toBe('RadioCardGroup.Group');
    expect(RadioCardGroup.Item.displayName).toBe('RadioCardGroup.Item');
    expect(RadioCardGroup.Indicator.displayName).toBe('RadioCardGroup.Indicator');
    expect(RadioCardGroup.Label.displayName).toBe('RadioCardGroup.Label');
    expect(RadioCardGroup.Description.displayName).toBe('RadioCardGroup.Description');
  });
});
