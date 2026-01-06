'use client';

import { Separator as SeparatorPrimitive } from '@base-ui/react/separator';
import classNames from 'classnames';
import * as React from 'react';

import { separatorPropDefs } from './separator.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type SeparatorOwnProps = GetPropDefTypes<typeof separatorPropDefs>;
interface SeparatorProps extends PropsWithoutColor<typeof SeparatorPrimitive>, SeparatorOwnProps {}

const Separator = (props: SeparatorProps) => {
  const {
    className,
    size = separatorPropDefs.size.default,
    color = separatorPropDefs.color.default,
    ...separatorProps
  } = props;
  return (
    <SeparatorPrimitive
      data-accent-color={color}
      {...separatorProps}
      className={classNames('fui-Separator', className, `fui-r-size-${size}`)}
    />
  );
};
Separator.displayName = 'Separator';

export { Separator };
export type { SeparatorProps };
