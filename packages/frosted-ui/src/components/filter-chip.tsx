'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { filterChipPropDefs } from './filter-chip.props';

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';

type FilterChipElement = React.ElementRef<typeof CheckboxPrimitive.Root>;
type FilterChipOwnProps = GetPropDefTypes<typeof filterChipPropDefs>;
interface FilterChipProps
  extends PropsWithoutRefOrColor<typeof CheckboxPrimitive.Root>,
    MarginProps,
    FilterChipOwnProps {
  children: React.ReactNode;
}

const FilterChip = React.forwardRef<FilterChipElement, FilterChipProps>(
  (props, forwardedRef) => {
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);
    const {
      children,
      className,
      style,
      size = filterChipPropDefs.size.default,
      color = filterChipPropDefs.color.default,
      ...checkboxProps
    } = marginRest;

    return (
      <CheckboxPrimitive.Root
        data-accent-color={color}
        {...checkboxProps}
        ref={forwardedRef}
        className={classNames(
          'fui-reset',
          'fui-BaseChip',
          className,
          withBreakpoints(size, 'fui-r-size'),
          withMarginProps(marginProps),
        )}
        style={style}
      >
        {children}
      </CheckboxPrimitive.Root>
    );
  },
);
FilterChip.displayName = 'FilterChip';

export { FilterChip };
export type { FilterChipProps };
