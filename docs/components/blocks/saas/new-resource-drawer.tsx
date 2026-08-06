'use client';

import {
  Button,
  CheckboxIndicator,
  CheckboxRoot,
  DividerLine,
  DividerRoot,
  DrawerContent,
  DrawerDescription,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  FieldControl,
  FieldDescription,
  FieldLabel,
  FieldRoot,
  RadioGroup,
  RadioIndicator,
  RadioItem,
  SelectIcon,
  SelectItem,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SwitchRoot,
  SwitchThumb,
  Textarea,
} from '@mobentum/nebula-ui';

export function NewResourceDrawer() {
  return (
    <DrawerRoot>
      <DrawerTrigger
        render={
          <Button size="sm">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers */}
            <svg
              className="-ml-1 mr-1.5 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
            New
          </Button>
        }
      />
      <DrawerContent>
        <DrawerTitle>Create new resource</DrawerTitle>
        <DrawerDescription>
          Set up a new project in your workspace. Most fields are optional.
        </DrawerDescription>

        <div className="mt-6 space-y-5">
          <FieldRoot>
            <FieldLabel>Name</FieldLabel>
            <FieldControl placeholder="e.g. api-gateway" />
            <FieldDescription>A unique name for this resource.</FieldDescription>
          </FieldRoot>

          <FieldRoot>
            <FieldLabel>Type</FieldLabel>
            <SelectRoot defaultValue="app">
              <SelectTrigger>
                <SelectValue />
                <SelectIcon />
              </SelectTrigger>
              <SelectPortal>
                <SelectPositioner>
                  <SelectPopup>
                    <SelectItem value="app">Application</SelectItem>
                    <SelectItem value="service">Service</SelectItem>
                    <SelectItem value="function">Function</SelectItem>
                  </SelectPopup>
                </SelectPositioner>
              </SelectPortal>
            </SelectRoot>
          </FieldRoot>

          <FieldRoot>
            <FieldLabel>Region</FieldLabel>
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

          <FieldRoot>
            <FieldLabel>Description</FieldLabel>
            <Textarea className="mt-1.5 min-h-24" placeholder="What does this resource do?" />
          </FieldRoot>

          <div>
            <p className="mb-2 text-sm font-medium text-nb-fg">Visibility</p>
            <RadioGroup defaultValue="private">
              <RadioItem value="private">
                <RadioIndicator />
                <span className="text-sm text-nb-fg">Private</span>
              </RadioItem>
              <RadioItem value="team">
                <RadioIndicator />
                <span className="text-sm text-nb-fg">Team</span>
              </RadioItem>
              <RadioItem value="public">
                <RadioIndicator />
                <span className="text-sm text-nb-fg">Public</span>
              </RadioItem>
            </RadioGroup>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-nb-border p-3">
            <div>
              <p className="text-sm font-medium text-nb-fg">Enable monitoring</p>
              <p className="text-xs text-nb-muted-fg">Track metrics and health.</p>
            </div>
            <SwitchRoot defaultChecked>
              <SwitchThumb />
            </SwitchRoot>
          </div>

          <div className="flex items-center gap-2.5 text-sm text-nb-fg">
            <CheckboxRoot id="resource-terms">
              <CheckboxIndicator />
            </CheckboxRoot>
            <label htmlFor="resource-terms">I agree to the resource terms</label>
          </div>
        </div>

        <DividerRoot className="my-6">
          <DividerLine />
        </DividerRoot>

        <div className="flex items-center justify-end gap-3">
          <DrawerTrigger render={<Button variant="outline">Cancel</Button>} />
          <Button>Create resource</Button>
        </div>
      </DrawerContent>
    </DrawerRoot>
  );
}
