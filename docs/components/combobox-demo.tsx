'use client';

import { ComboboxRoot, ComboboxInput, ComboboxPopup, ComboboxList, ComboboxItem, ComboboxEmpty, ComboboxIcon, ComboboxTrigger, ComboboxPositioner, ComboboxPortal } from '@nebula/ui';

const fruits = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Grape', 'Mango'];

export function ComboboxDemo() {
  return (
    <ComboboxRoot items={fruits}>
      <div className="relative">
        <ComboboxInput placeholder="Select a fruit..." />
        <ComboboxTrigger className="pointer-events-none absolute end-0 top-1/2 -translate-y-1/2">
          <ComboboxIcon />
        </ComboboxTrigger>
      </div>
      <ComboboxPortal>
        <ComboboxPositioner>
          <ComboboxPopup>
            <ComboboxEmpty>No fruits found.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxPopup>
        </ComboboxPositioner>
      </ComboboxPortal>
    </ComboboxRoot>
  );
}
