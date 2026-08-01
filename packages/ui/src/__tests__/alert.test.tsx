import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Alert } from '../components/alert';

describe('Alert', () => {
  it('renders Alert.Root', () => {
    render(<Alert.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('Alert.Root has role alert', () => {
    render(<Alert.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveAttribute('role', 'alert');
  });

  it('Alert.Root applies default variant classes', () => {
    render(<Alert.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveClass('relative', 'w-full', 'rounded-lg', 'border', 'p-4');
  });

  it('Alert.Root applies info variant by default', () => {
    render(<Alert.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveClass('border-nb-info/40', 'bg-nb-info/10', '[&>svg]:text-nb-info');
  });

  it('Alert.Root applies success variant', () => {
    render(<Alert.Root data-testid="r" variant="success" />);
    expect(screen.getByTestId('r')).toHaveClass('border-nb-success/40', 'bg-nb-success/10', '[&>svg]:text-nb-success');
  });

  it('Alert.Root applies warning variant', () => {
    render(<Alert.Root data-testid="r" variant="warning" />);
    expect(screen.getByTestId('r')).toHaveClass('border-nb-warning/40', 'bg-nb-warning/10', '[&>svg]:text-nb-warning');
  });

  it('Alert.Root applies error variant', () => {
    render(<Alert.Root data-testid="r" variant="error" />);
    expect(screen.getByTestId('r')).toHaveClass('border-nb-destructive/40', 'bg-nb-destructive/10', '[&>svg]:text-nb-destructive');
  });

  it('renders Alert.Title', () => {
    render(<Alert.Title data-testid="t">Title</Alert.Title>);
    expect(screen.getByTestId('t')).toHaveTextContent('Title');
  });

  it('Alert.Title renders as h5', () => {
    render(<Alert.Title data-testid="t">Title</Alert.Title>);
    expect(screen.getByTestId('t').tagName).toBe('H5');
  });

  it('Alert.Title applies default classes', () => {
    render(<Alert.Title data-testid="t">Title</Alert.Title>);
    expect(screen.getByTestId('t')).toHaveClass('mb-1', 'font-medium', 'leading-none');
  });

  it('renders Alert.Description', () => {
    render(<Alert.Description data-testid="d">Description</Alert.Description>);
    expect(screen.getByTestId('d')).toHaveTextContent('Description');
  });

  it('combines custom className', () => {
    render(<Alert.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(Alert.Root.displayName).toBe('Alert.Root');
    expect(Alert.Title.displayName).toBe('Alert.Title');
    expect(Alert.Description.displayName).toBe('Alert.Description');
  });
});
