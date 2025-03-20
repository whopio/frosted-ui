import classNames from 'classnames';
import * as React from 'react';
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
        `fui-r-side-${side}`,
        `fui-r-clip-${clip}`,
        p ? `fui-r-p-${p}` : undefined,
        px ? `fui-r-px-${px}` : undefined,
        py ? `fui-r-py-${py}` : undefined,
        pt ? `fui-r-pt-${pt}` : undefined,
        pr ? `fui-r-pr-${pr}` : undefined,
        pb ? `fui-r-pb-${pb}` : undefined,
        pl ? `fui-r-pl-${pl}` : undefined,
      )}
    />
  );
};
Inset.displayName = 'Inset';

export { Inset };
export type { InsetProps };
