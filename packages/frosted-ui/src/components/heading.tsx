import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import * as React from 'react';

import { headingPropDefs } from './heading.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../helpers';

type HeadingOwnProps = GetPropDefTypes<typeof headingPropDefs>;

type HeadingAsChildProps = {
  asChild?: boolean;
  as?: never;
} & PropsWithoutColor<'h1'>;
type HeadingAsProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  asChild?: never;
} & PropsWithoutColor<'h1'>;
type HeadingProps = HeadingOwnProps & (HeadingAsChildProps | HeadingAsProps);

const Heading = (props: HeadingProps) => {
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
      className={classNames(
        'fui-Heading',
        className,
        size ? `fui-r-size-${size}` : undefined,
        weight ? `fui-r-weight-${weight}` : undefined,
        align ? `fui-r-ta-${align}` : undefined,
        trim ? `fui-r-lt-${trim}` : undefined,
        { 'fui-high-contrast': highContrast },
      )}
    >
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot>
  );
};
Heading.displayName = 'Heading';

export { Heading };
export type { HeadingProps };
