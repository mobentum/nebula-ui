'use client';

import {
  Button,
  Input,
  SelectIcon,
  SelectItem,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  ToggleGroupItem,
  ToggleGroupRoot,
} from '@mobentum/nebula-ui';
import { useState } from 'react';

export function FilterBarBasic() {
  const [status, setStatus] = useState<string[]>(['all']);
  return (
    <div className="w-full rounded-lg border border-nb-border bg-nb-card p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
          <div className="w-full sm:max-w-xs">
            <Input placeholder="Search requests..." />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <ToggleGroupRoot value={status} onValueChange={(value) => setStatus([...value])}>
              <ToggleGroupItem value="all" className="px-3 py-1.5 text-xs">
                All
              </ToggleGroupItem>
              <ToggleGroupItem value="active" className="px-3 py-1.5 text-xs">
                Active
              </ToggleGroupItem>
              <ToggleGroupItem value="paused" className="px-3 py-1.5 text-xs">
                Paused
              </ToggleGroupItem>
            </ToggleGroupRoot>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <SelectRoot defaultValue="7d">
            <SelectTrigger className="h-8 w-32">
              <SelectValue />
              <SelectIcon />
            </SelectTrigger>
            <SelectPortal>
              <SelectPositioner>
                <SelectPopup>
                  <SelectItem value="24h">Last 24 hours</SelectItem>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                </SelectPopup>
              </SelectPositioner>
            </SelectPortal>
          </SelectRoot>
          <Button variant="outline" size="sm">
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}

export function FilterBarAdvanced() {
  return (
    <div className="w-full rounded-lg border border-nb-border bg-nb-card p-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          {/* biome-ignore lint/a11y/noLabelWithoutControl: label wraps an accessible custom Select */}
          <label className="mb-1.5 block text-xs font-medium text-nb-muted-fg">Status</label>
          <SelectRoot defaultValue="all">
            <SelectTrigger className="h-8 w-full">
              <SelectValue />
              <SelectIcon />
            </SelectTrigger>
            <SelectPortal>
              <SelectPositioner>
                <SelectPopup>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectPopup>
              </SelectPositioner>
            </SelectPortal>
          </SelectRoot>
        </div>
        <div>
          {/* biome-ignore lint/a11y/noLabelWithoutControl: label wraps an accessible custom Select */}
          <label className="mb-1.5 block text-xs font-medium text-nb-muted-fg">Region</label>
          <SelectRoot defaultValue="all">
            <SelectTrigger className="h-8 w-full">
              <SelectValue />
              <SelectIcon />
            </SelectTrigger>
            <SelectPortal>
              <SelectPositioner>
                <SelectPopup>
                  <SelectItem value="all">All regions</SelectItem>
                  <SelectItem value="us">US</SelectItem>
                  <SelectItem value="eu">EU</SelectItem>
                  <SelectItem value="ap">AP</SelectItem>
                </SelectPopup>
              </SelectPositioner>
            </SelectPortal>
          </SelectRoot>
        </div>
        <div>
          {/* biome-ignore lint/a11y/noLabelWithoutControl: label wraps an accessible custom Select */}
          <label className="mb-1.5 block text-xs font-medium text-nb-muted-fg">Owner</label>
          <SelectRoot defaultValue="all">
            <SelectTrigger className="h-8 w-full">
              <SelectValue />
              <SelectIcon />
            </SelectTrigger>
            <SelectPortal>
              <SelectPositioner>
                <SelectPopup>
                  <SelectItem value="all">Anyone</SelectItem>
                  <SelectItem value="me">Me</SelectItem>
                  <SelectItem value="team">My team</SelectItem>
                </SelectPopup>
              </SelectPositioner>
            </SelectPortal>
          </SelectRoot>
        </div>
        <div>
          {/* biome-ignore lint/a11y/noLabelWithoutControl: label wraps an accessible custom Select */}
          <label className="mb-1.5 block text-xs font-medium text-nb-muted-fg">Date range</label>
          <SelectRoot defaultValue="7d">
            <SelectTrigger className="h-8 w-full">
              <SelectValue />
              <SelectIcon />
            </SelectTrigger>
            <SelectPortal>
              <SelectPositioner>
                <SelectPopup>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                </SelectPopup>
              </SelectPositioner>
            </SelectPortal>
          </SelectRoot>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-nb-border pt-3">
        <span className="text-xs text-nb-muted-fg">Showing 3 of 128 results</span>
        <Button variant="outline" size="sm">
          Reset filters
        </Button>
      </div>
    </div>
  );
}

export function FilterBarCompact() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex w-full flex-wrap items-center gap-2 rounded-lg border border-nb-border bg-nb-card p-3">
      <div className="relative flex-1 min-w-40">
        <Input aria-label="Search" placeholder="Search…" className="pl-3" />
      </div>
      <SelectRoot defaultValue="all">
        <SelectTrigger className="h-10 w-36">
          <SelectValue />
          <SelectIcon />
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="paused">Paused</SelectItem>
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </SelectRoot>
      <Button size="sm" variant="outline" onClick={() => setOpen(!open)} aria-expanded={open}>
        More filters
      </Button>
      <Button size="sm">Apply</Button>
      {open && (
        <div className="w-full border-t border-nb-border pt-3">
          <ToggleGroupRoot defaultValue={['active']}>
            <ToggleGroupItem value="active" className="px-3 py-1.5 text-xs">
              Active
            </ToggleGroupItem>
            <ToggleGroupItem value="paused" className="px-3 py-1.5 text-xs">
              Paused
            </ToggleGroupItem>
            <ToggleGroupItem value="archived" className="px-3 py-1.5 text-xs">
              Archived
            </ToggleGroupItem>
          </ToggleGroupRoot>
        </div>
      )}
    </div>
  );
}
