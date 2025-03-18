import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withMarginProps } from '../helpers';
import { headingPropDefs } from './heading.props';

import type { GetPropDefTypes, MarginProps, NiceIntersection, PropsWithoutColor } from '../helpers';

type HeadingOwnProps = GetPropDefTypes<typeof headingPropDefs>;
type CommonHeadingProps = NiceIntersection<MarginProps, HeadingOwnProps>;
type HeadingAsChildProps = {
  asChild?: boolean;
  as?: never;
} & PropsWithoutColor<'h1'>;
type HeadingAsProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  asChild?: never;
} & PropsWithoutColor<'h1'>;
type HeadingProps = CommonHeadingProps & (HeadingAsChildProps | HeadingAsProps);

const Heading = (props: HeadingProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    children,
    className,
    asChild = false,
    as: Tag = 'h1',
    size = headingPropDefs.size.default,
    weight = headingPropDefs.weight.default,
    align = headingPropDefs.align.default,
    trim = headingPropDefs.trim.default,
    color = headingPropDefs.color.default,
    highContrast = headingPropDefs.highContrast.default,
    ...headingProps
  } = marginRest;
  return (
    <Slot
      data-accent-color={color}
      {...headingProps}
      className={classNames(
        'fui-Heading',
        className,
        `fui-r-size-${size}`,
        `fui-r-weight-${weight}`,
        `fui-r-ta-${align}`,
        `fui-r-lt-${trim}`,
        { 'fui-high-contrast': highContrast },
        withMarginProps(marginProps),
      )}
    >
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot>
  );
};
Heading.displayName = 'Heading';

export { Heading };
export type { HeadingProps };
