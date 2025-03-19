import classNames from 'classnames';
import * as React from 'react';
import { withBreakpoints } from '../helpers';
import { insetPropDefs } from './inset.props';

import type { GetPropDefTypes } from '../helpers';

type InsetOwnProps = GetPropDefTypes<typeof insetPropDefs>;
interface InsetProps extends React.ComponentProps<'div'>, InsetOwnProps {}

const Inset = (props: InsetProps) => {
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
  } = props;
  return (
    <div
      {...insetProps}
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
      )}
    />
  );
};
Inset.displayName = 'Inset';

export { Inset };
export type { InsetProps };
