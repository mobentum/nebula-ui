import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Menubar } from '../components/menubar';

describe('Menubar', () => {
  it('renders Menubar.Root', () => {
    render(<Menubar.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toBeInTheDocument();
  });

  it('Menubar.Root applies default classes', () => {
    render(<Menubar.Root data-testid="r" />);
    expect(screen.getByTestId('r')).toHaveClass('flex', 'h-10', 'items-center', 'rounded-md', 'border');
  });

  it('renders Menubar.Item', () => {
    render(
      <Menubar.Root>
        <Menubar.Item data-testid="i">File</Menubar.Item>
      </Menubar.Root>,
    );
    expect(screen.getByTestId('i')).toHaveTextContent('File');
  });

  it('Menubar.Item is a button', () => {
    render(
      <Menubar.Root>
        <Menubar.Item data-testid="i">File</Menubar.Item>
      </Menubar.Root>,
    );
    expect(screen.getByTestId('i').tagName).toBe('BUTTON');
  });

  it('renders Menubar.Separator', () => {
    render(
      <Menubar.Root>
        <Menubar.Separator data-testid="s" />
      </Menubar.Root>,
    );
    expect(screen.getByTestId('s')).toBeInTheDocument();
  });

  it('renders Menubar.Label', () => {
    render(
      <Menubar.Root>
        <Menubar.Label data-testid="l">Label</Menubar.Label>
      </Menubar.Root>,
    );
    expect(screen.getByTestId('l')).toHaveTextContent('Label');
  });

  it('combines custom className on Root', () => {
    render(<Menubar.Root data-testid="r" className="my-custom" />);
    expect(screen.getByTestId('r')).toHaveClass('my-custom');
  });

  it('has displayNames', () => {
    expect(Menubar.Root.displayName).toBe('Menubar.Root');
    expect(Menubar.Item.displayName).toBe('Menubar.Item');
    expect(Menubar.Separator.displayName).toBe('Menubar.Separator');
    expect(Menubar.Label.displayName).toBe('Menubar.Label');
  });
});
