import { describe, it, expect } from 'vitest';
import type { Edge, Node } from '@xyflow/react';
import { createFlowRules } from '../lib/rules';

const nodes: Node[] = [
  { id: 't', type: 'trigger', position: { x: 0, y: 0 }, data: {} },
  { id: 'a', type: 'agent', position: { x: 0, y: 0 }, data: {} },
  { id: 'k', type: 'task', position: { x: 0, y: 0 }, data: {} },
];

const getNode = (id: string) => nodes.find((node) => node.id === id);
const getEdges = (edges: Edge[]) => () => edges;

describe('createFlowRules', () => {
  it('allows a valid connection', () => {
    const validator = createFlowRules([{ source: 'trigger', target: 'agent' }]);
    expect(validator.validate({ source: 't', target: 'a' }, getNode, getEdges([]))).toBe(
      true,
    );
  });

  it('rejects a disallowed connection', () => {
    const validator = createFlowRules([{ source: 'trigger', target: 'agent' }]);
    expect(validator.validate({ source: 'a', target: 't' }, getNode, getEdges([]))).toBe(
      false,
    );
  });

  it('supports wildcard rules', () => {
    const validator = createFlowRules([{ source: '*', target: 'task' }]);
    expect(validator.validate({ source: 'a', target: 'k' }, getNode, getEdges([]))).toBe(
      true,
    );
  });

  it('matches handle ids when specified', () => {
    const validator = createFlowRules([
      { source: 'agent', target: 'task', sourceHandle: 'out' },
    ]);
    expect(
      validator.validate(
        { source: 'a', target: 'k', sourceHandle: 'out' },
        getNode,
        getEdges([]),
      ),
    ).toBe(true);
    expect(
      validator.validate(
        { source: 'a', target: 'k', sourceHandle: 'other' },
        getNode,
        getEdges([]),
      ),
    ).toBe(false);
  });

  it('prevents cycles', () => {
    const edges: Edge[] = [
      { id: 'e1', source: 'a', target: 'k' },
      { id: 'e2', source: 'k', target: 't' },
    ];
    const validator = createFlowRules([{ source: '*', target: '*' }], {
      preventCycles: true,
    });
    expect(validator.validate({ source: 't', target: 'a' }, getNode, getEdges(edges))).toBe(
      false,
    );
    expect(validator.validate({ source: 'a', target: 't' }, getNode, getEdges(edges))).toBe(
      true,
    );
  });

  it('rejects self-loops', () => {
    const validator = createFlowRules([{ source: '*', target: '*' }], {
      preventCycles: true,
    });
    expect(validator.validate({ source: 'a', target: 'a' }, getNode, getEdges([]))).toBe(
      false,
    );
  });
});
