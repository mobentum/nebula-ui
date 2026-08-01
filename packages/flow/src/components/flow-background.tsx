'use client';

import { Background as XyBackground, type BackgroundProps } from '@xyflow/react';

export function FlowBackground(props: BackgroundProps) {
  return <XyBackground gap={16} size={1} {...props} />;
}

FlowBackground.displayName = 'FlowBackground';
