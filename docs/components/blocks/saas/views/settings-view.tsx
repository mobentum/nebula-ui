'use client';

import {
  Button,
  FieldControl,
  FieldDescription,
  FieldLabel,
  FieldRoot,
  SelectIcon,
  SelectItem,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@nebula/ui';

export function SettingsView() {
  return (
    <div className="max-w-lg space-y-8">
      <FieldRoot>
        <FieldLabel>Workspace name</FieldLabel>
        <FieldControl placeholder="acme-corp" />
        <FieldDescription>
          Contact your admin to change workspace names in production.
        </FieldDescription>
      </FieldRoot>
      <FieldRoot>
        <FieldLabel>Default region</FieldLabel>
        <SelectRoot defaultValue="us-east">
          <SelectTrigger>
            <SelectValue />
            <SelectIcon />
          </SelectTrigger>
          <SelectPortal>
            <SelectPositioner>
              <SelectPopup>
                <SelectItem value="us-east">US East</SelectItem>
                <SelectItem value="us-west">US West</SelectItem>
                <SelectItem value="eu-central">EU Central</SelectItem>
              </SelectPopup>
            </SelectPositioner>
          </SelectPortal>
        </SelectRoot>
      </FieldRoot>
      <div className="flex items-center justify-end gap-3 border-t border-nb-border pt-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save settings</Button>
      </div>
    </div>
  );
}
