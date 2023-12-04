import classNames from 'classnames';
import * as React from 'react';
import {
  GetPropDefTypes,
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { kbdPropDefs } from './kbd.props';

import type { MarginProps } from '../helpers';

type KbdElement = React.ElementRef<'kbd'>;
type KbdOwnProps = GetPropDefTypes<typeof kbdPropDefs>;
interface KbdProps
  extends React.ComponentPropsWithoutRef<'kbd'>,
    MarginProps,
    KbdOwnProps {}
const Kbd = React.forwardRef<KbdElement, KbdProps>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    size = kbdPropDefs.size.default,
    ...kbdProps
  } = marginRest;
  return (
    <kbd
      {...kbdProps}
      ref={forwardedRef}
      className={classNames(
        'fui-Kbd',
        className,
        withBreakpoints(size, 'fui-r-size'),
        withMarginProps(marginProps),
      )}
    />
  );
});
Kbd.displayName = 'Kbd';

export { Kbd };
export type { KbdProps };
