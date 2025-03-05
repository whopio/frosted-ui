import classNames from 'classnames';
import * as React from 'react';
import { extractLayoutProps, extractMarginProps, withBreakpoints, withLayoutProps, withMarginProps } from '../helpers';
import { flexPropDefs } from './flex.props';
import { Slot } from './slot';

import type { GetPropDefTypes, LayoutProps, MarginProps, PropsWithoutRefOrColor } from '../helpers';

type FlexOwnProps = GetPropDefTypes<typeof flexPropDefs>;
interface FlexProps extends PropsWithoutRefOrColor<'div'>, MarginProps, LayoutProps, FlexOwnProps {
  asChild?: boolean;
}

const Flex = (props: FlexProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { rest: layoutRest, ...layoutProps } = extractLayoutProps(marginRest);
  const {
    className,
    asChild,
    display = flexPropDefs.display.default,
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
        withBreakpoints(display, 'fui-r-display'),
        withBreakpoints(direction, 'fui-r-fd'),
        withBreakpoints(align, 'fui-r-ai'),
        withBreakpoints(justify, 'fui-r-jc', { between: 'space-between' }),
        withBreakpoints(wrap, 'fui-r-fw'),
        withBreakpoints(gap, 'fui-r-gap'),
        withLayoutProps(layoutProps),
        withMarginProps(marginProps),
      )}
    />
  );
};
Flex.displayName = 'Flex';

export { Flex };
export type { FlexProps };
