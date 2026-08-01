import { describe, it, expect } from 'vitest';
import type { Edge, Node } from '@xyflow/react';
import { deserializeFlow, serializeFlow } from '../lib/serialize';

const node: Node = {
  id: 'a',
  type: 'agent',
  position: { x: 10, y: 20 },
  data: { title: 'Agent' },
  positionAbsolute: { x: 10, y: 20 },
  width: 180,
  height: 60,
  selected: false,
  measured: { width: 180, height: 60 },
};

const edge: Edge = {
  id: 'e',
  source: 'a',
  target: 'b',
  sourceX: 10,
  sourceY: 20,
  targetX: 30,
  targetY: 40,
  selected: false,
};

describe('serializeFlow', () => {
  it('strips computed fields', () => {
    const json = serializeFlow([node], [edge]);
    const raw = JSON.stringify(json);
    expect(raw).not.toContain('positionAbsolute');
    expect(raw).not.toContain('measured');
    expect(raw).not.toContain('selected');
    expect(raw).not.toContain('sourceX');
    expect(json.version).toBe(1);
  });

  it('round trips nodes and edges', () => {
    const json = serializeFlow([node], [edge]);
    const { nodes, edges } = deserializeFlow(json);
    expect(nodes[0].id).toBe('a');
    expect(nodes[0].position).toEqual({ x: 10, y: 20 });
    expect(edges[0].source).toBe('a');
    expect(edges[0].target).toBe('b');
  });
});
