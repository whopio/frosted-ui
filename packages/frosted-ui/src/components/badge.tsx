import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withMarginProps } from '../helpers';
import { badgePropDefs } from './badge.props';

import type { GetPropDefTypes, MarginProps, PropsWithoutColor } from '../helpers';

type BadgeOwnProps = GetPropDefTypes<typeof badgePropDefs>;
interface BadgeProps extends PropsWithoutColor<'span'>, MarginProps, BadgeOwnProps {}

const Badge = (props: BadgeProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    size = badgePropDefs.size.default,
    variant = badgePropDefs.variant.default,
    color = badgePropDefs.color.default,
    highContrast = badgePropDefs.highContrast.default,
    ...badgeProps
  } = marginRest;
  return (
    <span
      data-accent-color={color}
      {...badgeProps}
      className={classNames(
        'fui-Badge',
        className,
        `fui-r-size-${size}`,
        `fui-variant-${variant}`,
        { 'fui-high-contrast': highContrast },
        withMarginProps(marginProps),
      )}
    />
  );
};
Badge.displayName = 'Badge';

export { Badge };
export type { BadgeProps };
