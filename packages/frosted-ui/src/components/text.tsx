import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import * as React from 'react';

import { textPropDefs } from './text.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../helpers';

type TextOwnProps = GetPropDefTypes<typeof textPropDefs>;

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
type TextProps = TextOwnProps & (TextAsChildProps | TextSpanProps | TextDivProps | TextLabelProps | TextPProps);

const Text = (props: TextProps) => {
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
  } = props;
  return (
    <Slot
      data-accent-color={color}
      {...textProps}
      className={classNames(
        'fui-Text',
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
Text.displayName = 'Text';

export { Text };
export type { TextProps };
