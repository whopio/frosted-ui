'use client';

import classNames from 'classnames';
import * as React from 'react';
import { botAvatarPropDefs } from './bot-avatar.props';
import { botAvatarShapePaths } from './bot-avatar.shapes';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type BotAvatarOwnProps = GetPropDefTypes<typeof botAvatarPropDefs>;
interface BotAvatarProps extends PropsWithoutColor<'div'>, BotAvatarOwnProps {}

const BotAvatar = (props: BotAvatarProps) => {
  const {
    className,
    size = botAvatarPropDefs.size.default,
    color = botAvatarPropDefs.color.default,
    highContrast = botAvatarPropDefs.highContrast.default,
    shape = botAvatarPropDefs.shape.default,
    ...rootProps
  } = props;

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
    </div>
  );
};
BotAvatar.displayName = 'BotAvatar';

export { BotAvatar };
export type { BotAvatarProps };
