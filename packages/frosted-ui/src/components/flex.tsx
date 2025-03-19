import classNames from 'classnames';
import * as React from 'react';
import { extractLayoutProps, withBreakpoints, withLayoutProps } from '../helpers';
import { flexPropDefs } from './flex.props';
import { Slot } from './slot';

import type { GetPropDefTypes, LayoutProps, PropsWithoutColor } from '../helpers';

type FlexOwnProps = GetPropDefTypes<typeof flexPropDefs>;
interface FlexProps extends PropsWithoutColor<'div'>, LayoutProps, FlexOwnProps {
  asChild?: boolean;
}

const Flex = (props: FlexProps) => {
  const { rest: layoutRest, ...layoutProps } = extractLayoutProps(props);
  const {
    className,
    asChild,
    direction = flexPropDefs.direction.default,
    align = flexPropDefs.align.default,
    justify = flexPropDefs.justify.default,
    wrap = flexPropDefs.wrap.default,
    gap = flexPropDefs.gap.default,
    ...flexProps
  } = layoutRest;
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      {...flexProps}
      className={classNames(
        'fui-Flex',
        className,
        withBreakpoints(direction, 'fui-r-fd'),
        withBreakpoints(align, 'fui-r-ai'),
        withBreakpoints(justify, 'fui-r-jc', { between: 'space-between' }),
        withBreakpoints(wrap, 'fui-r-fw'),
        withBreakpoints(gap, 'fui-r-gap'),
        withLayoutProps(layoutProps),
      )}
    />
  );
};
Flex.displayName = 'Flex';

export { Flex };
export type { FlexProps };
