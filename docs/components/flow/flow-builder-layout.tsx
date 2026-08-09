'use client';

import {
  type Edge,
  Flow,
  FlowBackground,
  FlowControls,
  FlowMiniMap,
  FlowPanel,
  type FlowRule,
  type Node,
  NodePalette,
  type PaletteItem,
  layoutFlow,
  useFlowGraph,
  useNodeDrop,
} from '@mobentum/nebula-flow';
import { Button } from '@mobentum/nebula-ui';
import { NodeInspector } from './node-inspector';

interface FlowBuilderLayoutProps {
  nodes: Node[];
  edges: Edge[];
  rules: FlowRule[];
  paletteItems: PaletteItem[];
  heightClassName?: string;
}

export function FlowBuilderLayout({
  nodes: initialNodes,
  edges: initialEdges,
  rules,
  paletteItems,
  heightClassName = 'h-[520px]',
}: FlowBuilderLayoutProps) {
  const graph = useFlowGraph({ initialNodes, initialEdges, history: true });
  const { onDrop, onDragOver } = useNodeDrop({ onAddNode: graph.addNode });
  const selectedNode = graph.nodes.find((node) => node.selected);

  return (
    <div className="grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)_240px]">
      <NodePalette items={paletteItems} className="lg:sticky lg:top-0" />
      <div className={`${heightClassName} w-full rounded-lg border border-nb-border`}>
        <Flow
          nodes={graph.nodes}
          edges={graph.edges}
          onNodesChange={graph.onNodesChange}
          onEdgesChange={graph.onEdgesChange}
          onConnect={graph.onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          rules={rules}
          className="h-full w-full"
        >
          <FlowBackground />
          <FlowControls />
          <FlowMiniMap />
          <FlowPanel position="top-right" className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setLayout(graph)}>
              Layout
            </Button>
            <Button size="sm" variant="outline" disabled={!graph.canUndo} onClick={graph.undo}>
              Undo
            </Button>
            <Button size="sm" variant="outline" disabled={!graph.canRedo} onClick={graph.redo}>
              Redo
            </Button>
          </FlowPanel>
        </Flow>
      </div>
      <NodeInspector
        node={selectedNode}
        onUpdate={graph.updateNodeData}
        onDelete={graph.removeNode}
      />
    </div>
  );
}

function setLayout(graph: ReturnType<typeof useFlowGraph>) {
  graph.setGraph(layoutFlow(graph.nodes, graph.edges), graph.edges);
}
