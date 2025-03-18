import classNames from 'classnames';
import * as React from 'react';
import { GetPropDefTypes, extractMarginProps, withMarginProps } from '../helpers';
import { kbdPropDefs } from './kbd.props';

import type { MarginProps } from '../helpers';

type KbdOwnProps = GetPropDefTypes<typeof kbdPropDefs>;
interface KbdProps extends React.ComponentProps<'kbd'>, MarginProps, KbdOwnProps {}

const Kbd = (props: KbdProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { className, size = kbdPropDefs.size.default, ...kbdProps } = marginRest;
  return (
    <kbd
      {...kbdProps}
      className={classNames('fui-Kbd', className, `fui-r-size-${size}`, withMarginProps(marginProps))}
    />
  );
};
Kbd.displayName = 'Kbd';

export { Kbd };
export type { KbdProps };
