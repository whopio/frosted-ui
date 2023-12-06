import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { badgePropDefs } from './badge.props';

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';

type BadgeElement = React.ElementRef<'span'>;
type BadgeOwnProps = GetPropDefTypes<typeof badgePropDefs>;
interface BadgeProps
  extends PropsWithoutRefOrColor<'span'>,
    MarginProps,
    BadgeOwnProps {}
const Badge = React.forwardRef<BadgeElement, BadgeProps>(
  (props, forwardedRef) => {
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
        ref={forwardedRef}
        className={classNames(
          'fui-Badge',
          className,
          withBreakpoints(size, 'fui-r-size'),
          `fui-variant-${variant}`,
          { 'fui-high-contrast': highContrast },
          withMarginProps(marginProps),
        )}
      />
    );
  },
);
Badge.displayName = 'Badge';

export { Badge };
export type { BadgeProps };
