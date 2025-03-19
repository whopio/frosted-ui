import classNames from 'classnames';
import * as React from 'react';
import { extractLayoutProps, extractMarginProps, withLayoutProps, withMarginProps } from '../helpers';
import { Slot } from './slot';

import type { LayoutProps, MarginProps } from '../helpers';

interface BoxProps extends React.ComponentProps<'div'>, MarginProps, LayoutProps {
  asChild?: boolean;
}

const Box = (props: BoxProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { rest: layoutRest, ...layoutProps } = extractLayoutProps(marginRest);
  const { className, asChild, ...boxProps } = layoutRest;
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      {...boxProps}
      className={classNames('fui-Box', className, withLayoutProps(layoutProps), withMarginProps(marginProps))}
    />
  );
};
Box.displayName = 'Box';

export { Box };
export type { BoxProps };
