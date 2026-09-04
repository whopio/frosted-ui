'use client';

import classNames from 'classnames';
import * as React from 'react';
import { getBotAvatarEyes } from './bot-avatar.expressions';
import type { BotAvatarHandle } from './bot-avatar.handle';
import { registerBotAvatarHandle } from './bot-avatar.handle';
import { getBotAvatarIdentity } from './bot-avatar.identity';
import { botAvatarPropDefs } from './bot-avatar.props';
import { botAvatarShapePaths } from './bot-avatar.shapes';
import { botAvatarStatusExpressions } from './bot-avatar.status';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type BotAvatarOwnProps = GetPropDefTypes<typeof botAvatarPropDefs>;
interface BotAvatarProps extends PropsWithoutColor<'div'>, BotAvatarOwnProps {
  /**
   * Where the bot looks, normalized to [-1, 1] per axis (x: left→right,
   * y: up→down). Overrides `followPointer` while set. Non-finite values are
   * ignored (treated as center) rather than applied.
   */
  gaze?: { x: number; y: number };
  /**
   * A handle created with `createBotAvatarHandle()` for imperative control
   * (`blink()`, `lookAt()`), following the Base UI handle pattern.
   */
  handle?: BotAvatarHandle;
}

/** Max face deflection at full gaze, as a percentage of the avatar size. */
const GAZE_RANGE_X = 10;
const GAZE_RANGE_Y = 7;

const clampGazeAxis = (value: number) => (Number.isFinite(value) ? Math.min(1, Math.max(-1, value)) : 0);

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
    followPointer = botAvatarPropDefs.followPointer.default,
    gaze,
    handle,
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
  const hasFace = resolvedExpression !== undefined;

  // Forced blink, driven by the imperative handle's blink(). 0 = not
  // blinking; each call increments so the end-effect below re-arms even for
  // back-to-back blinks.
  const [blinkId, setBlinkId] = React.useState(0);
  const isBlinking = blinkId !== 0;
  React.useEffect(() => {
    if (blinkId === 0) return;
    // Clears just after the 340ms forced-blink animation ends.
    const endTimer = setTimeout(() => setBlinkId(0), 360);
    return () => clearTimeout(endTimer);
  }, [blinkId]);

  // Pointer tracking: the pointer's direction from the avatar center becomes
  // a gaze, reaching full deflection at ~3 avatar widths. Disabled under
  // reduced motion (continuous tracking is motion, unlike a static gaze).
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [pointerGaze, setPointerGaze] = React.useState<{ x: number; y: number } | null>(null);
  React.useEffect(() => {
    if (!followPointer || !hasFace || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPointerGaze(null);
      return;
    }
    const onPointerMove = (event: PointerEvent) => {
      const rect = rootRef.current?.getBoundingClientRect();
      // A hidden element measures 0×0; ignore it instead of producing NaN.
      if (!rect || rect.width === 0 || rect.height === 0) return;
      const range = Math.max(rect.width * 3, 160);
      setPointerGaze({
        x: clampGazeAxis((event.clientX - (rect.left + rect.width / 2)) / range),
        y: clampGazeAxis((event.clientY - (rect.top + rect.height / 2)) / range),
      });
    };
    const onPointerLeave = () => setPointerGaze(null);
    window.addEventListener('pointermove', onPointerMove);
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [followPointer, hasFace]);

  // Imperative handle (Base UI pattern): attaches while mounted, detaches on
  // unmount, and calls made with no avatar attached are ignored.
  const [handleGaze, setHandleGaze] = React.useState<{ x: number; y: number } | null>(null);
  React.useEffect(() => {
    if (handle === undefined) return;
    const detach = registerBotAvatarHandle(handle, {
      blink: () => setBlinkId((id) => id + 1),
      lookAt: (target) =>
        setHandleGaze(target === null ? null : { x: clampGazeAxis(target.x), y: clampGazeAxis(target.y) }),
    });
    return () => {
      detach();
      setHandleGaze(null);
    };
  }, [handle]);

  // Gaze priority: the declarative prop wins, then the handle's lookAt, then
  // pointer tracking. While any is active the automatic wander stills — a
  // commanded gaze and a drifting gaze fighting each other reads as the bot
  // hunting the cursor.
  const activeGaze =
    gaze !== undefined ? { x: clampGazeAxis(gaze.x), y: clampGazeAxis(gaze.y) } : (handleGaze ?? pointerGaze);

  // Eye geometry comes from the expression catalogue adjusted by the
  // precomputed per-shape face fit, which keeps eyes inside the silhouette
  // at rest. The eyes are deliberately NOT clipped by the shape, so a gaze
  // or a morph overshoot bulges past the edge instead of shearing an eye.
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
      ref={rootRef}
      className={classNames(
        'fui-BotAvatarRoot',
        className,
        `fui-r-size-${size}`,
        { 'fui-high-contrast': highContrast, 'fui-blinking': isBlinking, 'fui-gazing': activeGaze !== null },
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
      {/* Body carries the whole-avatar animations (breath, done pulse); the
          clipped shape and the face are siblings inside it, so the eyes move
          and scale with the body but are never clipped by the silhouette. */}
      <div
        className={classNames('fui-BotAvatarBody', { 'fui-with-face': eyes !== undefined })}
        style={{ '--bot-avatar-life-delay': `${lifeDelayMs}ms` } as React.CSSProperties}
      >
        <div
          className={classNames('fui-BotAvatarShape', `fui-shape-${shape}`)}
          style={
            {
              // Fallback for browsers without shape(): the inline SVG clipPath.
              // Where shape() is supported the silhouette comes from the
              // fui-shape-* class, and shape changes morph via a transition.
              '--bot-avatar-clip-fallback': `url(#${clipPathId})`,
            } as React.CSSProperties
          }
        />
        {eyes && (
          // Face carries the transitioned base pose per status; FaceMotion
          // carries the looping animations (all zero-anchored), so status
          // changes glide instead of jumping between animation frames.
          <div
            className="fui-BotAvatarFace"
            style={
              activeGaze !== null
                ? ({
                    '--bot-avatar-gaze-x': `${activeGaze.x * GAZE_RANGE_X}%`,
                    '--bot-avatar-gaze-y': `${activeGaze.y * GAZE_RANGE_Y}%`,
                  } as React.CSSProperties)
                : undefined
            }
          >
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
