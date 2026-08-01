'use client';

import { Button, Input, SelectRoot, SelectTrigger, SelectValue, SelectIcon, SelectPortal, SelectPositioner, SelectPopup, SelectItem, FieldRoot, FieldLabel, FieldControl, FieldDescription, FieldError } from '@nebula/ui';

export function FormSingleColumn() {
  return (
    <div className="w-full max-w-md">
      <div className="space-y-6">
        <FieldRoot>
          <FieldLabel>Name</FieldLabel>
          <FieldControl placeholder="Ada Lovelace" />
          <FieldDescription>The name displayed across the workspace.</FieldDescription>
        </FieldRoot>
        <FieldRoot>
          <FieldLabel>Email</FieldLabel>
          <FieldControl type="email" placeholder="ada@company.com" />
        </FieldRoot>
        <FieldRoot invalid>
          <FieldLabel>Username</FieldLabel>
          <FieldControl placeholder="ada" value="ada" />
          <FieldError>This username is already taken.</FieldError>
        </FieldRoot>
        <div className="flex justify-end">
          <Button>Save changes</Button>
        </div>
      </div>
    </div>
  );
}

export function FormFieldGroup() {
  return (
    <div className="w-full max-w-md">
      <div className="space-y-6">
        <div>
          <h4 className="mb-4 text-sm font-semibold text-nb-fg">Account details</h4>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <label className="mb-1.5 block text-sm font-medium text-nb-fg">First name</label>
              <Input placeholder="Ada" />
            </div>
            <div className="flex-1">
              <label className="mb-1.5 block text-sm font-medium text-nb-fg">Last name</label>
              <Input placeholder="Lovelace" />
            </div>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-nb-fg">Preferences</h4>
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-nb-fg">Language</label>
              <SelectRoot defaultValue="en">
                <SelectTrigger>
                  <SelectValue />
                  <SelectIcon />
                </SelectTrigger>
                <SelectPortal>
                  <SelectPositioner>
                    <SelectPopup>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                    </SelectPopup>
                  </SelectPositioner>
                </SelectPortal>
              </SelectRoot>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-nb-fg">Timezone</label>
              <SelectRoot defaultValue="utc">
                <SelectTrigger>
                  <SelectValue />
                  <SelectIcon />
                </SelectTrigger>
                <SelectPortal>
                  <SelectPositioner>
                    <SelectPopup>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="pst">Pacific (PST)</SelectItem>
                      <SelectItem value="est">Eastern (EST)</SelectItem>
                    </SelectPopup>
                  </SelectPositioner>
                </SelectPortal>
              </SelectRoot>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button>Save preferences</Button>
        </div>
      </div>
    </div>
  );
}
