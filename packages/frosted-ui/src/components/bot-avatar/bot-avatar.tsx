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
  const targetShape = shapeProp ?? derivedIdentity?.shape ?? botAvatarPropDefs.shape.default;
  const color = colorProp ?? derivedIdentity?.color ?? botAvatarPropDefs.color.default;

  const clipPathId = React.useId();

  // A status implies a face: it maps to a default expression, which an
  // explicit `expression` prop overrides (the status motion applies either way).
  const resolvedExpression = expression ?? (status !== undefined ? botAvatarStatusExpressions[status] : undefined);
  const hasFace = resolvedExpression !== undefined;

  // Blink-masked shape change: when the shape changes while a face is shown,
  // the eyes close, the silhouette (and its face fit) swaps while they are
  // shut, and the eyes reopen. Without a face — or under reduced motion —
  // the shape swaps immediately.
  const [shape, setShape] = React.useState(targetShape);
  // 0 = not blinking; each blink increments so the end-effect below re-arms.
  const [blinkId, setBlinkId] = React.useState(0);
  const isBlinking = blinkId !== 0;

  React.useEffect(() => {
    if (targetShape === shape) return;
    if (!hasFace || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShape(targetShape);
      return;
    }
    setBlinkId((id) => id + 1);
    // Swap at ~140ms, inside the closed window of the 340ms forced blink.
    const swapTimer = setTimeout(() => setShape(targetShape), 140);
    return () => clearTimeout(swapTimer);
  }, [targetShape, shape, hasFace]);

  // Ends the blink in a separate effect: the swap above re-runs the effect
  // that started the blink (shape changes mid-blink), and a combined cleanup
  // would cancel the end timer and leave the blink class stuck on.
  React.useEffect(() => {
    if (blinkId === 0) return;
    const endTimer = setTimeout(() => setBlinkId(0), 360);
    return () => clearTimeout(endTimer);
  }, [blinkId]);

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
        { 'fui-high-contrast': highContrast, 'fui-blinking': isBlinking },
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
          // Face carries the transitioned base pose per status; FaceMotion
          // carries the looping animations (all zero-anchored), so status
          // changes glide instead of jumping between animation frames.
          <div className="fui-BotAvatarFace">
            <div className="fui-BotAvatarFaceMotion">
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
