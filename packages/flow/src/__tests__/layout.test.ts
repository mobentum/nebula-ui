import { describe, it, expect } from 'vitest';
import type { Edge, Node } from '@xyflow/react';
import { layoutFlow } from '../lib/layout';

const nodes: Node[] = [
  { id: 't', type: 'trigger', position: { x: 0, y: 0 }, data: {} },
  { id: 'a', type: 'agent', position: { x: 0, y: 0 }, data: {} },
  { id: 'k1', type: 'task', position: { x: 0, y: 0 }, data: {} },
  { id: 'k2', type: 'task', position: { x: 0, y: 0 }, data: {} },
];

const edges: Edge[] = [
  { id: 'e1', source: 't', target: 'a' },
  { id: 'e2', source: 'a', target: 'k1' },
  { id: 'e3', source: 'a', target: 'k2' },
];

const byId = (laid: Node[]) => Object.fromEntries(laid.map((n) => [n.id, n]));

describe('layoutFlow', () => {
  it('arranges nodes in top-to-bottom layers', () => {
    const laid = layoutFlow(nodes, edges, {
      direction: 'TB',
      nodeHeight: 40,
      verticalSpacing: 20,
    });
    const map = byId(laid);
    expect(map.t.position.y).toBe(0);
    expect(map.a.position.y).toBe(60);
    expect(map.k1.position.y).toBe(120);
    expect(map.k2.position.y).toBe(120);
  });

  it('arranges nodes in left-to-right layers', () => {
    const laid = layoutFlow(nodes, edges, {
      direction: 'LR',
      nodeWidth: 100,
      horizontalSpacing: 50,
    });
    const map = byId(laid);
    expect(map.t.position.x).toBe(0);
    expect(map.a.position.x).toBe(150);
    expect(map.k1.position.x).toBe(300);
  });

  it('clears computed fields', () => {
    const withMeta = nodes.map((n) => ({
      ...n,
      measured: { width: 100, height: 50 },
      positionAbsolute: n.position,
    }));
    const laid = layoutFlow(withMeta, edges);
    for (const n of laid) {
      expect('measured' in n).toBe(false);
      expect('positionAbsolute' in n).toBe(false);
    }
  });
});
