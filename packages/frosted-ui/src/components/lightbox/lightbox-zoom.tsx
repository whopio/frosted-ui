'use client';

import * as React from 'react';

import { useLightboxContext } from './lightbox-context';
import { ZoomContext, type ZoomContextValue } from './lightbox-zoom-context';
import { useZoomAnimation } from './use-zoom-animation';
import { useZoomGestures, type ZoomGestureActions, type ZoomGestureConfig } from './use-zoom-gestures';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface LightboxZoomState {
  zoom: number;
  maxZoom: number;
  offsetX: number;
  offsetY: number;
  canZoomIn: boolean;
  canZoomOut: boolean;
}

interface LightboxZoomProps {
  children: React.ReactNode | ((state: LightboxZoomState) => React.ReactNode);
  /**
   * Content rendered inside the zoom context but NOT affected by the zoom
   * transform. Use this for toolbar controls (ZoomIn, ZoomOut, etc.) that
   * need access to the ZoomContext but should stay at 1x scale.
   *
   * Positioned absolutely over the zoom container by default.
   */
  overlay?: React.ReactNode | ((state: LightboxZoomState) => React.ReactNode);
  /** Minimum zoom level. @default 1 */
  minZoom?: number;
  /**
   * Maximum zoom level. When not specified, auto-calculated from the
   * first `<img>` child's natural dimensions vs container size.
   * Falls back to 4 if no image dimensions are available.
   * @default undefined (auto)
   */
  maxZoom?: number;
  /** Multiplier for button/keyboard zoom steps. @default 2 */
  zoomStep?: number;
  /** Enable zoom via bare scroll/trackpad without Ctrl. @default false */
  scrollToZoom?: boolean;
  /** Wheel/trackpad zoom sensitivity factor. @default 100 */
  wheelSensitivity?: number;
  /** Keyboard pan distance in px per keypress. @default 50 */
  keyboardPanDistance?: number;
  /** Max number of double-click stops before resetting to 1x. @default 2 */
  doubleClickMaxStops?: number;
  /** Max delay between clicks for double-click detection (ms). @default 400 */
  doubleClickDelay?: number;
  /** Smooth zoom animation duration (ms). @default 300 */
  animationDuration?: number;
  /** Callback when zoom level changes. */
  onZoomChange?: (zoom: number) => void;
  /** CSS class for the outer container. */
  className?: string;
  /** CSS class for the inner transform wrapper. */
  wrapperClassName?: string;
}

interface LightboxZoomRef {
  zoom: number;
  maxZoom: number;
  offsetX: number;
  offsetY: number;
  zoomIn: () => void;
  zoomOut: () => void;
  zoomTo: (target: number, options?: { rapid?: boolean; dx?: number; dy?: number }) => void;
  reset: (rapid?: boolean) => void;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const DEFAULT_MIN_ZOOM = 1;
const DEFAULT_MAX_ZOOM_FALLBACK = 4;
const ELASTIC_FACTOR = 0.2;
const DEFAULT_ZOOM_STEP = 2;
const DEFAULT_WHEEL_SENSITIVITY = 100;
const DEFAULT_KEYBOARD_PAN = 50;
const DEFAULT_DOUBLE_CLICK_STOPS = 2;
const DEFAULT_DOUBLE_CLICK_DELAY = 400;
const DEFAULT_ANIMATION_DURATION = 300;

// ---------------------------------------------------------------------------
// Helper: round to N decimal places to avoid fp noise
// ---------------------------------------------------------------------------

function round(value: number, decimals: number): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

/**
 * Rubber-band clamping: allows values past min/max with increasing
 * resistance, mimicking native iOS overscroll. The further the value
 * exceeds the bounds, the harder it is to pull.
 */
function elasticClamp(value: number, min: number, max: number): number {
  if (value < min) {
    const over = min - value;
    return min - over * ELASTIC_FACTOR;
  }
  if (value > max) {
    const over = value - max;
    return max + over * ELASTIC_FACTOR;
  }
  return value;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const LightboxZoom = React.forwardRef<LightboxZoomRef, LightboxZoomProps>(
  function LightboxZoom(props, forwardedRef) {
    const {
      children,
      overlay,
      minZoom = DEFAULT_MIN_ZOOM,
      maxZoom: maxZoomProp,
      zoomStep = DEFAULT_ZOOM_STEP,
      scrollToZoom = false,
      wheelSensitivity = DEFAULT_WHEEL_SENSITIVITY,
      keyboardPanDistance = DEFAULT_KEYBOARD_PAN,
      doubleClickMaxStops = DEFAULT_DOUBLE_CLICK_STOPS,
      doubleClickDelay = DEFAULT_DOUBLE_CLICK_DELAY,
      animationDuration = DEFAULT_ANIMATION_DURATION,
      onZoomChange,
      className,
      wrapperClassName,
    } = props;

    const { activeIndex, dialogElementRef } = useLightboxContext();

    // ----- State -----
    const [zoom, setZoom] = React.useState(minZoom);
    const [offsetX, setOffsetX] = React.useState(0);
    const [offsetY, setOffsetY] = React.useState(0);
    const [dragging, setDragging] = React.useState(false);
    const [imageDimensions, setImageDimensions] = React.useState<{ w: number; h: number } | null>(null);

    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const wrapperRef = React.useRef<HTMLDivElement | null>(null);

    const onZoomChangeRef = React.useRef(onZoomChange);
    onZoomChangeRef.current = onZoomChange;

    // ----- Max zoom computation -----
    const maxZoom = React.useMemo(() => {
      if (maxZoomProp !== undefined) return maxZoomProp;
      if (!imageDimensions || !containerRef.current) return DEFAULT_MAX_ZOOM_FALLBACK;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return DEFAULT_MAX_ZOOM_FALLBACK;
      const scaleX = imageDimensions.w / rect.width;
      const scaleY = imageDimensions.h / rect.height;
      const natural = Math.max(scaleX, scaleY);
      return Math.max(natural, minZoom + 1);
    }, [maxZoomProp, imageDimensions, minZoom]);

    // ----- Observe images inside wrapper to get natural dimensions -----
    React.useEffect(() => {
      const wrapper = wrapperRef.current;
      if (!wrapper || maxZoomProp !== undefined) return;

      const detect = () => {
        const img = wrapper.querySelector('img');
        if (img && img.naturalWidth > 0) {
          setImageDimensions({ w: img.naturalWidth, h: img.naturalHeight });
        }
      };

      detect();

      const observer = new MutationObserver(detect);
      observer.observe(wrapper, { childList: true, subtree: true });

      const imgs = wrapper.querySelectorAll('img');
      const handlers: Array<() => void> = [];
      imgs.forEach((img) => {
        const handler = () => detect();
        img.addEventListener('load', handler);
        handlers.push(() => img.removeEventListener('load', handler));
      });

      return () => {
        observer.disconnect();
        handlers.forEach((h) => h());
      };
    }, [maxZoomProp, activeIndex]);

    // ----- Reset on slide change -----
    React.useEffect(() => {
      setZoom(minZoom);
      setOffsetX(0);
      setOffsetY(0);
      setImageDimensions(null);
    }, [activeIndex, minZoom]);

    // ----- Fire callback on zoom change -----
    React.useEffect(() => {
      onZoomChangeRef.current?.(zoom);
    }, [zoom]);

    // ----- Sync data-zoomed attribute on Content element -----
    React.useEffect(() => {
      const el = dialogElementRef.current;
      if (!el) return;
      if (zoom > minZoom) {
        el.setAttribute('data-zoomed', '');
      } else {
        el.removeAttribute('data-zoomed');
      }
    }, [zoom, minZoom, dialogElementRef]);

    // ----- Offset clamping -----
    const clampOffsets = React.useCallback(
      (newOffsetX: number, newOffsetY: number, newZoom: number) => {
        const el = containerRef.current;
        if (!el) return { x: 0, y: 0 };

        const containerRect = el.getBoundingClientRect();
        const wrapper = wrapperRef.current;
        let contentW = containerRect.width;
        let contentH = containerRect.height;

        if (wrapper) {
          const img = wrapper.querySelector('img');
          if (img && img.offsetWidth > 0) {
            contentW = img.offsetWidth;
            contentH = img.offsetHeight;
          }
        }

        const maxOffX = Math.max((contentW * newZoom - containerRect.width) / 2 / newZoom, 0);
        const maxOffY = Math.max((contentH * newZoom - containerRect.height) / 2 / newZoom, 0);

        return {
          x: Math.min(Math.abs(newOffsetX), maxOffX) * Math.sign(newOffsetX),
          y: Math.min(Math.abs(newOffsetY), maxOffY) * Math.sign(newOffsetY),
        };
      },
      [],
    );

    // ----- Core actions -----
    const captureStart = useZoomAnimation(zoom, offsetX, offsetY, wrapperRef, animationDuration);

    const offsetXRef = React.useRef(offsetX);
    offsetXRef.current = offsetX;
    const offsetYRef = React.useRef(offsetY);
    offsetYRef.current = offsetY;

    // Raw (unclamped) offsets during elastic touch drag. The elastic
    // formula is applied to these to compute the displayed value, so
    // resistance is based on total overshoot rather than compounding.
    const rawOffsetX = React.useRef(0);
    const rawOffsetY = React.useRef(0);
    const isElasticDrag = React.useRef(false);

    const getMaxOffsets = React.useCallback(
      (z: number) => {
        const el = containerRef.current;
        if (!el) return { maxX: 0, maxY: 0 };
        const rect = el.getBoundingClientRect();
        const wrapper = wrapperRef.current;
        let cw = rect.width;
        let ch = rect.height;
        if (wrapper) {
          const img = wrapper.querySelector('img');
          if (img && img.offsetWidth > 0) { cw = img.offsetWidth; ch = img.offsetHeight; }
        }
        return {
          maxX: Math.max((cw * z - rect.width) / 2 / z, 0),
          maxY: Math.max((ch * z - rect.height) / 2 / z, 0),
        };
      },
      [],
    );

    const applyElastic = (val: number, max: number) => {
      const abs = Math.abs(val);
      if (abs <= max) return val;
      const over = abs - max;
      return (max + over * ELASTIC_FACTOR) * Math.sign(val);
    };

    const changeOffsetsAction = React.useCallback(
      (dx: number, dy: number, overscroll?: boolean) => {
        if (overscroll) {
          if (!isElasticDrag.current) {
            isElasticDrag.current = true;
            rawOffsetX.current = offsetXRef.current;
            rawOffsetY.current = offsetYRef.current;
          }
          rawOffsetX.current -= dx;
          rawOffsetY.current -= dy;
          const { maxX, maxY } = getMaxOffsets(zoomRef.current);
          setOffsetX(applyElastic(rawOffsetX.current, maxX));
          setOffsetY(applyElastic(rawOffsetY.current, maxY));
        } else {
          const clamped = clampOffsets(offsetXRef.current - dx, offsetYRef.current - dy, zoomRef.current);
          setOffsetX(clamped.x);
          setOffsetY(clamped.y);
        }
      },
      [clampOffsets, getMaxOffsets],
    );

    const changeZoomAction = React.useCallback(
      (target: number, rapid: boolean, dx?: number, dy?: number, overscroll?: boolean) => {
        const clamped = round(
          overscroll
            ? elasticClamp(target, minZoom, maxZoom)
            : Math.min(Math.max(target, minZoom), maxZoom),
          5,
        );

        if (!rapid) captureStart();

        const currentZoom = zoomRef.current;
        const currentOffX = offsetXRef.current;
        const currentOffY = offsetYRef.current;

        if (dx !== undefined && dy !== undefined) {
          const newOffX = currentOffX + dx * (1 / clamped - 1 / currentZoom);
          const newOffY = currentOffY + dy * (1 / clamped - 1 / currentZoom);
          const offsets = clampOffsets(newOffX, newOffY, clamped);
          setOffsetX(offsets.x);
          setOffsetY(offsets.y);
        } else {
          const offsets = clampOffsets(currentOffX, currentOffY, clamped);
          setOffsetX(offsets.x);
          setOffsetY(offsets.y);
        }

        setZoom(clamped);
      },
      [minZoom, maxZoom, clampOffsets, captureStart],
    );

    const zoomInAction = React.useCallback(() => {
      const target = zoom * zoomStep;
      changeZoomAction(zoom < 1 && target > 1 ? 1 : target, false);
    }, [zoom, zoomStep, changeZoomAction]);

    const zoomOutAction = React.useCallback(() => {
      const target = zoom / zoomStep;
      changeZoomAction(zoom > 1 && target < 1 ? 1 : target, false);
    }, [zoom, zoomStep, changeZoomAction]);

    const resetAction = React.useCallback(
      (rapid = false) => {
        if (!rapid) captureStart();
        setZoom(minZoom);
        setOffsetX(0);
        setOffsetY(0);
      },
      [minZoom, captureStart],
    );

    const snapToBoundsAction = React.useCallback(() => {
      const currentZoom = zoomRef.current;
      if (currentZoom >= minZoom && currentZoom <= maxZoom) return;
      captureStart();
      const snapped = Math.min(Math.max(currentZoom, minZoom), maxZoom);
      const offsets = clampOffsets(offsetXRef.current, offsetYRef.current, snapped);
      setZoom(snapped);
      setOffsetX(offsets.x);
      setOffsetY(offsets.y);
    }, [minZoom, maxZoom, clampOffsets, captureStart]);

    const snapOffsetsToBoundsAction = React.useCallback(() => {
      isElasticDrag.current = false;
      const clamped = clampOffsets(offsetXRef.current, offsetYRef.current, zoomRef.current);
      if (clamped.x === offsetXRef.current && clamped.y === offsetYRef.current) return;
      captureStart();
      setOffsetX(clamped.x);
      setOffsetY(clamped.y);
    }, [clampOffsets, captureStart]);

    // ----- Gesture hook -----
    const zoomRef = React.useRef(zoom);
    zoomRef.current = zoom;

    const gestureConfig = React.useMemo<ZoomGestureConfig>(
      () => ({
        minZoom,
        maxZoom,
        zoomStep,
        scrollToZoom,
        wheelSensitivity,
        keyboardPanDistance,
        doubleClickMaxStops,
        doubleClickDelay,
      }),
      [minZoom, maxZoom, zoomStep, scrollToZoom, wheelSensitivity, keyboardPanDistance, doubleClickMaxStops, doubleClickDelay],
    );

    const gestureActions = React.useMemo<ZoomGestureActions>(
      () => ({
        getZoom: () => zoomRef.current,
        zoomIn: zoomInAction,
        zoomOut: zoomOutAction,
        changeZoom: changeZoomAction,
        changeOffsets: changeOffsetsAction,
        setDragging,
        snapToBounds: snapToBoundsAction,
        snapOffsetsToBounds: snapOffsetsToBoundsAction,
      }),
      [zoomInAction, zoomOutAction, changeZoomAction, changeOffsetsAction, snapToBoundsAction, snapOffsetsToBoundsAction],
    );

    useZoomGestures(containerRef, wrapperRef, gestureConfig, gestureActions, false);

    // ----- Imperative ref -----
    React.useImperativeHandle(
      forwardedRef,
      () => ({
        zoom,
        maxZoom,
        offsetX,
        offsetY,
        zoomIn: zoomInAction,
        zoomOut: zoomOutAction,
        zoomTo: (target, opts) => changeZoomAction(target, opts?.rapid ?? false, opts?.dx, opts?.dy),
        reset: resetAction,
      }),
      [zoom, maxZoom, offsetX, offsetY, zoomInAction, zoomOutAction, changeZoomAction, resetAction],
    );

    // ----- Context value -----
    const canZoomIn = zoom < maxZoom;
    const canZoomOut = zoom > minZoom;

    const contextValue = React.useMemo<ZoomContextValue>(
      () => ({
        zoom,
        maxZoom,
        offsetX,
        offsetY,
        canZoomIn,
        canZoomOut,
        zoomIn: zoomInAction,
        zoomOut: zoomOutAction,
        zoomTo: (target, opts) => changeZoomAction(target, opts?.rapid ?? false, opts?.dx, opts?.dy),
        reset: resetAction,
        changeOffsets: changeOffsetsAction,
      }),
      [zoom, maxZoom, offsetX, offsetY, canZoomIn, canZoomOut, zoomInAction, zoomOutAction, changeZoomAction, resetAction, changeOffsetsAction],
    );

    // ----- Render -----
    const stateSnapshot = { zoom, maxZoom, offsetX, offsetY, canZoomIn, canZoomOut };

    const resolvedChildren = typeof children === 'function'
      ? children(stateSnapshot)
      : children;

    const resolvedOverlay = typeof overlay === 'function'
      ? overlay(stateSnapshot)
      : overlay;

    return (
      <ZoomContext.Provider value={contextValue}>
        <div
          ref={containerRef}
          className={className}
          data-zoom={zoom > 1 ? '' : undefined}
          data-dragging={dragging ? '' : undefined}
          style={{
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            height: '100%',
            touchAction: 'none',
            cursor: dragging ? 'grabbing' : zoom > 1 ? 'grab' : undefined,
            userSelect: 'none',
          }}
          tabIndex={-1}
        >
          <div
            ref={wrapperRef}
            className={wrapperClassName}
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transformOrigin: 'center center',
              transform: `scale(${zoom}) translate(${offsetX}px, ${offsetY}px)`,
              willChange: zoom > 1 ? 'transform' : undefined,
            }}
          >
            {resolvedChildren}
          </div>
          {resolvedOverlay}
        </div>
      </ZoomContext.Provider>
    );
  },
);

LightboxZoom.displayName = 'LightboxZoom';

export { LightboxZoom };
export type { LightboxZoomProps, LightboxZoomState, LightboxZoomRef };
