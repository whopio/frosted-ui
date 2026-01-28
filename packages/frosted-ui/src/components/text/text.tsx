import { mergeProps, useRender } from '@base-ui/react';
import classNames from 'classnames';
import * as React from 'react';

import { textPropDefs } from './text.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type TextOwnProps = GetPropDefTypes<typeof textPropDefs>;

type TextRenderProps = {
  render?: useRender.ComponentProps<'span'>['render'];
  as?: never;
} & PropsWithoutColor<'span'>;
type TextSpanProps = {
  as?: 'span';
  render?: never;
} & PropsWithoutColor<'span'>;
type TextDivProps = {
  as: 'div';
  render?: never;
} & PropsWithoutColor<'div'>;
type TextLabelProps = {
  as: 'label';
  render?: never;
} & PropsWithoutColor<'label'>;
type TextPProps = { as: 'p'; render?: never } & PropsWithoutColor<'p'>;
type TextProps = TextOwnProps & (TextRenderProps | TextSpanProps | TextDivProps | TextLabelProps | TextPProps);

const Text = (props: TextProps) => {
  const {
    children,
    className,
    render,
    as: Tag = 'span',
    size = textPropDefs.size.default,
    weight = textPropDefs.weight.default,
    align = textPropDefs.align.default,
    trim = textPropDefs.trim.default,
    color = textPropDefs.color.default,
    highContrast = textPropDefs.highContrast.default,
    ...textProps
  } = props;

  return useRender({
    render: render ?? <Tag />,
    props: mergeProps(
      textProps as React.ComponentProps<'span'>,
      {
        'data-accent-color': color,
        className: classNames(
          'fui-Text',
          className,
          size ? `fui-r-size-${size}` : undefined,
          weight ? `fui-r-weight-${weight}` : undefined,
          align ? `fui-r-ta-${align}` : undefined,
          trim ? `fui-r-lt-${trim}` : undefined,
          { 'fui-high-contrast': highContrast },
        ),
        children,
      } as React.ComponentProps<'span'>,
    ),
    defaultTagName: 'span', // Used for TypeScript inference
  });
};
Text.displayName = 'Text';

export { Text };
export type { TextProps };
