import classNames from 'classnames';
import * as React from 'react';
import { extractLayoutProps, withLayoutProps } from '../helpers';
import { Slot } from './slot';

import type { LayoutProps } from '../helpers';

interface BoxProps extends React.ComponentProps<'div'>, LayoutProps {
  asChild?: boolean;
}

const Box = (props: BoxProps) => {
  const { rest: layoutRest, ...layoutProps } = extractLayoutProps(props);
  const { className, asChild, ...boxProps } = layoutRest;
  const Comp = asChild ? Slot : 'div';
  return <Comp {...boxProps} className={classNames('fui-Box', className, withLayoutProps(layoutProps))} />;
};
Box.displayName = 'Box';

export { Box };
export type { BoxProps };
