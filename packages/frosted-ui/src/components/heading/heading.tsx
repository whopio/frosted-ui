import { mergeProps, useRender } from '@base-ui/react';
import classNames from 'classnames';
import * as React from 'react';

import { headingPropDefs } from './heading.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type HeadingOwnProps = GetPropDefTypes<typeof headingPropDefs>;

type HeadingRenderProps = {
  render?: useRender.ComponentProps<'h1'>['render'];
  as?: never;
} & PropsWithoutColor<'h1'>;
type HeadingAsProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  render?: never;
} & PropsWithoutColor<'h1'>;
type HeadingProps = HeadingOwnProps & (HeadingRenderProps | HeadingAsProps);

const Heading = (props: HeadingProps) => {
  const {
    children,
    className,
    render,
    as: Tag = 'h1',
    size = headingPropDefs.size.default,
    weight = headingPropDefs.weight.default,
    align = headingPropDefs.align.default,
    trim = headingPropDefs.trim.default,
    color = headingPropDefs.color.default,
    highContrast = headingPropDefs.highContrast.default,
    ...headingProps
  } = props;

  return useRender({
    render: render ?? <Tag />,
    props: mergeProps(
      headingProps as React.ComponentProps<'h1'>,
      {
        'data-accent-color': color,
        className: classNames(
          'fui-Heading',
          className,
          size ? `fui-r-size-${size}` : undefined,
          weight ? `fui-r-weight-${weight}` : undefined,
          align ? `fui-r-ta-${align}` : undefined,
          trim ? `fui-r-lt-${trim}` : undefined,
          { 'fui-high-contrast': highContrast },
        ),
        children,
      } as React.ComponentProps<'h1'>,
    ),
    defaultTagName: 'h1',
  });
};
Heading.displayName = 'Heading';

export { Heading };
export type { HeadingProps };
