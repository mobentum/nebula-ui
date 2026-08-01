import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Callout } from '../components/callout';

describe('Callout', () => {
  it('renders Callout.Root', () => {
    render(<Callout.Root data-testid="r">Content</Callout.Root>);
    expect(screen.getByTestId('r')).toHaveTextContent('Content');
  });

  it('applies default classes', () => {
    render(<Callout.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveClass('relative', 'flex', 'gap-3', 'rounded-lg', 'border', 'p-4', 'text-sm');
  });

  it('applies info variant by default', () => {
    render(<Callout.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveClass('border-nb-info/30', 'bg-nb-info/10');
  });

  it('applies success variant', () => {
    render(<Callout.Root data-testid="r" variant="success" />);
    expect(screen.getByTestId('r')).toHaveClass('border-nb-success/30', 'bg-nb-success/10');
  });

  it('applies warning variant', () => {
    render(<Callout.Root data-testid="r" variant="warning" />);
    expect(screen.getByTestId('r')).toHaveClass('border-nb-warning/30', 'bg-nb-warning/10');
  });

  it('applies error variant', () => {
    render(<Callout.Root data-testid="r" variant="error" />);
    expect(screen.getByTestId('r')).toHaveClass('border-nb-destructive/30', 'bg-nb-destructive/10');
  });

  it('renders Callout.Icon', () => {
    render(<Callout.Icon data-testid="i" />);
    expect(screen.getByTestId('i')).toHaveClass('mt-0.5', 'shrink-0');
  });

  it('renders Callout.Content', () => {
    render(<Callout.Content data-testid="c" />);
    expect(screen.getByTestId('c')).toHaveClass('flex-1', 'space-y-1');
  });

  it('renders Callout.Title', () => {
    render(<Callout.Title data-testid="t">Heads up</Callout.Title>);
    expect(screen.getByTestId('t')).toHaveTextContent('Heads up');
    expect(screen.getByTestId('t').tagName).toBe('H5');
  });

  it('renders Callout.Description', () => {
    render(<Callout.Description data-testid="d">Details</Callout.Description>);
    expect(screen.getByTestId('d')).toHaveTextContent('Details');
    expect(screen.getByTestId('d')).toHaveClass('text-xs');
  });

  it('combines custom className', () => {
    render(<Callout.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(Callout.Root.displayName).toBe('Callout.Root');
    expect(Callout.Icon.displayName).toBe('Callout.Icon');
    expect(Callout.Content.displayName).toBe('Callout.Content');
    expect(Callout.Title.displayName).toBe('Callout.Title');
    expect(Callout.Description.displayName).toBe('Callout.Description');
  });
});
