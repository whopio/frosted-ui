import classNames from 'classnames';
import * as React from 'react';

import { badgePropDefs } from './badge.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type BadgeOwnProps = GetPropDefTypes<typeof badgePropDefs>;
interface BadgeProps extends PropsWithoutColor<'span'>, BadgeOwnProps {}

const Badge = (props: BadgeProps) => {
  const {
    className,
    size = badgePropDefs.size.default,
    variant = badgePropDefs.variant.default,
    color = badgePropDefs.color.default,
    highContrast = badgePropDefs.highContrast.default,
    ...badgeProps
  } = props;
  return (
    <span
      data-accent-color={color}
      {...badgeProps}
      className={classNames('fui-Badge', className, `fui-r-size-${size}`, `fui-variant-${variant}`, {
        'fui-high-contrast': highContrast,
      })}
    />
  );
};
Badge.displayName = 'Badge';

export { Badge };
export type { BadgeProps };
