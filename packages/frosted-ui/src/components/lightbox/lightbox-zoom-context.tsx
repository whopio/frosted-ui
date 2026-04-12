'use client';

import * as React from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ZoomState {
  /** Current zoom level (1 = no zoom). */
  zoom: number;
  /** Maximum zoom level for the current content. */
  maxZoom: number;
  /** Horizontal pan offset in content-space pixels. */
  offsetX: number;
  /** Vertical pan offset in content-space pixels. */
  offsetY: number;
  /** Whether zoom-in is available. */
  canZoomIn: boolean;
  /** Whether zoom-out is available. */
  canZoomOut: boolean;
}

interface ZoomActions {
  zoomIn: () => void;
  zoomOut: () => void;
  /** Zoom to an exact level, optionally anchored at (dx, dy) from center. */
  zoomTo: (target: number, options?: { rapid?: boolean; dx?: number; dy?: number }) => void;
  /** Reset zoom to minZoom (default 1). */
  reset: (rapid?: boolean) => void;
  /** Pan by the given deltas (content-space px, positive = move content left/up). */
  changeOffsets: (dx: number, dy: number) => void;
}

type ZoomContextValue = ZoomState & ZoomActions;

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

const ZoomContext = React.createContext<ZoomContextValue | null>(null);

function useZoomContext(): ZoomContextValue {
  const ctx = React.useContext(ZoomContext);
  if (!ctx) {
    throw new Error('Lightbox zoom components must be used within a Lightbox.Zoom');
  }
  return ctx;
}

function useOptionalZoomContext(): ZoomContextValue | null {
  return React.useContext(ZoomContext);
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { ZoomContext, useZoomContext, useOptionalZoomContext };
export type { ZoomState, ZoomActions, ZoomContextValue };
