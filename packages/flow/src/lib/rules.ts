import type { Connection, Edge, Node } from '@xyflow/react';

export interface FlowRule {
  source: string | '*';
  target: string | '*';
  sourceHandle?: string;
  targetHandle?: string;
}

export interface FlowRulesOptions {
  preventCycles?: boolean;
}

export interface FlowValidator {
  validate: (
    connection: Connection,
    getNode: (id: string) => Node | undefined,
    getEdges: () => Edge[],
  ) => boolean;
}

function matchesRule(rule: FlowRule, sourceType: string | undefined, targetType: string | undefined, connection: Connection): boolean {
  if (rule.source !== '*' && rule.source !== sourceType) return false;
  if (rule.target !== '*' && rule.target !== targetType) return false;
  if (rule.sourceHandle !== undefined && rule.sourceHandle !== connection.sourceHandle) return false;
  if (rule.targetHandle !== undefined && rule.targetHandle !== connection.targetHandle) return false;
  return true;
}

function createsCycle(connection: Connection, getEdges: () => Edge[]): boolean {
  const source = connection.source ?? '';
  const target = connection.target ?? '';
  if (source === target) return true;

  const visited = new Set<string>();
  const stack = [target];
  while (stack.length > 0) {
    const id = stack.pop() as string;
    if (id === source) return true;
    if (visited.has(id)) continue;
    visited.add(id);
    for (const edge of getEdges()) {
      if (edge.source === id) stack.push(edge.target);
    }
  }
  return false;
}

export function createFlowRules(rules: FlowRule[], options: FlowRulesOptions = {}): FlowValidator {
  const { preventCycles = true } = options;

  return {
    validate(connection, getNode, getEdges) {
      if (!connection.source || !connection.target) return false;
      const source = getNode(connection.source);
      const target = getNode(connection.target);
      if (!source || !target) return false;

      const allowed = rules.some((rule) =>
        matchesRule(rule, source.type, target.type, connection),
      );
      if (!allowed) return false;
      if (preventCycles && createsCycle(connection, getEdges)) return false;
      return true;
    },
  };
}
