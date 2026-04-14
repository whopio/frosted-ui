'use client';

import * as React from 'react';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const DIRECTION_LOCK_DISTANCE = 10;
const DISMISS_DISTANCE = 150;
const DISMISS_VELOCITY = 500;
const SNAP_DURATION = 200;
const SNAP_EASING = 'cubic-bezier(0.25, 1, 0.5, 1)';
const MIN_SCALE = 0.85;
const VELOCITY_SAMPLES = 5;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PullToDismissOptions {
  contentRef: React.RefObject<HTMLElement | null>;
  backdropRef: React.RefObject<HTMLElement | null>;
  getZoom: () => number;
  onClose: () => void;
  disabled?: boolean;
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

function usePullToDismiss({
  contentRef,
  backdropRef,
  getZoom,
  onClose,
  disabled = false,
}: PullToDismissOptions) {
  const pointerIdRef = React.useRef<number | null>(null);
  const startYRef = React.useRef(0);
  const startXRef = React.useRef(0);
  const directionRef = React.useRef<'none' | 'vertical' | 'horizontal'>('none');
  const velocityHistoryRef = React.useRef<{ y: number; t: number }[]>([]);
  const isPullingRef = React.useRef(false);
  const animationRef = React.useRef<Animation | null>(null);
  const dragTargetRef = React.useRef<HTMLElement | null>(null);

  const cleanup = React.useCallback(() => {
    pointerIdRef.current = null;
    directionRef.current = 'none';
    velocityHistoryRef.current = [];
    isPullingRef.current = false;
    // dragTargetRef is intentionally NOT cleared here — snapBack() and
    // clearTransform() still need it after cleanup runs in handlePointerUp.
  }, []);

  const applyTransform = React.useCallback(
    (deltaY: number) => {
      const target = dragTargetRef.current;
      const backdrop = backdropRef.current;
      if (!target) return;

      const progress = Math.min(Math.abs(deltaY) / DISMISS_DISTANCE, 1);
      const scale = 1 - progress * (1 - MIN_SCALE);

      target.style.transform = `translateY(${deltaY}px) scale(${scale})`;

      if (backdrop) {
        backdrop.style.opacity = String(1 - progress * 0.6);
      }
    },
    [backdropRef],
  );

  const clearTransform = React.useCallback(() => {
    const content = contentRef.current;
    const backdrop = backdropRef.current;
    if (dragTargetRef.current) {
      dragTargetRef.current.style.transform = '';
      dragTargetRef.current = null;
    }
    if (content) {
      content.removeAttribute('data-pulling');
    }
    if (backdrop) {
      backdrop.style.opacity = '';
      backdrop.removeAttribute('data-pulling');
    }
  }, [contentRef, backdropRef]);

  const snapBack = React.useCallback(() => {
    const target = dragTargetRef.current;
    const content = contentRef.current;
    const backdrop = backdropRef.current;

    if (!target) {
      clearTransform();
      return;
    }

    const currentTransform = target.style.transform;
    const currentBackdropOpacity = backdrop?.style.opacity ?? '1';

    // Clear inline styles BEFORE starting the animations. The WAAPI
    // animation layer overrides computed values during playback, so the
    // cleared inline styles are invisible while the animation runs.
    // When the animation finishes and is cancelled, the underlying
    // computed values are already clean — no flash.
    target.style.transform = '';
    if (backdrop) {
      backdrop.style.opacity = '';
    }

    const targetAnim = target.animate(
      [
        { transform: currentTransform },
        { transform: 'translateY(0) scale(1)' },
      ],
      { duration: SNAP_DURATION, easing: SNAP_EASING },
    );

    let backdropAnim: Animation | undefined;
    if (backdrop) {
      backdropAnim = backdrop.animate(
        [{ opacity: currentBackdropOpacity }, { opacity: '1' }],
        { duration: SNAP_DURATION, easing: SNAP_EASING },
      );
    }

    animationRef.current = targetAnim;

    targetAnim.finished.then(() => {
      animationRef.current = null;
      targetAnim.cancel();
      backdropAnim?.cancel();
      content?.removeAttribute('data-pulling');
      backdrop?.removeAttribute('data-pulling');
      dragTargetRef.current = null;
    }).catch(() => {
      // Animation cancelled — cleanup already handled
    });
  }, [contentRef, backdropRef, clearTransform]);

  const computeVelocity = React.useCallback(() => {
    const history = velocityHistoryRef.current;
    if (history.length < 2) return 0;
    const first = history[0];
    const last = history[history.length - 1];
    const dt = last.t - first.t;
    if (dt === 0) return 0;
    return ((last.y - first.y) / dt) * 1000;
  }, []);

  React.useEffect(() => {
    if (disabled) return;
    const el = contentRef.current;
    if (!el) return;

    const handlePointerDown = (event: PointerEvent) => {
      // Touch-only gesture — ignore mouse and pen
      if (event.pointerType !== 'touch') return;
      if (pointerIdRef.current !== null) return;

      // Only activate when touching the visual content (morph target) inside
      // an item — not controls, backdrop, or the item's empty padding area.
      const target = event.target as HTMLElement | null;
      if (
        !target?.closest('[data-lightbox-morph], .fui-LightboxItem img, .fui-LightboxItem video')
      ) return;

      // Don't activate if zoomed
      if (getZoom() > 1) return;

      // Resolve the drag target: the active item element
      const activeItem = target?.closest('.fui-LightboxItem') as HTMLElement | null;
      if (!activeItem) return;

      // Cancel any in-progress snap-back
      if (animationRef.current) {
        animationRef.current.cancel();
        animationRef.current = null;
        clearTransform();
      }

      dragTargetRef.current = activeItem;
      pointerIdRef.current = event.pointerId;
      startYRef.current = event.clientY;
      startXRef.current = event.clientX;
      directionRef.current = 'none';
      velocityHistoryRef.current = [{ y: event.clientY, t: event.timeStamp }];
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerId !== pointerIdRef.current) return;
      // Abort if zoom changed mid-gesture
      if (getZoom() > 1) {
        if (isPullingRef.current) {
          isPullingRef.current = false;
          snapBack();
        }
        cleanup();
        return;
      }

      const deltaX = event.clientX - startXRef.current;
      const deltaY = event.clientY - startYRef.current;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      // Direction lock: determine gesture direction after a small movement
      if (directionRef.current === 'none') {
        const totalDist = Math.hypot(deltaX, deltaY);
        if (totalDist < DIRECTION_LOCK_DISTANCE) return;
        directionRef.current = absY >= absX ? 'vertical' : 'horizontal';
        if (directionRef.current === 'horizontal') {
          cleanup();
          return;
        }
      }

      if (directionRef.current !== 'vertical') return;

      // We're pulling — track velocity and apply visual feedback
      if (!isPullingRef.current) {
        isPullingRef.current = true;
        el.setAttribute('data-pulling', '');
        backdropRef.current?.setAttribute('data-pulling', '');
        el.setPointerCapture(event.pointerId);
      }

      // Track velocity samples
      const history = velocityHistoryRef.current;
      history.push({ y: event.clientY, t: event.timeStamp });
      if (history.length > VELOCITY_SAMPLES) {
        history.shift();
      }

      applyTransform(deltaY);
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (event.pointerId !== pointerIdRef.current) return;

      const wasPulling = isPullingRef.current;
      const deltaY = event.clientY - startYRef.current;
      const velocity = computeVelocity();

      cleanup();

      if (!wasPulling) return;

      const absDeltaY = Math.abs(deltaY);
      const absVelocity = Math.abs(velocity);
      const sameDirection = (deltaY > 0 && velocity > 0) || (deltaY < 0 && velocity < 0);

      if (
        absDeltaY >= DISMISS_DISTANCE ||
        (absVelocity >= DISMISS_VELOCITY && sameDirection)
      ) {
        el.removeAttribute('data-pulling');
        backdropRef.current?.removeAttribute('data-pulling');
        dragTargetRef.current = null;
        onClose();
      } else {
        snapBack();
      }
    };

    const handlePointerCancel = (event: PointerEvent) => {
      if (event.pointerId !== pointerIdRef.current) return;
      const wasPulling = isPullingRef.current;
      cleanup();
      if (wasPulling) {
        snapBack();
      }
    };

    // Prevent the browser from claiming the gesture for native scrolling
    // while we're tracking a potential vertical pull. Without this, browsers
    // fire pointercancel when touch-action allows panning.
    const handleTouchMove = (event: TouchEvent) => {
      if (pointerIdRef.current === null) return;
      if (directionRef.current === 'horizontal') return;
      if (event.touches.length === 1) {
        event.preventDefault();
      }
    };

    el.addEventListener('pointerdown', handlePointerDown);
    el.addEventListener('pointermove', handlePointerMove);
    el.addEventListener('pointerup', handlePointerUp);
    el.addEventListener('pointercancel', handlePointerCancel);
    el.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      el.removeEventListener('pointerdown', handlePointerDown);
      el.removeEventListener('pointermove', handlePointerMove);
      el.removeEventListener('pointerup', handlePointerUp);
      el.removeEventListener('pointercancel', handlePointerCancel);
      el.removeEventListener('touchmove', handleTouchMove);
      if (animationRef.current) {
        animationRef.current.cancel();
        animationRef.current = null;
      }
      clearTransform();
    };
  }, [disabled, contentRef, backdropRef, getZoom, onClose, applyTransform, clearTransform, snapBack, cleanup, computeVelocity]);
}

export { usePullToDismiss };
export type { PullToDismissOptions };
