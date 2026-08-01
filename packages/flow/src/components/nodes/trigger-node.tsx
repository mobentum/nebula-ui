'use client';

import { type Node, type NodeProps } from '@xyflow/react';
import { NodeShell } from './node-shell';

export type TriggerNodeData = {
  label?: string;
  title?: string;
  event?: string;
  icon?: string;
}

export type TriggerNode = Node<TriggerNodeData>;

export function TriggerNode({ data, selected }: NodeProps<TriggerNode>) {
  return (
    <NodeShell
      selected={selected}
      label="Trigger"
      badgeClassName="bg-nb-info/10 text-nb-info"
      title={data.title ?? data.label}
      subtitle={data.event}
      icon={data.icon}
    />
  );
}

TriggerNode.displayName = 'TriggerNode';
