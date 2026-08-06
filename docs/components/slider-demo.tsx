'use client';

import { useState } from 'react';
import { Slider, SliderRoot, SliderControl, SliderTrack, SliderRange, SliderThumb } from '@mobentum/nebula-ui';

export function SliderBasic() {
  const [value, setValue] = useState(50);

  return (
    <div className="w-full max-w-sm space-y-2">
      <SliderRoot value={value} onValueChange={setValue}>
        <SliderControl>
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb />
        </SliderControl>
      </SliderRoot>
      <p className="text-sm text-nb-muted-fg">Value: {value}</p>
    </div>
  );
}

export function SliderWithLabel() {
  const [value, setValue] = useState(75);

  return (
    <div className="w-full max-w-sm space-y-2">
      <SliderRoot value={value} onValueChange={setValue}>
        <SliderControl>
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb aria-label="Volume" />
        </SliderControl>
      </SliderRoot>
      <p className="text-sm text-nb-muted-fg">Value: {value}</p>
    </div>
  );
}
