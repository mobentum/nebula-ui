import type { NodeTypes } from '@xyflow/react';
import { AgentNode } from '../components/nodes/agent-node';
import { ConditionNode } from '../components/nodes/condition-node';
import { FlowNode } from '../components/nodes/flow-node';
import { TaskNode } from '../components/nodes/task-node';
import { TriggerNode } from '../components/nodes/trigger-node';

export const nodeTypes: NodeTypes = {
  flow: FlowNode,
  agent: AgentNode,
  task: TaskNode,
  condition: ConditionNode,
  trigger: TriggerNode,
};
