'use client';

import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';
import classNames from 'classnames';
import * as React from 'react';

import { filterChipPropDefs } from './filter-chip.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type FilterChipOwnProps = GetPropDefTypes<typeof filterChipPropDefs>;
type FilterChipProps = Omit<PropsWithoutColor<typeof CheckboxPrimitive.Root>, 'className' | 'render' | 'nativeButton'> &
  Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'> &
  FilterChipOwnProps & {
    children: React.ReactNode;
  };

const FilterChip = (props: FilterChipProps) => {
  const {
    children,
    className,
    style,
    size = filterChipPropDefs.size.default,
    color = filterChipPropDefs.color.default,
    ...checkboxProps
  } = props;

  return (
    <CheckboxPrimitive.Root
      data-accent-color={color}
      {...checkboxProps}
      className={classNames('fui-reset', 'fui-BaseChip', className, `fui-r-size-${size}`)}
      style={style}
    >
      {children}
    </CheckboxPrimitive.Root>
  );
};
FilterChip.displayName = 'FilterChip';

export { FilterChip };
export type { FilterChipProps };
