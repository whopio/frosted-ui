'use client';

import { Slider as SliderPrimitive } from '@base-ui/react/slider';
import classNames from 'classnames';
import * as React from 'react';

import { sliderPropDefs } from './slider.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type SliderOwnProps = GetPropDefTypes<typeof sliderPropDefs>;
type SliderProps = Omit<PropsWithoutColor<typeof SliderPrimitive.Root>, 'children' | 'className' | 'render'> &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color' | 'defaultValue'> &
  SliderOwnProps & {
    /** Ref to access the first thumb's hidden input element */
    inputRef?: React.Ref<HTMLInputElement>;
  };

const Slider = (props: SliderProps) => {
  const {
    className,
    size = sliderPropDefs.size.default,
    color = sliderPropDefs.color.default,
    highContrast = sliderPropDefs.highContrast.default,
    thumbCollisionBehavior = 'swap',
    inputRef,
    ...sliderProps
  } = props;

  // Normalize value to array for thumb rendering
  const values = React.useMemo(() => {
    const val = sliderProps.value ?? sliderProps.defaultValue;
    if (val === undefined) return [0];
    return Array.isArray(val) ? val : [val];
  }, [sliderProps.value, sliderProps.defaultValue]);

  return (
    <SliderPrimitive.Root
      data-accent-color={color}
      {...sliderProps}
      thumbCollisionBehavior={thumbCollisionBehavior}
      className={classNames('fui-SliderRoot', className, `fui-r-size-${size}`, {
        'fui-high-contrast': highContrast,
      })}
    >
      <SliderPrimitive.Control className="fui-SliderControl">
        <SliderPrimitive.Track className="fui-SliderTrack">
          <SliderPrimitive.Indicator
            className={classNames('fui-SliderRange', {
              'fui-high-contrast': highContrast,
            })}
          />
          {values.map((_, index) => (
            <SliderPrimitive.Thumb
              key={index}
              index={index}
              className="fui-SliderThumb"
              inputRef={index === 0 ? inputRef : undefined}
            />
          ))}
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
};
Slider.displayName = 'Slider';

export { Slider };
export type { SliderProps };
