import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { codePropDefs } from './code.props';

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';

type CodeElement = React.ElementRef<'code'>;
type CodeOwnProps = GetPropDefTypes<typeof codePropDefs>;
interface CodeProps
  extends PropsWithoutRefOrColor<'code'>,
    MarginProps,
    CodeOwnProps {}
const Code = React.forwardRef<CodeElement, CodeProps>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    size = codePropDefs.size.default,
    variant = codePropDefs.variant.default,
    weight = codePropDefs.weight.default,
    color = codePropDefs.color.default,
    highContrast = codePropDefs.highContrast.default,
    ...codeProps
  } = marginRest;
  return (
    <code
      data-accent-color={color}
      {...codeProps}
      ref={forwardedRef}
      className={classNames(
        'fui-Code',
        className,
        withBreakpoints(size, 'fui-r-size'),
        `fui-variant-${variant}`,
        withBreakpoints(weight, 'fui-r-weight'),
        { 'fui-high-contrast': highContrast },
        withMarginProps(marginProps),
      )}
    />
  );
});
Code.displayName = 'Code';

export { Code };
export type { CodeProps };
