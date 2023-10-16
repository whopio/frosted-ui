import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import * as React from 'react';
import { withBreakpoints } from '../helpers';
import { headingPropDefs } from './heading.props';

import type { GetPropDefTypes, PropsWithoutRefOrColor } from '../helpers';

type HeadingElement = React.ElementRef<'h1'>;
type HeadingOwnProps = GetPropDefTypes<typeof headingPropDefs>;
type HeadingAsChildProps = {
  asChild?: boolean;
  as?: never;
} & PropsWithoutRefOrColor<'h1'>;
type HeadingAsProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  asChild?: never;
} & PropsWithoutRefOrColor<'h1'>;
type HeadingProps = HeadingOwnProps & (HeadingAsChildProps | HeadingAsProps);
const Heading = React.forwardRef<HeadingElement, HeadingProps>(
  (props, forwardedRef) => {
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
    } = props;
    return (
      <Slot
        data-accent-color={color}
        {...headingProps}
        ref={forwardedRef}
        className={classNames(
          'rt-Heading',
          className,
          withBreakpoints(size, 'rt-r-size'),
          withBreakpoints(weight, 'rt-r-weight'),
          withBreakpoints(align, 'rt-r-ta'),
          withBreakpoints(trim, 'rt-r-lt'),
          { 'rt-high-contrast': highContrast },
        )}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  },
);
Heading.displayName = 'Heading';

export { Heading };
export type { HeadingProps };
