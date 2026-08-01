'use client';

import { Handle, type HandleProps } from '@xyflow/react';

export function FlowHandle({ style, ...props }: HandleProps) {
  return <Handle style={{ width: 10, height: 10, borderWidth: 2, ...style }} {...props} />;
}

FlowHandle.displayName = 'FlowHandle';
