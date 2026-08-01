import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NodePalette, type PaletteItem } from '../components/palette/node-palette';

const items: PaletteItem[] = [
  { type: 'trigger', label: 'Trigger', description: 'Inbound event' },
  { type: 'agent', label: 'Agent', description: 'Model + persona' },
];

describe('NodePalette', () => {
  it('renders palette items', () => {
    render(<NodePalette items={items} />);
    expect(screen.getByText('Trigger')).toBeInTheDocument();
    expect(screen.getByText('Agent')).toBeInTheDocument();
  });

  it('sets the node type on drag start', () => {
    const setData = vi.fn();
    render(<NodePalette items={items} />);
    fireEvent.dragStart(screen.getByText('Trigger'), {
      dataTransfer: { setData, effectAllowed: '' },
    });
    expect(setData).toHaveBeenCalledWith('application/reactflow', 'trigger');
    expect(setData).toHaveBeenCalledWith('application/reactflow', 'trigger');
  });

  it('applies a custom className', () => {
    const { container } = render(<NodePalette items={items} className="max-w-xs" />);
    expect(container.querySelector('.max-w-xs')).toBeInTheDocument();
  });
});
