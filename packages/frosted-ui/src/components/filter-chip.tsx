'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withMarginProps } from '../helpers';
import { filterChipPropDefs } from './filter-chip.props';

import type { GetPropDefTypes, MarginProps, PropsWithoutColor } from '../helpers';

type FilterChipOwnProps = GetPropDefTypes<typeof filterChipPropDefs>;
interface FilterChipProps extends PropsWithoutColor<typeof CheckboxPrimitive.Root>, MarginProps, FilterChipOwnProps {
  children: React.ReactNode;
}

const FilterChip = (props: FilterChipProps) => {
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
      className={classNames('fui-reset', 'fui-BaseChip', className, `fui-r-size-${size}`, withMarginProps(marginProps))}
      style={style}
    >
      {children}
    </CheckboxPrimitive.Root>
  );
};
FilterChip.displayName = 'FilterChip';

export { FilterChip };
export type { FilterChipProps };
