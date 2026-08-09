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
    position: { x: 0, y: 60 },
    data: { title: 'Blog topic added', event: 'google-sheets:row-inserted' },
  },
  {
    id: 'a1',
    type: 'agent',
    position: { x: 280, y: 60 },
    data: { title: 'Research Assistant', model: 'gpt-5', status: 'running' },
  },
  {
    id: 'c1',
    type: 'condition',
    position: { x: 560, y: 60 },
    data: { title: 'Topic approved?', branches: ['Yes', 'No'] },
  },
  {
    id: 'k1',
    type: 'task',
    position: { x: 840, y: 0 },
    data: { title: 'Draft in Medium', status: 'success' },
  },
  {
    id: 'k2',
    type: 'task',
    position: { x: 840, y: 160 },
    data: { title: 'Request revisions', status: 'pending' },
  },
];

const initialEdges = [
  { id: 'e1', source: 't1', target: 'a1' },
  { id: 'e2', source: 'a1', target: 'c1' },
  { id: 'e3', source: 'c1', target: 'k1' },
  { id: 'e4', source: 'c1', target: 'k2' },
];

export function AiBlogWorkflowDemo() {
  return (
    <FlowProvider>
      <FlowBuilderLayout
        nodes={initialNodes}
        edges={initialEdges}
        rules={rules}
        paletteItems={paletteItems}
      />
    </FlowProvider>
  );
}
