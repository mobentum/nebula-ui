'use client';

import { Panel as XyPanel, type PanelProps } from '@xyflow/react';

export function FlowPanel(props: PanelProps) {
  return <XyPanel {...props} />;
}

FlowPanel.displayName = 'FlowPanel';
