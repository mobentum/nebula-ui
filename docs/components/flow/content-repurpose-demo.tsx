'use client';

import {
  Flow,
  FlowBackground,
  FlowControls,
  FlowMiniMap,
  FlowPanel,
  FlowProvider,
  NodePalette,
  type PaletteItem,
  layoutFlow,
  useFlowGraph,
  useNodeDrop,
} from '@mobentum/nebula-flow';
import { Button } from '@mobentum/nebula-ui';

const paletteItems: PaletteItem[] = [
  { type: 'trigger', label: 'Trigger', description: 'Inbound event', icon: '⚡' },
  { type: 'agent', label: 'Agent', description: 'Model + persona', icon: '●' },
  { type: 'task', label: 'Task', description: 'Run a tool', icon: '✓' },
  { type: 'condition', label: 'Condition', description: 'Branch', icon: '◇' },
];

const rules = [
  { source: 'trigger', target: 'agent' },
  { source: 'agent', target: 'task' },
  { source: 'agent', target: 'condition' },
  { source: 'task', target: 'task' },
  { source: 'task', target: 'condition' },
  { source: 'condition', target: 'agent' },
  { source: 'condition', target: 'task' },
];

const initialNodes = [
  {
    id: 't1',
    type: 'trigger',
    position: { x: 0, y: 80 },
    data: { title: 'Video published', event: 'youtube:video-published' },
  },
  {
    id: 'a1',
    type: 'agent',
    position: { x: 280, y: 80 },
    data: { title: 'Transcriber', model: 'gpt-5', status: 'running' },
  },
  {
    id: 'k1',
    type: 'task',
    position: { x: 560, y: 0 },
    data: { title: 'Write blog post', status: 'success' },
  },
  {
    id: 'k2',
    type: 'task',
    position: { x: 560, y: 80 },
    data: { title: 'Generate clips', status: 'success' },
  },
  {
    id: 'k3',
    type: 'task',
    position: { x: 560, y: 160 },
    data: { title: 'Post to X', status: 'pending' },
  },
];

const initialEdges = [
  { id: 'e1', source: 't1', target: 'a1' },
  { id: 'e2', source: 'a1', target: 'k1' },
  { id: 'e3', source: 'a1', target: 'k2' },
  { id: 'e4', source: 'a1', target: 'k3' },
];

function BuilderCanvas() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    addNode,
    setGraph,
    undo,
    redo,
    canUndo,
    canRedo,
  } = useFlowGraph({ initialNodes, initialEdges, history: true });
  const { onDrop, onDragOver } = useNodeDrop({ onAddNode: addNode });

  return (
    <div className="h-[520px] w-full rounded-lg border border-nb-border">
      <Flow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        rules={rules}
        className="h-full w-full"
      >
        <FlowBackground />
        <FlowControls />
        <FlowMiniMap />
        <FlowPanel position="top-right" className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setGraph(layoutFlow(nodes, edges), edges)}
          >
            Layout
          </Button>
          <Button size="sm" variant="outline" disabled={!canUndo} onClick={undo}>
            Undo
          </Button>
          <Button size="sm" variant="outline" disabled={!canRedo} onClick={redo}>
            Redo
          </Button>
        </FlowPanel>
      </Flow>
    </div>
  );
}

export function ContentRepurposeDemo() {
  return (
    <FlowProvider>
      <div className="grid gap-4 lg:grid-cols-[240px_1fr]">
        <NodePalette items={paletteItems} className="lg:sticky lg:top-0" />
        <BuilderCanvas />
      </div>
    </FlowProvider>
  );
}
