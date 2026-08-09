'use client';

import type { Node } from '@mobentum/nebula-flow';
import { Button, FieldControl, FieldLabel, FieldRoot } from '@mobentum/nebula-ui';

interface NodeInspectorProps {
  node?: Node;
  onUpdate: (id: string, data: Record<string, unknown>) => void;
  onDelete: (id: string) => void;
}

export function NodeInspector({ node, onUpdate, onDelete }: NodeInspectorProps) {
  if (!node) {
    return (
      <div className="flex h-full min-h-[120px] items-center justify-center rounded-lg border border-dashed border-nb-border bg-nb-muted/20 p-4 text-center text-sm text-nb-muted-fg">
        Select a node to edit its properties.
      </div>
    );
  }

  const data = (node.data ?? {}) as Record<string, unknown>;
  const set = (key: string, value: unknown) => onUpdate(node.id, { [key]: value });
  const branches = Array.isArray(data.branches) ? (data.branches as string[]).join(', ') : '';

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-nb-border bg-nb-card p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-nb-muted-fg">
        {node.type} node
      </p>
      <FieldRoot>
        <FieldLabel>Title</FieldLabel>
        <FieldControl
          value={String(data.title ?? data.label ?? '')}
          onChange={(event) => set('title', event.target.value)}
        />
      </FieldRoot>
      {node.type === 'trigger' && (
        <FieldRoot>
          <FieldLabel>Event</FieldLabel>
          <FieldControl
            value={String(data.event ?? '')}
            onChange={(event) => set('event', event.target.value)}
          />
        </FieldRoot>
      )}
      {node.type === 'agent' && (
        <FieldRoot>
          <FieldLabel>Model</FieldLabel>
          <FieldControl
            value={String(data.model ?? '')}
            onChange={(event) => set('model', event.target.value)}
          />
        </FieldRoot>
      )}
      {node.type === 'condition' && (
        <FieldRoot>
          <FieldLabel>Branches</FieldLabel>
          <FieldControl
            value={branches}
            placeholder="Yes, No"
            onChange={(event) =>
              set(
                'branches',
                event.target.value
                  .split(',')
                  .map((s) => s.trim())
                  .filter(Boolean),
              )
            }
          />
        </FieldRoot>
      )}
      {(node.type === 'agent' || node.type === 'task') && (
        <FieldRoot>
          <FieldLabel>Status</FieldLabel>
          <FieldControl
            value={String(data.status ?? '')}
            placeholder="idle, running, success…"
            onChange={(event) => set('status', event.target.value)}
          />
        </FieldRoot>
      )}
      <Button variant="danger" size="sm" className="mt-1" onClick={() => onDelete(node.id)}>
        Delete node
      </Button>
    </div>
  );
}
