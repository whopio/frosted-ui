import { mergeProps, useRender } from '@base-ui/react';
import classNames from 'classnames';
import * as React from 'react';

import { textPropDefs } from './text.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type TextOwnProps = GetPropDefTypes<typeof textPropDefs>;

interface TextProps extends TextOwnProps, PropsWithoutColor<'span'> {
  render?: useRender.ComponentProps<'span'>['render'];
}

const Text = (props: TextProps) => {
  const {
    children,
    className,
    render,
    size = textPropDefs.size.default,
    weight = textPropDefs.weight.default,
    align = textPropDefs.align.default,
    trim = textPropDefs.trim.default,
    color = textPropDefs.color.default,
    highContrast = textPropDefs.highContrast.default,
    ...textProps
  } = props;

  return useRender({
    render,
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
    defaultTagName: 'span',
  });
};
Text.displayName = 'Text';

export { Text };
export type { TextProps };
