import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { insetPropDefs } from './inset.props';

import type { GetPropDefTypes, MarginProps } from '../helpers';

type InsetElement = React.ElementRef<'div'>;
type InsetOwnProps = GetPropDefTypes<typeof insetPropDefs>;
interface InsetProps
  extends React.ComponentPropsWithoutRef<'div'>,
    MarginProps,
    InsetOwnProps {}
const Inset = React.forwardRef<InsetElement, InsetProps>(
  (props, forwardedRef) => {
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);
    const {
      className,
      side = insetPropDefs.side.default,
      clip = insetPropDefs.clip.default,
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,
      ...insetProps
    } = marginRest;
    return (
      <div
        {...insetProps}
        ref={forwardedRef}
        className={classNames(
          'fui-Inset',
          className,
          withBreakpoints(side, 'fui-r-side'),
          withBreakpoints(clip, 'fui-r-clip'),
          withBreakpoints(p, 'fui-r-p'),
          withBreakpoints(px, 'fui-r-px'),
          withBreakpoints(py, 'fui-r-py'),
          withBreakpoints(pt, 'fui-r-pt'),
          withBreakpoints(pr, 'fui-r-pr'),
          withBreakpoints(pb, 'fui-r-pb'),
          withBreakpoints(pl, 'fui-r-pl'),
          withMarginProps(marginProps),
        )}
      />
    );
  },
);
Inset.displayName = 'Inset';

export { Inset };
export type { InsetProps };
