'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';
import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { sliderPropDefs } from './slider.props';

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';

type SliderOwnProps = GetPropDefTypes<typeof sliderPropDefs>;
interface SliderProps
  extends Omit<PropsWithoutRefOrColor<typeof SliderPrimitive.Root>, 'children'>,
    MarginProps,
    SliderOwnProps {}

const Slider = (props: SliderProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    size = sliderPropDefs.size.default,
    variant = sliderPropDefs.variant.default,
    color = sliderPropDefs.color.default,
    highContrast = sliderPropDefs.highContrast.default,
    tabIndex,
    ...sliderProps
  } = marginRest;
  return (
    <SliderPrimitive.Root
      data-accent-color={color}
      {...sliderProps}
      className={classNames(
        'fui-SliderRoot',
        className,
        withBreakpoints(size, 'fui-r-size'),
        `fui-variant-${variant}`,
        { 'fui-high-contrast': highContrast },
        withMarginProps(marginProps),
      )}
    >
      <SliderPrimitive.Track className="fui-SliderTrack">
        <SliderPrimitive.Range
          className={classNames('fui-SliderRange', {
            'fui-high-contrast': highContrast,
          })}
          data-inverted={sliderProps.inverted ? '' : undefined}
        />
      </SliderPrimitive.Track>
      {(sliderProps.value ?? sliderProps.defaultValue ?? []).map(
        (value, index) => (
          <SliderPrimitive.Thumb
            key={index}
            className="fui-SliderThumb"
            {...(tabIndex !== undefined ? { tabIndex } : undefined)}
          />
        ),
      )}
    </SliderPrimitive.Root>
  );
};
Slider.displayName = 'Slider';

export { Slider };
export type { SliderProps };
