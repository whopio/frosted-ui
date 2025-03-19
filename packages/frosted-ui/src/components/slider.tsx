'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';
import classNames from 'classnames';
import * as React from 'react';

import { sliderPropDefs } from './slider.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../helpers';

type SliderOwnProps = GetPropDefTypes<typeof sliderPropDefs>;
interface SliderProps extends Omit<PropsWithoutColor<typeof SliderPrimitive.Root>, 'children'>, SliderOwnProps {}

const Slider = (props: SliderProps) => {
  const {
    className,
    size = sliderPropDefs.size.default,
    variant = sliderPropDefs.variant.default,
    color = sliderPropDefs.color.default,
    highContrast = sliderPropDefs.highContrast.default,
    tabIndex,
    ...sliderProps
  } = props;
  return (
    <SliderPrimitive.Root
      data-accent-color={color}
      {...sliderProps}
      className={classNames('fui-SliderRoot', className, `fui-r-size-${size}`, `fui-variant-${variant}`, {
        'fui-high-contrast': highContrast,
      })}
    >
      <SliderPrimitive.Track className="fui-SliderTrack">
        <SliderPrimitive.Range
          className={classNames('fui-SliderRange', {
            'fui-high-contrast': highContrast,
          })}
          data-inverted={sliderProps.inverted ? '' : undefined}
        />
      </SliderPrimitive.Track>
      {(sliderProps.value ?? sliderProps.defaultValue ?? []).map((value, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className="fui-SliderThumb"
          {...(tabIndex !== undefined ? { tabIndex } : undefined)}
        />
      ))}
    </SliderPrimitive.Root>
  );
};
Slider.displayName = 'Slider';

export { Slider };
export type { SliderProps };
