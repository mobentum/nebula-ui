'use client';

import { useCallback, useRef, useState } from 'react';
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type Connection,
  type Edge,
  type EdgeChange,
  type Node,
  type NodeChange,
} from '@xyflow/react';

interface Snapshot {
  nodes: Node[];
  edges: Edge[];
}

const HISTORY_LIMIT = 50;

export function useFlowHistory(initialNodes: Node[] = [], initialEdges: Edge[] = []) {
  const [state, setState] = useState<Snapshot>({ nodes: initialNodes, edges: initialEdges });
  const [, setTick] = useState(0);
  const stateRef = useRef(state);
  const pastRef = useRef<Snapshot[]>([]);
  const futureRef = useRef<Snapshot[]>([]);
  const draggingRef = useRef(false);
  stateRef.current = state;

  const bump = useCallback(() => setTick((t) => t + 1), []);

  const snapshot = useCallback(() => {
    pastRef.current = [...pastRef.current.slice(-HISTORY_LIMIT + 1), stateRef.current];
    futureRef.current = [];
    bump();
  }, [bump]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      let shouldSnapshot = false;
      for (const change of changes) {
        if (change.type === 'add' || change.type === 'remove' || change.type === 'replace') {
          shouldSnapshot = true;
        } else if (change.type === 'position') {
          if (change.dragging && !draggingRef.current) shouldSnapshot = true;
          draggingRef.current = Boolean(change.dragging);
        }
      }
      if (shouldSnapshot) snapshot();
      setState((s) => ({ ...s, nodes: applyNodeChanges(changes, s.nodes) }));
    },
    [snapshot],
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      if (changes.some((c) => c.type === 'add' || c.type === 'remove' || c.type === 'replace')) {
        snapshot();
      }
      setState((s) => ({ ...s, edges: applyEdgeChanges(changes, s.edges) }));
    },
    [snapshot],
  );

  const onConnect = useCallback(
    (connection: Connection) => {
      snapshot();
      setState((s) => ({ ...s, edges: addEdge(connection, s.edges) }));
    },
    [snapshot],
  );

  const addNode = useCallback(
    (node: Node) => {
      snapshot();
      setState((s) => ({ ...s, nodes: [...s.nodes, node] }));
    },
    [snapshot],
  );

  const removeNode = useCallback(
    (id: string) => {
      snapshot();
      setState((s) => ({
        nodes: s.nodes.filter((node) => node.id !== id),
        edges: s.edges.filter((edge) => edge.source !== id && edge.target !== id),
      }));
    },
    [snapshot],
  );

  const updateNodeData = useCallback(
    (id: string, data: Record<string, unknown>) => {
      snapshot();
      setState((s) => ({
        ...s,
        nodes: s.nodes.map((node) =>
          node.id === id ? { ...node, data: { ...node.data, ...data } } : node,
        ),
      }));
    },
    [snapshot],
  );

  const setGraph = useCallback(
    (nodes: Node[], edges: Edge[]) => {
      snapshot();
      setState({ nodes, edges });
    },
    [snapshot],
  );

  const undo = useCallback(() => {
    const previous = pastRef.current[pastRef.current.length - 1];
    if (!previous) return;
    pastRef.current = pastRef.current.slice(0, -1);
    futureRef.current = [...futureRef.current, stateRef.current];
    setState(previous);
    bump();
  }, [bump]);

  const redo = useCallback(() => {
    const next = futureRef.current[futureRef.current.length - 1];
    if (!next) return;
    futureRef.current = futureRef.current.slice(0, -1);
    pastRef.current = [...pastRef.current, stateRef.current];
    setState(next);
    bump();
  }, [bump]);

  return {
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    addNode,
    removeNode,
    updateNodeData,
    setGraph,
    undo,
    redo,
    canUndo: pastRef.current.length > 0,
    canRedo: futureRef.current.length > 0,
  };
}
