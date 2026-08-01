'use client';

import { type Node, type NodeProps } from '@xyflow/react';
import { NodeShell, type NodeStatus } from './node-shell';

export type AgentNodeData = {
  label?: string;
  title?: string;
  subtitle?: string;
  model?: string;
  icon?: string;
  status?: NodeStatus;
}

export type AgentNode = Node<AgentNodeData>;

export function AgentNode({ data, selected }: NodeProps<AgentNode>) {
  return (
    <NodeShell
      selected={selected}
      label="Agent"
      badgeClassName="bg-nb-primary/10 text-nb-primary"
      title={data.title ?? data.label}
      subtitle={data.subtitle ?? data.model}
      status={data.status}
      icon={data.icon}
    />
  );
}

AgentNode.displayName = 'AgentNode';
