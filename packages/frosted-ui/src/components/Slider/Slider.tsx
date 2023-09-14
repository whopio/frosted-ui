'use client';

import type * as Radix from '@radix-ui/react-primitive';
import { Range, Root, SliderThumb, Track } from '@radix-ui/react-slider';
import React, { forwardRef } from 'react';

export const Slider = forwardRef<
  React.ElementRef<typeof Root>,
  Radix.ComponentPropsWithoutRef<typeof Root>
>(({ ...props }, forwardedRef) => {
  const value = props.value || props.defaultValue;

  return (
    <Root
      ref={forwardedRef}
      className="relative flex h-[22px] w-full touch-none select-none items-center"
      {...props}
    >
      <Track className="bg-whop-stroke relative h-1.5 grow rounded-full">
        <Range className="bg-whop-field-highlight absolute h-full rounded-full" />
      </Track>
      {value?.map((_, i) => (
        <SliderThumb
          key={i}
          className="bg-whop-background flex h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-[10px] shadow-md focus:outline-none"
        >
          <div className="bg-whop-field-highlight h-1.5 w-1.5 rounded-full" />
        </SliderThumb>
      ))}
    </Root>
  );
});
