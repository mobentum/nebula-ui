import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { configureAxe } from 'jest-axe';
import { AgentNode } from '../components/nodes/agent-node';
import { NodePalette, type PaletteItem } from '../components/palette/node-palette';

const axe = configureAxe({
  rules: {
    'color-contrast': { enabled: false },
    region: { enabled: false },
  },
});

describe('a11y: flow', () => {
  it('AgentNode has no violations', async () => {
    const { container } = render(
      AgentNode({
        id: 'a',
        data: { title: 'Support Bot', model: 'gpt-5', status: 'running' },
      }),
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('NodePalette has no violations', async () => {
    const items: PaletteItem[] = [
      { type: 'trigger', label: 'Trigger' },
      { type: 'agent', label: 'Agent' },
    ];
    const { container } = render(<NodePalette items={items} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
