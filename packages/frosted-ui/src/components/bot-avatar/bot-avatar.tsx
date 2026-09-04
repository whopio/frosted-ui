'use client';

import classNames from 'classnames';
import * as React from 'react';
import { getBotAvatarEyes } from './bot-avatar.expressions';
import { getBotAvatarIdentity } from './bot-avatar.identity';
import { botAvatarPropDefs } from './bot-avatar.props';
import { botAvatarShapePaths } from './bot-avatar.shapes';
import { botAvatarStatusExpressions } from './bot-avatar.status';

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
    expression = botAvatarPropDefs.expression.default,
    status = botAvatarPropDefs.status.default,
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

  // A status implies a face: it maps to a default expression, which an
  // explicit `expression` prop overrides (the status motion applies either way).
  const resolvedExpression = expression ?? (status !== undefined ? botAvatarStatusExpressions[status] : undefined);

  // Eyes are rendered inside the clipped body so the same shape path clips
  // them — they can never escape the silhouette. Geometry comes from the
  // expression catalogue adjusted by the precomputed per-shape face fit.
  const eyes = resolvedExpression !== undefined ? getBotAvatarEyes(resolvedExpression, shape) : undefined;

  // Desynchronize the idle animations (blink, drift, breath) across
  // instances with a stable per-instance negative delay, so a roster of
  // avatars doesn't blink in lockstep.
  const lifeDelayMs = React.useMemo(() => {
    let hash = 0x811c9dc5;
    for (let i = 0; i < clipPathId.length; i++) {
      hash ^= clipPathId.charCodeAt(i);
      hash = Math.imul(hash, 0x01000193) >>> 0;
    }
    return -(hash % 5200);
  }, [clipPathId]);

  return (
    <div
      data-accent-color={color}
      {...rootProps}
      className={classNames(
        'fui-BotAvatarRoot',
        className,
        `fui-r-size-${size}`,
        { 'fui-high-contrast': highContrast },
        status !== undefined && `fui-status-${status}`,
      )}
    >
      <svg className="fui-BotAvatarClipSvg" aria-hidden="true" focusable="false" width={0} height={0}>
        <defs>
          <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
            <path d={botAvatarShapePaths[shape]} />
          </clipPath>
        </defs>
      </svg>
      <div
        className={classNames('fui-BotAvatarShape', { 'fui-with-face': eyes !== undefined })}
        style={
          {
            clipPath: `url(#${clipPathId})`,
            '--bot-avatar-life-delay': `${lifeDelayMs}ms`,
          } as React.CSSProperties
        }
      >
        {eyes && (
          <div className="fui-BotAvatarFace">
            {eyes.map((eye, index) => (
              <span
                key={index}
                className="fui-BotAvatarEye"
                style={{
                  left: `${(eye.cx - eye.w / 2) * 100}%`,
                  top: `${(eye.cy - eye.h / 2) * 100}%`,
                  width: `${eye.w * 100}%`,
                  height: `${eye.h * 100}%`,
                  transform: `rotate(${eye.tilt}deg)`,
                }}
              />
            ))}
          </div>
        )}
      </div>
      {notification && <div className="fui-BotAvatarNotification" />}
    </div>
  );
};
BotAvatar.displayName = 'BotAvatar';

export { BotAvatar };
export type { BotAvatarProps };
