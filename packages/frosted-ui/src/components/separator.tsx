'use client';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withBreakpoints, withMarginProps } from '../helpers';
import { separatorPropDefs } from './separator.props';

import type { GetPropDefTypes, MarginProps, PropsWithoutColor } from '../helpers';

type SeparatorOwnProps = GetPropDefTypes<typeof separatorPropDefs>;
interface SeparatorProps extends PropsWithoutColor<typeof SeparatorPrimitive.Root>, MarginProps, SeparatorOwnProps {}

const Separator = (props: SeparatorProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    size = separatorPropDefs.size.default,
    color = separatorPropDefs.color.default,
    ...separatorProps
  } = marginRest;
  return (
    <SeparatorPrimitive.Root
      data-accent-color={color}
      {...separatorProps}
      className={classNames(
        'fui-Separator',
        className,
        withBreakpoints(size, 'fui-r-size'),
        withMarginProps(marginProps),
      )}
    />
  );
};
Separator.displayName = 'Separator';

export { Separator };
export type { SeparatorProps };
