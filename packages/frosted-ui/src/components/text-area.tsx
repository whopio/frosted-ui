import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { textAreaPropDefs } from './text-area.props';

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';

type TextAreaElement = React.ElementRef<'textarea'>;
type TextAreaOwnProps = GetPropDefTypes<typeof textAreaPropDefs>;
interface TextAreaProps
  extends Omit<PropsWithoutRefOrColor<'textarea'>, 'size'>,
    MarginProps,
    TextAreaOwnProps {}
const TextArea = React.forwardRef<TextAreaElement, TextAreaProps>(
  (props, forwardedRef) => {
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);
    const {
      className,
      size = textAreaPropDefs.size.default,
      variant = textAreaPropDefs.variant.default,
      color = textAreaPropDefs.color.default,
      style,
      ...textAreaProps
    } = marginRest;
    return (
      <div
        data-accent-color={color}
        style={style}
        className={classNames(
          'fui-TextAreaRoot',
          className,
          withBreakpoints(size, 'fui-r-size'),
          `fui-variant-${variant}`,
          withMarginProps(marginProps),
        )}
      >
        <textarea
          className="fui-TextAreaInput"
          ref={forwardedRef}
          {...textAreaProps}
        />
        <div className="fui-TextAreaChrome" />
      </div>
    );
  },
);
TextArea.displayName = 'TextArea';

export { TextArea };
export type { TextAreaProps };
