import classNames from 'classnames';
import * as React from 'react';
import { withBreakpoints } from '../helpers';
import { badgePropDefs } from './badge.props';

import type { GetPropDefTypes, PropsWithoutRefOrColor } from '../helpers';

type BadgeElement = React.ElementRef<'span'>;
type BadgeOwnProps = GetPropDefTypes<typeof badgePropDefs>;
interface BadgeProps extends PropsWithoutRefOrColor<'span'>, BadgeOwnProps {}
const Badge = React.forwardRef<BadgeElement, BadgeProps>(
  (props, forwardedRef) => {
    const {
      className,
      size = badgePropDefs.size.default,
      variant = badgePropDefs.variant.default,
      color = badgePropDefs.color.default,
      highContrast = badgePropDefs.highContrast.default,
      radius = badgePropDefs.radius.default,
      ...badgeProps
    } = props;
    return (
      <span
        data-accent-color={color}
        data-radius={radius}
        {...badgeProps}
        ref={forwardedRef}
        className={classNames(
          'rt-Badge',
          className,
          withBreakpoints(size, 'rt-r-size'),
          `rt-variant-${variant}`,
          { 'rt-high-contrast': highContrast },
        )}
      />
    );
  },
);
Badge.displayName = 'Badge';

export { Badge };
export type { BadgeProps };
