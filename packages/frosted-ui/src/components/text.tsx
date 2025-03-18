import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withMarginProps } from '../helpers';
import { textPropDefs } from './text.props';

import type { GetPropDefTypes, MarginProps, NiceIntersection, PropsWithoutColor } from '../helpers';

type TextOwnProps = GetPropDefTypes<typeof textPropDefs>;
type CommonTextProps = NiceIntersection<MarginProps, TextOwnProps>;
type TextAsChildProps = {
  asChild?: boolean;
  as?: never;
} & PropsWithoutColor<'span'>;
type TextSpanProps = {
  as?: 'span';
  asChild?: never;
} & PropsWithoutColor<'span'>;
type TextDivProps = {
  as: 'div';
  asChild?: never;
} & PropsWithoutColor<'div'>;
type TextLabelProps = {
  as: 'label';
  asChild?: never;
} & PropsWithoutColor<'label'>;
type TextPProps = { as: 'p'; asChild?: never } & PropsWithoutColor<'p'>;
type TextProps = CommonTextProps & (TextAsChildProps | TextSpanProps | TextDivProps | TextLabelProps | TextPProps);

const Text = (props: TextProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    children,
    className,
    asChild = false,
    as: Tag = 'span',
    size = textPropDefs.size.default,
    weight = textPropDefs.weight.default,
    align = textPropDefs.align.default,
    trim = textPropDefs.trim.default,
    color = textPropDefs.color.default,
    highContrast = textPropDefs.highContrast.default,
    ...textProps
  } = marginRest;
  return (
    <Slot
      data-accent-color={color}
      {...textProps}
      className={classNames(
        'fui-Text',
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
Text.displayName = 'Text';

export { Text };
export type { TextProps };
