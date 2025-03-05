import classNames from 'classnames';
import * as React from 'react';
import { extractLayoutProps, extractMarginProps, withBreakpoints, withLayoutProps, withMarginProps } from '../helpers';
import { boxPropDefs } from './box.props';
import { Slot } from './slot';

import type { GetPropDefTypes, LayoutProps, MarginProps } from '../helpers';

type BoxOwnProps = GetPropDefTypes<typeof boxPropDefs>;
interface BoxProps extends React.ComponentPropsWithoutRef<'div'>, MarginProps, LayoutProps, BoxOwnProps {
  asChild?: boolean;
}

const Box = (props: BoxProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { rest: layoutRest, ...layoutProps } = extractLayoutProps(marginRest);
  const { className, asChild, display = boxPropDefs.display.default, ...boxProps } = layoutRest;
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      {...boxProps}
      className={classNames(
        'fui-Box',
        className,
        withBreakpoints(display, 'fui-r-display'),
        withLayoutProps(layoutProps),
        withMarginProps(marginProps),
      )}
    />
  );
};
Box.displayName = 'Box';

export { Box };
export type { BoxProps };
