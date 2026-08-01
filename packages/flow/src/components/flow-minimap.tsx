'use client';

import { MiniMap as XyMiniMap, type MiniMapProps } from '@xyflow/react';

export function FlowMiniMap(props: MiniMapProps) {
  return <XyMiniMap pannable zoomable {...props} />;
}

FlowMiniMap.displayName = 'FlowMiniMap';
