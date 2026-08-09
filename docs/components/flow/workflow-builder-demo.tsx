'use client';

import { FlowProvider, type PaletteItem } from '@mobentum/nebula-flow';
import { FlowBuilderLayout } from './flow-builder-layout';

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
    position: { x: 0, y: 40 },
    data: { title: 'Inbound message', event: 'whatsapp' },
  },
  {
    id: 'a1',
    type: 'agent',
    position: { x: 280, y: 40 },
    data: { title: 'Support Bot', model: 'gpt-5', status: 'running' },
  },
  {
    id: 'k1',
    type: 'task',
    position: { x: 560, y: 0 },
    data: { title: 'Classify intent', status: 'success' },
  },
  {
    id: 'k2',
    type: 'task',
    position: { x: 560, y: 140 },
    data: { title: 'Draft reply' },
  },
];

const initialEdges = [
  { id: 'e1', source: 't1', target: 'a1' },
  { id: 'e2', source: 'a1', target: 'k1' },
  { id: 'e3', source: 'a1', target: 'k2' },
];

export function WorkflowBuilderDemo() {
  return (
    <FlowProvider>
      <FlowBuilderLayout
        nodes={initialNodes}
        edges={initialEdges}
        rules={rules}
        paletteItems={paletteItems}
        heightClassName="h-[640px]"
      />
    </FlowProvider>
  );
}
