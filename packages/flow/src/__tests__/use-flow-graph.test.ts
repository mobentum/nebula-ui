import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import type { Node } from '@xyflow/react';
import { useFlowGraph } from '../hooks/use-flow-graph';

const trigger: Node = {
  id: 't',
  type: 'trigger',
  position: { x: 0, y: 0 },
  data: { title: 'Trigger' },
};

describe('useFlowGraph', () => {
  it('adds and removes nodes', () => {
    const { result } = renderHook(() => useFlowGraph({ history: true }));
    act(() => result.current.addNode(trigger));
    expect(result.current.nodes).toHaveLength(1);
    act(() => result.current.removeNode('t'));
    expect(result.current.nodes).toHaveLength(0);
  });

  it('updates node data', () => {
    const { result } = renderHook(() => useFlowGraph({ history: true }));
    act(() => result.current.addNode(trigger));
    act(() => result.current.updateNodeData('t', { title: 'Updated' }));
    expect(result.current.nodes[0].data.title).toBe('Updated');
  });

  it('connects two nodes', () => {
    const { result } = renderHook(() =>
      useFlowGraph({
        initialNodes: [
          trigger,
          { id: 'a', type: 'agent', position: { x: 100, y: 0 }, data: {} },
        ],
      }),
    );
    act(() => result.current.onConnect({ source: 't', target: 'a' }));
    expect(result.current.edges).toHaveLength(1);
    expect(result.current.edges[0].source).toBe('t');
  });

  it('undoes and redoes structural changes when history is enabled', () => {
    const { result } = renderHook(() => useFlowGraph({ history: true }));
    act(() => result.current.addNode(trigger));
    expect(result.current.canUndo).toBe(true);
    act(() => result.current.undo());
    expect(result.current.nodes).toHaveLength(0);
    act(() => result.current.redo());
    expect(result.current.nodes).toHaveLength(1);
  });

  it('does not expose history controls when disabled', () => {
    const { result } = renderHook(() => useFlowGraph({}));
    expect(result.current.undo).toBeUndefined();
    expect(result.current.canUndo).toBeUndefined();
  });

  it('serializes and restores from JSON', () => {
    const { result } = renderHook(() =>
      useFlowGraph({ initialNodes: [trigger] }),
    );
    const json = result.current.toJSON();
    expect(json.version).toBe(1);
    expect(json.nodes).toHaveLength(1);

    act(() => result.current.fromJSON({ version: 1, nodes: [], edges: [] }));
    expect(result.current.nodes).toHaveLength(0);
  });
});
