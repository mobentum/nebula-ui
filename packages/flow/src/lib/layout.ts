import type { Edge, Node } from '@xyflow/react';

export interface LayoutOptions {
  direction?: 'TB' | 'LR';
  nodeWidth?: number;
  nodeHeight?: number;
  horizontalSpacing?: number;
  verticalSpacing?: number;
}

/**
 * Arranges a DAG into a layered layout using longest-path ranking.
 * Dependency-free — returns nodes with new `position`s and clears
 * computed fields so xyflow re-measures.
 */
export function layoutFlow(
  nodes: Node[],
  edges: Edge[],
  options: LayoutOptions = {},
): Node[] {
  const {
    direction = 'TB',
    nodeWidth = 180,
    nodeHeight = 60,
    horizontalSpacing = 80,
    verticalSpacing = 60,
  } = options;

  const indegree: Record<string, number> = {};
  const adjacency: Record<string, string[]> = {};
  for (const node of nodes) indegree[node.id] = 0;
  for (const edge of edges) {
    adjacency[edge.source] = adjacency[edge.source] ?? [];
    adjacency[edge.source].push(edge.target);
    indegree[edge.target] = (indegree[edge.target] ?? 0) + 1;
  }

  const remaining = new Map(Object.entries(indegree));
  const queue = nodes
    .filter((node) => indegree[node.id] === 0)
    .map((node) => node.id);
  const queued = new Set(queue);

  const distance: Record<string, number> = {};
  for (const id of queue) distance[id] = 0;

  while (queue.length > 0) {
    const id = queue.shift() as string;
    for (const next of adjacency[id] ?? []) {
      const candidate = (distance[id] ?? 0) + 1;
      if ((distance[next] ?? Number.NEGATIVE_INFINITY) < candidate) {
        distance[next] = candidate;
      }
      remaining.set(next, (remaining.get(next) ?? 0) - 1);
      if (remaining.get(next) === 0 && !queued.has(next)) {
        queue.push(next);
        queued.add(next);
      }
    }
  }

  for (const node of nodes) {
    if (distance[node.id] === undefined) distance[node.id] = 0;
  }

  const layers: Record<number, string[]> = {};
  for (const node of nodes) {
    const rank = distance[node.id] ?? 0;
    layers[rank] = layers[rank] ?? [];
    layers[rank].push(node.id);
  }

  const positions: Record<string, { x: number; y: number }> = {};
  for (const rank of Object.keys(layers)) {
    const r = Number(rank);
    layers[r].forEach((id, i) => {
      positions[id] =
        direction === 'LR'
          ? {
              x: r * (nodeWidth + horizontalSpacing),
              y: i * (nodeHeight + verticalSpacing),
            }
          : {
              x: i * (nodeWidth + horizontalSpacing),
              y: r * (nodeHeight + verticalSpacing),
            };
    });
  }

  return nodes.map((node) => {
    const next = { ...node } as Node & { positionAbsolute?: unknown };
    delete next.positionAbsolute;
    delete next.width;
    delete next.height;
    delete next.selected;
    delete next.measured;
    return { ...next, position: positions[node.id] ?? { x: 0, y: 0 } };
  });
}
