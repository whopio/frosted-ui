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
  zoomIn: () => void;
  zoomOut: () => void;
  changeZoom: (target: number, rapid: boolean, dx?: number, dy?: number, overscroll?: boolean) => void;
  changeOffsets: (dx: number, dy: number, overscroll?: boolean) => void;
  setDragging: (dragging: boolean) => void;
  snapToBounds: () => void;
  snapOffsetsToBounds: () => void;
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
) {
  const activePointers = React.useRef<PointerEvent[]>([]);
  const lastPointerDown = React.useRef(0);
  const hadPinch = React.useRef(false);
  const pinchState = React.useRef<{
    initialDistance: number;
    initialZoom: number;
  } | undefined>(undefined);
  const zoomingTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

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

      // Double-click / double-tap: toggle between zoomed and 1x
      const now = event.timeStamp;
      if (pointers.length === 0 && now - lastPointerDown.current < doubleClickDelay) {
        lastPointerDown.current = 0;

        const { minZoom, maxZoom } = configRef.current;
        const targetZoom = zoom > minZoom
          ? minZoom
          : Math.min(zoomStep, maxZoom);

        setZooming(true);
        changeZoom(targetZoom, false, ...translateCoordinates(event));
        return;
      }

      lastPointerDown.current = now;
      replacePointer(event);

      if (pointers.length === 2) {
        setZooming(true);
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

      const existing = pointers.find((p) => p.pointerId === event.pointerId);

      // Pinch zoom (2 pointers) — overscroll allows elastic bounce past bounds
      if (pointers.length === 2 && pinchState.current) {
        event.stopPropagation();
        replacePointer(event);

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
        actionsRef.current.setDragging(false);
        if (hadPinch.current) {
          hadPinch.current = false;
          actionsRef.current.snapToBounds();
        }
        if (event.pointerType === 'touch') {
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

  const handleWheel = React.useCallback(
    (event: WheelEvent) => {
      const { scrollToZoom, wheelSensitivity } = configRef.current;
      const { getZoom, changeZoom, changeOffsets } = actionsRef.current;
      const zoom = getZoom();

      if (event.ctrlKey || scrollToZoom) {
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

  React.useEffect(() => {
    if (disabled) return;
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener('pointerdown', handlePointerDown);
    el.addEventListener('pointermove', handlePointerMove);
    el.addEventListener('pointerup', handlePointerUp);
    el.addEventListener('pointercancel', handlePointerUp);
    el.addEventListener('wheel', handleWheel, { passive: false });
    el.addEventListener('keydown', handleKeyDown);

    return () => {
      el.removeEventListener('pointerdown', handlePointerDown);
      el.removeEventListener('pointermove', handlePointerMove);
      el.removeEventListener('pointerup', handlePointerUp);
      el.removeEventListener('pointercancel', handlePointerUp);
      el.removeEventListener('wheel', handleWheel);
      el.removeEventListener('keydown', handleKeyDown);
    };
  }, [disabled, containerRef, handlePointerDown, handlePointerMove, handlePointerUp, handleWheel, handleKeyDown]);

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
