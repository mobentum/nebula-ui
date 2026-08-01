'use client';

import { type Node, type NodeProps } from '@xyflow/react';
import { NodeShell, type NodeStatus } from './node-shell';

export type FlowNodeData = {
  label?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  status?: NodeStatus;
}

export type FlowNode = Node<FlowNodeData>;

export function FlowNode({ data, selected }: NodeProps<FlowNode>) {
  return (
    <NodeShell
      selected={selected}
      label={data.label}
      title={data.title}
      subtitle={data.subtitle ?? data.description}
      status={data.status}
      icon={data.icon}
    />
  );
}

FlowNode.displayName = 'FlowNode';
