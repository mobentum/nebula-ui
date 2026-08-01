import type { Edge, Node } from '@xyflow/react';

export interface FlowJSON {
  version: 1;
  nodes: Node[];
  edges: Edge[];
}

const NODE_KEYS = [
  'id',
  'type',
  'position',
  'data',
  'parentId',
  'extent',
  'expandParent',
  'className',
  'style',
  'hidden',
  'draggable',
  'selectable',
  'deletable',
  'connectable',
  'resizing',
  'zIndex',
  'ariaLabel',
] as const;

const EDGE_KEYS = [
  'id',
  'source',
  'target',
  'sourceHandle',
  'targetHandle',
  'type',
  'label',
  'animated',
  'style',
  'className',
  'markerEnd',
  'markerStart',
  'data',
] as const;

function pick(obj: Record<string, unknown>, keys: readonly string[]): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const key of keys) {
    if (key in obj) out[key] = obj[key];
  }
  return out;
}

export function serializeFlow(nodes: Node[], edges: Edge[]): FlowJSON {
  return {
    version: 1,
    nodes: nodes.map(
      (node) => pick(node as Record<string, unknown>, NODE_KEYS) as unknown as Node,
    ),
    edges: edges.map(
      (edge) => pick(edge as Record<string, unknown>, EDGE_KEYS) as unknown as Edge,
    ),
  };
}

export function deserializeFlow(json: FlowJSON): { nodes: Node[]; edges: Edge[] } {
  const nodes = Array.isArray(json.nodes) ? json.nodes : [];
  const edges = Array.isArray(json.edges) ? json.edges : [];
  return { nodes, edges };
}
