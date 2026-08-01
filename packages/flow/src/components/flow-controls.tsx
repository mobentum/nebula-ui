'use client';

import { Controls as XyControls, type ControlProps } from '@xyflow/react';

export function FlowControls(props: ControlProps) {
  return <XyControls {...props} />;
}

FlowControls.displayName = 'FlowControls';
