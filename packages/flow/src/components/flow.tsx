'use client';

import { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  type Connection,
  type Edge,
  type EdgeTypes,
  type IsValidConnection,
  type NodeTypes,
  type ReactFlowProps,
  useReactFlow,
} from '@xyflow/react';
import { FlowEdge } from './flow-edge';
import { createFlowRules, type FlowRule, type FlowValidator } from '../lib/rules';
import { nodeTypes as defaultNodeTypes } from '../lib/node-types';

export interface FlowProps
  extends Omit<ReactFlowProps, 'nodeTypes' | 'edgeTypes' | 'isValidConnection'> {
  nodeTypes?: NodeTypes;
  edgeTypes?: EdgeTypes;
  rules?: FlowRule[] | FlowValidator;
  isValidConnection?: IsValidConnection;
}

export function Flow(props: FlowProps) {
  return <FlowInner {...props} />;
}

Flow.displayName = 'Flow';

function FlowInner({
  nodeTypes,
  edgeTypes,
  rules,
  isValidConnection,
  defaultEdgeOptions,
  ...rest
}: FlowProps) {
  const { getNode, getEdges } = useReactFlow();

  const validator = useMemo<FlowValidator | undefined>(() => {
    if (!rules) return undefined;
    return Array.isArray(rules) ? createFlowRules(rules) : rules;
  }, [rules]);

  const handleIsValidConnection = useCallback<IsValidConnection>(
    (connection: Connection | Edge) => {
      const candidate: Connection = {
        source: connection.source,
        target: connection.target,
        sourceHandle: connection.sourceHandle ?? null,
        targetHandle: connection.targetHandle ?? null,
      };
      if (validator && !validator.validate(candidate, getNode, getEdges)) return false;
      if (isValidConnection && !isValidConnection(connection)) return false;
      return true;
    },
    [validator, isValidConnection, getNode, getEdges],
  );

  const mergedNodeTypes = useMemo(
    () => ({ ...defaultNodeTypes, ...nodeTypes }),
    [nodeTypes],
  );
  const mergedEdgeTypes = useMemo(
    () => ({ flow: FlowEdge, ...edgeTypes }),
    [edgeTypes],
  );
  const mergedEdgeOptions = useMemo(
    () => ({
      type: 'flow',
      ...(typeof defaultEdgeOptions === 'object' ? defaultEdgeOptions : {}),
    }),
    [defaultEdgeOptions],
  );

  return (
    <ReactFlow
      nodeTypes={mergedNodeTypes}
      edgeTypes={mergedEdgeTypes}
      defaultEdgeOptions={mergedEdgeOptions}
      isValidConnection={handleIsValidConnection}
      fitView
      {...rest}
    />
  );
}
