'use client';

import classNames from 'classnames';
import * as React from 'react';
import { getBotAvatarIdentity } from './bot-avatar.identity';
import { botAvatarPropDefs } from './bot-avatar.props';
import { botAvatarShapePaths } from './bot-avatar.shapes';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type BotAvatarOwnProps = GetPropDefTypes<typeof botAvatarPropDefs>;
interface BotAvatarProps extends PropsWithoutColor<'div'>, BotAvatarOwnProps {}

const BotAvatar = (props: BotAvatarProps) => {
  const {
    className,
    size = botAvatarPropDefs.size.default,
    color: colorProp,
    highContrast = botAvatarPropDefs.highContrast.default,
    shape: shapeProp,
    identity,
    notification = botAvatarPropDefs.notification.default,
    ...rootProps
  } = props;

  // Explicit `shape`/`color` props always win over identity-derived values.
  const derivedIdentity = React.useMemo(
    () => (identity !== undefined ? getBotAvatarIdentity(identity) : undefined),
    [identity],
  );
  const shape = shapeProp ?? derivedIdentity?.shape ?? botAvatarPropDefs.shape.default;
  const color = colorProp ?? derivedIdentity?.color ?? botAvatarPropDefs.color.default;

  const clipPathId = React.useId();

  return (
    <div
      data-accent-color={color}
      {...rootProps}
      className={classNames('fui-BotAvatarRoot', className, `fui-r-size-${size}`, {
        'fui-high-contrast': highContrast,
      })}
    >
      <svg className="fui-BotAvatarClipSvg" aria-hidden="true" focusable="false" width={0} height={0}>
        <defs>
          <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
            <path d={botAvatarShapePaths[shape]} />
          </clipPath>
        </defs>
      </svg>
      <div className="fui-BotAvatarShape" style={{ clipPath: `url(#${clipPathId})` }} />
      {notification && <div className="fui-BotAvatarNotification" />}
    </div>
  );
};
BotAvatar.displayName = 'BotAvatar';

export { BotAvatar };
export type { BotAvatarProps };
