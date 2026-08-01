'use client';

import { type Node, type NodeProps } from '@xyflow/react';
import { NodeShell } from './node-shell';

export type ConditionNodeData = {
  label?: string;
  title?: string;
  branches?: string[];
  icon?: string;
}

export type ConditionNode = Node<ConditionNodeData>;

export function ConditionNode({ data, selected }: NodeProps<ConditionNode>) {
  return (
    <NodeShell
      selected={selected}
      label="If"
      badgeClassName="bg-nb-warning/10 text-nb-warning"
      title={data.title ?? data.label}
      subtitle={data.branches?.join(' / ')}
      icon={data.icon}
    />
  );
}

ConditionNode.displayName = 'ConditionNode';
