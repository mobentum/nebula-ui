'use client';

import { useCallback, type DragEvent } from 'react';
import { useReactFlow, type Node } from '@xyflow/react';

export interface UseNodeDropOptions {
  onAddNode?: (node: Node) => void;
  createNode?: (type: string, position: { x: number; y: number }) => Node;
}

export function useNodeDrop({ onAddNode, createNode }: UseNodeDropOptions) {
  const { screenToFlowPosition } = useReactFlow();

  const onDragOver = useCallback((event: DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: DragEvent) => {
      event.preventDefault();
      const type = event.dataTransfer.getData('application/reactflow');
      if (!type) return;
      const position = screenToFlowPosition({ x: event.clientX, y: event.clientY });
      const node =
        createNode?.(type, position) ??
        ({
          id: `${type}-${Date.now()}`,
          type,
          position,
          data: {},
        } satisfies Node);
      onAddNode?.(node);
    },
    [screenToFlowPosition, createNode, onAddNode],
  );

  return { onDragOver, onDrop };
}
