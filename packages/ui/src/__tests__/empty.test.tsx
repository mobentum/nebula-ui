import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Empty } from '../components/empty';

describe('Empty', () => {
  it('renders Empty.Root', () => {
    render(<Empty.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('Empty.Root applies default classes', () => {
    render(<Empty.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveClass('flex', 'flex-col', 'items-center', 'justify-center', 'py-12');
  });

  it('renders Empty.Icon', () => {
    render(<Empty.Icon data-testid="i" />);
    expect(screen.getByTestId('i')).toBeInTheDocument();
  });

  it('renders Empty.Title', () => {
    render(<Empty.Title data-testid="t">No items</Empty.Title>);
    expect(screen.getByTestId('t')).toHaveTextContent('No items');
  });

  it('Empty.Title renders as h3', () => {
    render(<Empty.Title data-testid="t">Title</Empty.Title>);
    expect(screen.getByTestId('t').tagName).toBe('H3');
  });

  it('renders Empty.Description', () => {
    render(<Empty.Description data-testid="d">Description</Empty.Description>);
    expect(screen.getByTestId('d')).toHaveTextContent('Description');
  });

  it('renders Empty.Actions', () => {
    render(<Empty.Actions data-testid="a" />);
    expect(screen.getByTestId('a')).toBeInTheDocument();
  });

  it('Empty.Actions applies flex classes', () => {
    render(<Empty.Actions data-testid="a" />);
    expect(screen.getByTestId('a')).toHaveClass('flex', 'items-center', 'gap-2');
  });

  it('combines custom className', () => {
    render(<Empty.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(Empty.Root.displayName).toBe('Empty.Root');
    expect(Empty.Icon.displayName).toBe('Empty.Icon');
    expect(Empty.Title.displayName).toBe('Empty.Title');
    expect(Empty.Description.displayName).toBe('Empty.Description');
    expect(Empty.Actions.displayName).toBe('Empty.Actions');
  });
});
