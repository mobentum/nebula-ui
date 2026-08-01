'use client';

import { useCallback } from 'react';
import type { Edge, Node } from '@xyflow/react';
import { deserializeFlow, serializeFlow, type FlowJSON } from '../lib/serialize';
import { useFlowHistory } from './use-flow-history';

export interface UseFlowGraphOptions {
  initialNodes?: Node[];
  initialEdges?: Edge[];
  history?: boolean;
}

export function useFlowGraph(options: UseFlowGraphOptions = {}) {
  const { initialNodes = [], initialEdges = [], history = false } = options;
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    addNode: add,
    removeNode: remove,
    updateNodeData: update,
    setGraph,
    undo,
    redo,
    canUndo,
    canRedo,
  } = useFlowHistory(initialNodes, initialEdges);

  const toJSON = useCallback((): FlowJSON => serializeFlow(nodes, edges), [nodes, edges]);

  const fromJSON = useCallback(
    (json: FlowJSON) => {
      const { nodes: nextNodes, edges: nextEdges } = deserializeFlow(json);
      setGraph(nextNodes, nextEdges);
    },
    [setGraph],
  );

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    addNode: add,
    removeNode: remove,
    updateNodeData: update,
    setGraph,
    toJSON,
    fromJSON,
    ...(history ? { undo, redo, canUndo, canRedo } : {}),
  };
}
