'use client';

import { type Node, type NodeProps } from '@xyflow/react';
import { NodeShell, type NodeStatus } from './node-shell';

export type TaskNodeData = {
  label?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  status?: NodeStatus;
}

export type TaskNode = Node<TaskNodeData>;

export function TaskNode({ data, selected }: NodeProps<TaskNode>) {
  return (
    <NodeShell
      selected={selected}
      label="Task"
      badgeClassName="bg-nb-success/10 text-nb-success"
      title={data.title ?? data.label}
      subtitle={data.subtitle ?? data.description}
      status={data.status}
      icon={data.icon}
    />
  );
}

TaskNode.displayName = 'TaskNode';
