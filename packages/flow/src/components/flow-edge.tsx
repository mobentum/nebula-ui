'use client';

import { BezierEdge, type EdgeProps } from '@xyflow/react';

export function FlowEdge(props: EdgeProps) {
  return <BezierEdge {...props} />;
}

FlowEdge.displayName = 'FlowEdge';
