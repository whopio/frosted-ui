'use client';

import * as React from 'react';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function pointerDistance(a: PointerEvent, b: PointerEvent): number {
  return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
}

/**
 * Multiplicative zoom scaling: value * (1 + |delta|/factor) ^ sign(delta).
 * Clamped so a single event can at most double/halve the zoom.
 */
function scaleZoom(value: number, delta: number, factor: number): number {
  return value * Math.min(1 + Math.abs(delta / factor), 2) ** Math.sign(delta);
}

// ---------------------------------------------------------------------------
// Config type
// ---------------------------------------------------------------------------

interface ZoomGestureConfig {
  minZoom: number;
  maxZoom: number;
  zoomStep: number;
  scrollToZoom: boolean;
  wheelSensitivity: number;
  keyboardPanDistance: number;
  doubleClickMaxStops: number;
  doubleClickDelay: number;
}

// ---------------------------------------------------------------------------
// Actions — called by the gesture hook, implemented by the Zoom component
// ---------------------------------------------------------------------------

interface ZoomGestureActions {
  getZoom: () => number;
  getOffsets: () => { x: number; y: number };
  zoomIn: () => void;
  zoomOut: () => void;
  changeZoom: (target: number, rapid: boolean, dx?: number, dy?: number, overscroll?: boolean) => void;
  changeOffsets: (dx: number, dy: number, overscroll?: boolean) => void;
  setDragging: (dragging: boolean) => void;
  snapToBounds: () => void;
  snapOffsetsToBounds: () => void;
  /** Animate offsets with momentum deceleration to a final position. */
  momentumPan: (targetX: number, targetY: number) => void;
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

function useZoomGestures(
  containerRef: React.RefObject<HTMLElement | null>,
  wrapperRef: React.RefObject<HTMLElement | null>,
  config: ZoomGestureConfig,
  actions: ZoomGestureActions,
  disabled: boolean,
  contentElementRef?: React.RefObject<HTMLElement | null>,
  /** Current zoom level — used to decide whether the wheel listener must be
   *  non-passive (zoomed → need preventDefault for pan) or can be passive
   *  (1× → preserve Safari compositor-thread momentum scrolling). */
  currentZoom = 1,
) {
  const activePointers = React.useRef<PointerEvent[]>([]);
  const lastPointerDown = React.useRef(0);
  const hadPinch = React.useRef(false);

  // Tap detection for double-tap: track whether the previous single-finger
  // interaction was a stationary tap (not a drag/pinch/pull).
  const TAP_MOVE_THRESHOLD = 10;
  const DOUBLE_TAP_DISTANCE = 50;
  const lastWasTap = React.useRef(false);
  const lastTapPos = React.useRef<{ x: number; y: number } | null>(null);
  const tapCandidate = React.useRef(false);
  const tapStartPos = React.useRef<{ x: number; y: number } | null>(null);
  const pinchState = React.useRef<{
    initialDistance: number;
    initialZoom: number;
  } | undefined>(undefined);
  const zoomingTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Velocity tracking for momentum pan on touch release.
  // Stores recent pointer positions within a ~100ms window.
  const velocityTracker = React.useRef<Array<{ x: number; y: number; t: number }>>([]);
  const VELOCITY_WINDOW = 100;
  const MOMENTUM_MULTIPLIER = 300;
  const MOMENTUM_THRESHOLD = 50;

  // Stable refs so event listeners always see latest values
  const configRef = React.useRef(config);
  configRef.current = config;
  const actionsRef = React.useRef(actions);
  actionsRef.current = actions;

  const translateCoordinates = React.useCallback(
    (event: { clientX: number; clientY: number }): [number, number] => {
      const el = containerRef.current;
      if (!el) return [0, 0];
      const rect = el.getBoundingClientRect();
      return [
        event.clientX - rect.left - rect.width / 2,
        event.clientY - rect.top - rect.height / 2,
      ];
    },
    [containerRef],
  );

  // -------------------------------------------------------------------
  // Pointer events — pinch, drag, double-click/tap
  // -------------------------------------------------------------------

  const clearPointer = React.useCallback((id: number) => {
    const arr = activePointers.current;
    const idx = arr.findIndex((p) => p.pointerId === id);
    if (idx !== -1) arr.splice(idx, 1);
  }, []);

  const replacePointer = React.useCallback(
    (event: PointerEvent) => {
      clearPointer(event.pointerId);
      activePointers.current.push(event);
    },
    [clearPointer],
  );

  const setZooming = React.useCallback(
    (active: boolean) => {
      const el = contentElementRef?.current;
      if (!el) return;
      if (active) {
        if (zoomingTimerRef.current) {
          clearTimeout(zoomingTimerRef.current);
          zoomingTimerRef.current = null;
        }
        el.setAttribute('data-zooming', '');
      } else {
        // Delay removal to cover the snap-back animation period
        zoomingTimerRef.current = setTimeout(() => {
          el.removeAttribute('data-zooming');
          zoomingTimerRef.current = null;
        }, 250);
      }
    },
    [contentElementRef],
  );

  const handlePointerDown = React.useCallback(
    (event: PointerEvent) => {
      const pointers = activePointers.current;
      const { zoomStep, doubleClickMaxStops, doubleClickDelay } = configRef.current;
      const { getZoom, changeZoom } = actionsRef.current;
      const zoom = getZoom();

      if (
        (event.pointerType === 'mouse' && event.button !== 0) ||
        !wrapperRef.current?.contains(event.target as Node)
      ) {
        return;
      }

      // Don't activate if pull-to-dismiss is in progress or snapping back.
      // Also clear all tracking state — pull-to-dismiss captures the pointer
      // via setPointerCapture, so we never receive pointerup for it and
      // would otherwise accumulate stale entries in activePointers.
      if (contentElementRef?.current?.hasAttribute('data-pulling')) {
        pointers.length = 0;
        lastPointerDown.current = 0;
        pinchState.current = undefined;
        hadPinch.current = false;
        return;
      }

      // Stale pointer cleanup: if all recorded pointers are old (>500ms),
      // they were likely captured by pull-to-dismiss and we never got
      // pointerup for them. During a normal pinch both fingers arrive
      // within milliseconds, so this won't trigger.
      if (pointers.length > 0) {
        const newest = Math.max(...pointers.map((p) => p.timeStamp));
        if (event.timeStamp - newest > 500) {
          pointers.length = 0;
          pinchState.current = undefined;
          hadPinch.current = false;
        }
      }

      if (zoom > 1) {
        event.stopPropagation();
        actionsRef.current.setDragging(true);
        setZooming(true);
      }

      // Double-click / double-tap: toggle between zoomed and 1x.
      // Both taps must be genuine taps — the previous interaction must have
      // been a stationary single-finger tap (lastWasTap), not a drag/pinch.
      // The two taps must also be close together spatially.
      const now = event.timeStamp;
      const prevTap = lastTapPos.current;
      const tapDist = prevTap ? Math.hypot(event.clientX - prevTap.x, event.clientY - prevTap.y) : 0;
      if (
        pointers.length === 0 &&
        lastWasTap.current &&
        now - lastPointerDown.current < doubleClickDelay &&
        tapDist < DOUBLE_TAP_DISTANCE
      ) {
        lastPointerDown.current = 0;
        lastWasTap.current = false;
        lastTapPos.current = null;

        const { minZoom, maxZoom } = configRef.current;
        const targetZoom = zoom > minZoom
          ? minZoom
          : Math.min(zoomStep, maxZoom);

        setZooming(true);
        changeZoom(targetZoom, false, ...translateCoordinates(event));
        return;
      }

      lastPointerDown.current = now;

      // Start tap candidate tracking for this new single-finger interaction
      if (pointers.length === 0) {
        tapCandidate.current = true;
        tapStartPos.current = { x: event.clientX, y: event.clientY };
      } else {
        // Multiple fingers — not a tap
        tapCandidate.current = false;
        tapStartPos.current = null;
      }

      replacePointer(event);

      if (pointers.length === 2) {
        setZooming(true);
        // A pinch invalidates both tap tracking and double-tap timing
        lastPointerDown.current = 0;
        tapCandidate.current = false;
        tapStartPos.current = null;
        const dist = pointerDistance(pointers[0], pointers[1]);
        pinchState.current = {
          initialDistance: Math.max(dist, 1),
          initialZoom: zoom,
        };
        hadPinch.current = true;
      }
    },
    [wrapperRef, contentElementRef, translateCoordinates, replacePointer, setZooming],
  );

  const handlePointerMove = React.useCallback(
    (event: PointerEvent) => {
      const pointers = activePointers.current;
      const { getZoom, changeZoom, changeOffsets } = actionsRef.current;
      const zoom = getZoom();

      // Invalidate tap candidate if finger moved beyond threshold
      if (tapCandidate.current && tapStartPos.current) {
        const dx = event.clientX - tapStartPos.current.x;
        const dy = event.clientY - tapStartPos.current.y;
        if (Math.hypot(dx, dy) > TAP_MOVE_THRESHOLD) {
          tapCandidate.current = false;
          tapStartPos.current = null;
        }
      }

      const existing = pointers.find((p) => p.pointerId === event.pointerId);

      // Pinch zoom (2 pointers) — overscroll allows elastic bounce past bounds
      if (pointers.length === 2 && pinchState.current) {
        event.stopPropagation();
        replacePointer(event);
        velocityTracker.current.length = 0;

        const currentDist = pointerDistance(pointers[0], pointers[1]);
        const targetZoom = (pinchState.current.initialZoom / pinchState.current.initialDistance) * currentDist;

        const [cx, cy] = pointers
          .map((p) => translateCoordinates(p))
          .reduce<[number, number]>((acc, c) => [acc[0] + c[0] / 2, acc[1] + c[1] / 2], [0, 0]);

        changeZoom(targetZoom, true, cx, cy, true);
        return;
      }

      // Single-pointer drag for panning — elastic on touch
      if (zoom > 1 && existing) {
        event.stopPropagation();
        if (pointers.length === 1) {
          const isTouch = event.pointerType === 'touch';
          changeOffsets(
            (existing.clientX - event.clientX) / zoom,
            (existing.clientY - event.clientY) / zoom,
            isTouch,
          );
          // Track positions for momentum calculation on touch release
          if (isTouch) {
            const now = event.timeStamp;
            const tracker = velocityTracker.current;
            tracker.push({ x: event.clientX, y: event.clientY, t: now });
            // Trim entries older than the velocity window
            while (tracker.length > 0 && now - tracker[0].t > VELOCITY_WINDOW) {
              tracker.shift();
            }
          }
        }
        replacePointer(event);
      }
    },
    [replacePointer, translateCoordinates],
  );

  const handlePointerUp = React.useCallback(
    (event: PointerEvent) => {
      const pointers = activePointers.current;
      if (pointers.length === 2 && pointers.some((p) => p.pointerId === event.pointerId)) {
        pinchState.current = undefined;
      }
      clearPointer(event.pointerId);
      if (activePointers.current.length === 0) {
        // Finalize tap detection: was this a clean single-finger tap?
        lastWasTap.current = tapCandidate.current;
        if (tapCandidate.current) {
          lastTapPos.current = { x: event.clientX, y: event.clientY };
        }
        tapCandidate.current = false;
        tapStartPos.current = null;
        actionsRef.current.setDragging(false);
        const wasPinch = hadPinch.current;
        if (wasPinch) {
          hadPinch.current = false;
          actionsRef.current.snapToBounds();
        }
        if (event.pointerType === 'touch') {
          const tracker = velocityTracker.current;
          const zoom = actionsRef.current.getZoom();
          const hasMomentum = !wasPinch && zoom > 1 && tracker.length >= 2;

          if (hasMomentum) {
            const first = tracker[0];
            const last = tracker[tracker.length - 1];
            const dt = last.t - first.t;

            if (dt > 0) {
              const vx = ((last.x - first.x) / dt) * 1000;
              const vy = ((last.y - first.y) / dt) * 1000;
              const speed = Math.hypot(vx, vy);

              if (speed > MOMENTUM_THRESHOLD) {
                const { x: curX, y: curY } = actionsRef.current.getOffsets();
                const factor = MOMENTUM_MULTIPLIER / 1000;
                const targetX = curX + (vx * factor) / zoom;
                const targetY = curY + (vy * factor) / zoom;
                tracker.length = 0;
                actionsRef.current.momentumPan(targetX, targetY);
                setZooming(false);
                return;
              }
            }
          }

          tracker.length = 0;
          actionsRef.current.snapOffsetsToBounds();
        }
        // Clear zooming flag (delayed to cover snap-back animation)
        setZooming(false);
      }
    },
    [clearPointer, setZooming],
  );

  // -------------------------------------------------------------------
  // Wheel / trackpad
  // -------------------------------------------------------------------

  // Safari provides GestureEvent for trackpad pinch — we handle zoom via
  // gesturechange there. The wheel handler skips ctrlKey only while a
  // gesture is active to avoid double-processing. Physical Ctrl+wheel
  // (no gesture) is still handled normally on Safari.
  const hasSafariGesturesRef = React.useRef(
    typeof window !== 'undefined' && 'GestureEvent' in window,
  );
  const gestureActiveRef = React.useRef(false);

  const handleWheel = React.useCallback(
    (event: WheelEvent) => {
      const { scrollToZoom, wheelSensitivity } = configRef.current;
      const { getZoom, changeZoom, changeOffsets } = actionsRef.current;
      const zoom = getZoom();

      // Skip ctrlKey+wheel during an active Safari trackpad pinch gesture
      // (GestureEvent handles it). Physical Ctrl+wheel still works.
      const shouldZoom =
        (event.ctrlKey && !gestureActiveRef.current) || scrollToZoom;

      if (shouldZoom) {
        if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
          event.preventDefault();
          event.stopPropagation();
          changeZoom(
            scaleZoom(zoom, -event.deltaY, wheelSensitivity),
            true,
            ...translateCoordinates(event),
          );
          return;
        }
      }

      if (zoom > 1) {
        event.preventDefault();
        event.stopPropagation();
        if (!scrollToZoom) {
          changeOffsets(event.deltaX, event.deltaY);
        }
      }
    },
    [translateCoordinates],
  );

  // -------------------------------------------------------------------
  // Keyboard — Cmd+/-, Cmd+0, arrows for pan
  // -------------------------------------------------------------------

  const handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      const { keyboardPanDistance } = configRef.current;
      const { getZoom, zoomIn, zoomOut, changeZoom, changeOffsets } = actionsRef.current;
      const zoom = getZoom();
      const meta = event.metaKey || event.ctrlKey;

      if (zoom > 1) {
        const pan = (dx: number, dy: number) => {
          event.preventDefault();
          event.stopPropagation();
          changeOffsets(dx, dy);
        };

        switch (event.key) {
          case 'ArrowDown': pan(0, keyboardPanDistance); return;
          case 'ArrowUp': pan(0, -keyboardPanDistance); return;
          case 'ArrowLeft': pan(-keyboardPanDistance, 0); return;
          case 'ArrowRight': pan(keyboardPanDistance, 0); return;
        }
      }

      if (event.key === '+' || (meta && event.key === '=')) {
        event.preventDefault();
        event.stopPropagation();
        zoomIn();
      } else if (event.key === '-' || (meta && (event.key === '-' || event.key === '_'))) {
        event.preventDefault();
        event.stopPropagation();
        zoomOut();
      } else if (meta && event.key === '0') {
        event.preventDefault();
        event.stopPropagation();
        changeZoom(1, false);
      }
    },
    [],
  );

  // -------------------------------------------------------------------
  // Attach / detach listeners
  // -------------------------------------------------------------------

  // Pointer + keyboard listeners (always passive-compatible, stable effect)
  React.useEffect(() => {
    if (disabled) return;
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener('pointerdown', handlePointerDown);
    el.addEventListener('pointermove', handlePointerMove);
    el.addEventListener('pointerup', handlePointerUp);
    el.addEventListener('pointercancel', handlePointerUp);
    el.addEventListener('keydown', handleKeyDown);

    return () => {
      el.removeEventListener('pointerdown', handlePointerDown);
      el.removeEventListener('pointermove', handlePointerMove);
      el.removeEventListener('pointerup', handlePointerUp);
      el.removeEventListener('pointercancel', handlePointerUp);
      el.removeEventListener('keydown', handleKeyDown);
    };
  }, [disabled, containerRef, handlePointerDown, handlePointerMove, handlePointerUp, handleKeyDown]);

  // Wheel listener — registered separately so we can toggle passive flag.
  //
  // Safari quirk: a non-passive wheel listener on an ancestor kills
  // compositor-thread momentum scrolling in descendant scroll containers
  // (e.g. ScrollGallery). Chrome/Firefox don't have this issue so
  // non-passive is always safe there.
  //
  // On Safari, trackpad pinch-to-zoom is handled via GestureEvent (below),
  // NOT via ctrlKey+wheel, so the wheel handler only needs non-passive
  // when zoomed in (for pan preventDefault) or scrollToZoom is on.
  const needsNonPassiveWheel = hasSafariGesturesRef.current
    ? currentZoom > 1 || config.scrollToZoom
    : true;

  React.useEffect(() => {
    if (disabled) return;
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener('wheel', handleWheel, { passive: !needsNonPassiveWheel });

    return () => {
      el.removeEventListener('wheel', handleWheel);
    };
  }, [disabled, containerRef, handleWheel, needsNonPassiveWheel]);

  // Safari trackpad pinch-to-zoom via GestureEvent.
  //
  // Safari fires gesturestart/gesturechange/gestureend for trackpad pinch
  // gestures, with a `scale` property for the cumulative pinch factor.
  // This is more reliable than ctrlKey+wheel on Safari and doesn't require
  // a non-passive wheel listener (which would break momentum scrolling).
  React.useEffect(() => {
    if (disabled || !hasSafariGesturesRef.current) return;
    const el = containerRef.current;
    if (!el) return;

    let initialZoom = 1;

    const onGestureStart = (e: Event) => {
      e.preventDefault();
      gestureActiveRef.current = true;
      initialZoom = actionsRef.current.getZoom();
    };

    const onGestureChange = (e: Event) => {
      e.preventDefault();
      const scale = (e as { scale?: number }).scale;
      if (typeof scale !== 'number') return;
      const target = initialZoom * scale;
      const [cx, cy] = translateCoordinates(e as unknown as { clientX: number; clientY: number });
      actionsRef.current.changeZoom(target, true, cx, cy, true);
    };

    const onGestureEnd = (e: Event) => {
      e.preventDefault();
      gestureActiveRef.current = false;
      actionsRef.current.snapToBounds();
    };

    el.addEventListener('gesturestart', onGestureStart);
    el.addEventListener('gesturechange', onGestureChange);
    el.addEventListener('gestureend', onGestureEnd);

    return () => {
      el.removeEventListener('gesturestart', onGestureStart);
      el.removeEventListener('gesturechange', onGestureChange);
      el.removeEventListener('gestureend', onGestureEnd);
    };
  }, [disabled, containerRef, translateCoordinates]);

  // Cleanup when disabled changes or component unmounts
  React.useEffect(() => {
    const ptrs = activePointers.current;
    return () => {
      ptrs.length = 0;
      lastPointerDown.current = 0;
      hadPinch.current = false;
      pinchState.current = undefined;
      if (zoomingTimerRef.current) {
        clearTimeout(zoomingTimerRef.current);
        zoomingTimerRef.current = null;
      }
      contentElementRef?.current?.removeAttribute('data-zooming');
    };
  }, [disabled, contentElementRef]);
}

export { useZoomGestures };
export type { ZoomGestureConfig, ZoomGestureActions };
