import classNames from 'classnames';
import * as React from 'react';

import { codePropDefs } from './code.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type CodeOwnProps = GetPropDefTypes<typeof codePropDefs>;
interface CodeProps extends PropsWithoutColor<'code'>, CodeOwnProps {}

const Code = (props: CodeProps) => {
  const {
    className,
    size = codePropDefs.size.default,
    variant = codePropDefs.variant.default,
    weight = codePropDefs.weight.default,
    color = codePropDefs.color.default,
    highContrast = codePropDefs.highContrast.default,
    ...codeProps
  } = props;
  return (
    <code
      data-accent-color={color}
      {...codeProps}
      className={classNames(
        'fui-Code',
        className,
        `fui-r-size-${size}`,
        `fui-variant-${variant}`,
        `fui-r-weight-${weight}`,
        { 'fui-high-contrast': highContrast },
      )}
    />
  );
};
Code.displayName = 'Code';

export { Code };
export type { CodeProps };
