import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { textPropDefs } from './text.props';

import type {
  GetPropDefTypes,
  MarginProps,
  NiceIntersection,
  PropsWithoutRefOrColor,
} from '../helpers';

type TextElement = React.ElementRef<'span'>;
type TextOwnProps = GetPropDefTypes<typeof textPropDefs>;
type CommonTextProps = NiceIntersection<MarginProps, TextOwnProps>;
type TextAsChildProps = {
  asChild?: boolean;
  as?: never;
} & PropsWithoutRefOrColor<'span'>;
type TextSpanProps = {
  as?: 'span';
  asChild?: never;
} & PropsWithoutRefOrColor<'span'>;
type TextDivProps = {
  as: 'div';
  asChild?: never;
} & PropsWithoutRefOrColor<'div'>;
type TextLabelProps = {
  as: 'label';
  asChild?: never;
} & PropsWithoutRefOrColor<'label'>;
type TextPProps = { as: 'p'; asChild?: never } & PropsWithoutRefOrColor<'p'>;
type TextProps = CommonTextProps &
  (
    | TextAsChildProps
    | TextSpanProps
    | TextDivProps
    | TextLabelProps
    | TextPProps
  );

const Text = React.forwardRef<TextElement, TextProps>((props, forwardedRef) => {
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
      ref={forwardedRef}
      className={classNames(
        'fui-Text',
        className,
        withBreakpoints(size, 'fui-r-size'),
        withBreakpoints(weight, 'fui-r-weight'),
        withBreakpoints(align, 'fui-r-ta'),
        withBreakpoints(trim, 'fui-r-lt'),
        { 'fui-high-contrast': highContrast },
        withMarginProps(marginProps),
      )}
    >
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot>
  );
});
Text.displayName = 'Text';

export { Text };
export type { TextProps };
