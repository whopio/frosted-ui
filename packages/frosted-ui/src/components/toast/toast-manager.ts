'use client';

import { Toast } from '@base-ui/react/toast';
import type * as React from 'react';
import type { ToastPosition } from './toast.props';
import { toastPositions } from './toast.props';

// One manager per position so stacking indices stay independent
const managers = new Map<ToastPosition, ReturnType<typeof Toast.createToastManager>>();
for (const pos of toastPositions) {
  managers.set(pos, Toast.createToastManager());
}

// Tracks which manager owns a given toast ID (for update/dismiss by id)
const toastOwnership = new Map<string, ToastPosition>();

function clearOwnershipForPosition(position: ToastPosition) {
  for (const [id, pos] of toastOwnership) {
    if (pos === position) {
      toastOwnership.delete(id);
      clearScheduledDismissal(id);
    }
  }
  positionInteraction.delete(position);
}

// The provider sets this on mount so imperative calls use the right default
let _defaultPosition: ToastPosition = 'bottom-right';

type ToastType = 'success' | 'error' | 'loading' | 'info' | 'default' | 'custom';

interface CustomToastRenderProps {
  close: () => void;
  id: string;
  Toast: {
    Root: React.FC<
      { className?: string; style?: React.CSSProperties; children?: React.ReactNode } & Record<string, unknown>
    >;
    Content: React.FC<
      { className?: string; style?: React.CSSProperties; children: React.ReactNode } & Record<string, unknown>
    >;
    Title: React.FC<
      { className?: string; style?: React.CSSProperties; children: React.ReactNode } & Record<string, unknown>
    >;
    Description: React.FC<
      { className?: string; style?: React.CSSProperties; children: React.ReactNode } & Record<string, unknown>
    >;
  };
}

interface ToastOptions {
  id?: string;
  description?: React.ReactNode;
  duration?: number;
  position?: ToastPosition;
  onClose?: () => void;
  onRemove?: () => void;
  actionProps?: React.ComponentPropsWithRef<'button'>;
  data?: Record<string, unknown>;
}

interface ToastPromiseOptions<T> {
  loading?: React.ReactNode | (() => React.ReactNode);
  success?: React.ReactNode | ((data: T) => React.ReactNode);
  error?: React.ReactNode | ((err: unknown) => React.ReactNode);
  finally?: () => void;
  position?: ToastPosition;
}

function setDefaultPosition(pos: ToastPosition) {
  _defaultPosition = pos;
}

type ToastEventData = { id: string; type: ToastType; title: React.ReactNode; description?: React.ReactNode };
type ToastListener = (toast: ToastEventData) => void;

let _onToast: ToastListener | undefined;

function setOnToast(cb: ToastListener | undefined) {
  _onToast = cb;
}

function getManager(position: ToastPosition) {
  // All managers are pre-created in the loop above
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return managers.get(position)!;
}

function resolvePosition(options?: ToastOptions): ToastPosition {
  return options?.position ?? _defaultPosition;
}

function normalizeDuration(duration: number | undefined): number | undefined {
  if (duration === undefined) return undefined;
  return duration === Infinity ? 0 : duration;
}

function mapOptions(options?: ToastOptions) {
  if (!options) return {};
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { duration, id, position, ...rest } = options;
  const normalized = normalizeDuration(duration);
  return {
    ...(normalized !== undefined ? { timeout: normalized } : {}),
    ...rest,
  };
}

type BumpListener = (id: string, type: ToastType) => void;
const bumpListeners = new Set<BumpListener>();

function subscribeBump(listener: BumpListener) {
  bumpListeners.add(listener);
  return () => {
    bumpListeners.delete(listener);
  };
}

// ---------------------------------------------------------------------------
// Interaction-aware scheduled dismissals
// ---------------------------------------------------------------------------
// Base UI's manager.update() doesn't restart the auto-dismiss timer, so we
// schedule our own fallback timeout when an update changes the duration from
// infinite (0) to a finite value (e.g. loading toast → success).
//
// This timer system pauses/resumes in sync with viewport interaction state
// (hover + keyboard focus) so toasts don't vanish while the user is
// interacting — matching Base UI's own `expanded = hovering || focused`.

interface ScheduledDismissal {
  timerId: ReturnType<typeof setTimeout> | null;
  remaining: number;
  startedAt: number;
}

const scheduledDismissals = new Map<string, ScheduledDismissal>();

interface PositionInteraction {
  hover: boolean;
  focus: boolean;
}

const positionInteraction = new Map<ToastPosition, PositionInteraction>();

function isPositionPaused(position: ToastPosition) {
  const state = positionInteraction.get(position);
  return state ? state.hover || state.focus : false;
}

function clearScheduledDismissal(id: string) {
  const existing = scheduledDismissals.get(id);
  if (existing) {
    if (existing.timerId !== null) clearTimeout(existing.timerId);
    scheduledDismissals.delete(id);
  }
}

function startDismissalTimer(id: string, remaining: number) {
  return setTimeout(() => {
    scheduledDismissals.delete(id);
    dismiss(id);
  }, remaining);
}

function scheduleDismissal(id: string, duration: number) {
  clearScheduledDismissal(id);

  const pos = toastOwnership.get(id);
  if (pos && isPositionPaused(pos)) {
    scheduledDismissals.set(id, { timerId: null, remaining: duration, startedAt: 0 });
    return;
  }

  scheduledDismissals.set(id, {
    timerId: startDismissalTimer(id, duration),
    remaining: duration,
    startedAt: Date.now(),
  });
}

function pauseDismissalsForPosition(position: ToastPosition) {
  const now = Date.now();
  for (const [id, d] of scheduledDismissals) {
    if (toastOwnership.get(id) !== position || d.timerId === null) continue;
    clearTimeout(d.timerId);
    d.remaining = Math.max(0, d.remaining - (now - d.startedAt));
    d.timerId = null;
    d.startedAt = 0;
  }
}

function resumeDismissalsForPosition(position: ToastPosition) {
  for (const [id, d] of scheduledDismissals) {
    if (toastOwnership.get(id) !== position || d.timerId !== null) continue;
    if (d.remaining <= 0) {
      scheduledDismissals.delete(id);
      dismiss(id);
      continue;
    }
    d.startedAt = Date.now();
    d.timerId = startDismissalTimer(id, d.remaining);
  }
}

function setPositionInteracting(position: ToastPosition, signal: 'hover' | 'focus', active: boolean) {
  let state = positionInteraction.get(position);
  if (!state) {
    state = { hover: false, focus: false };
    positionInteraction.set(position, state);
  }

  const wasPaused = state.hover || state.focus;
  state[signal] = active;
  const isPaused = state.hover || state.focus;

  if (!wasPaused && isPaused) {
    pauseDismissalsForPosition(position);
  } else if (wasPaused && !isPaused) {
    resumeDismissalsForPosition(position);
  }
}

function addOrUpdate(title: React.ReactNode, type: ToastType, options?: ToastOptions) {
  // Update an existing toast on its original manager
  if (options?.id && toastOwnership.has(options.id)) {
    const originalPos = toastOwnership.get(options.id) as ToastPosition;
    const manager = getManager(originalPos);
    const normalizedDuration = normalizeDuration(options?.duration);
    manager.update(options.id, {
      title,
      type,
      ...(type !== 'loading' && normalizedDuration !== undefined ? { timeout: normalizedDuration } : {}),
      ...mapOptions({ ...options, id: undefined }),
    });

    clearScheduledDismissal(options.id);
    const resolvedDuration = normalizedDuration ?? 0;
    if (type !== 'loading' && resolvedDuration > 0) {
      scheduleDismissal(options.id, resolvedDuration);
    }

    for (const listener of bumpListeners) listener(options.id, type);
    return options.id;
  }

  const pos = resolvePosition(options);
  const manager = getManager(pos);
  const userOnRemove = options?.onRemove;
  const id = manager.add({
    ...(options?.id ? { id: options.id } : {}),
    title,
    type,
    ...mapOptions(options),
    onRemove: () => {
      toastOwnership.delete(id);
      clearScheduledDismissal(id);
      userOnRemove?.();
    },
  });
  toastOwnership.set(id, pos);
  _onToast?.({ id, type, title, description: options?.description });
  return id;
}

function success(title: React.ReactNode, options?: ToastOptions) {
  return addOrUpdate(title, 'success', { duration: 5000, ...options });
}

function error(title: React.ReactNode, options?: ToastOptions) {
  return addOrUpdate(title, 'error', { duration: 5000, ...options });
}

function loading(title: React.ReactNode, options?: ToastOptions) {
  return addOrUpdate(title, 'loading', { duration: Infinity, ...options });
}

function info(title: React.ReactNode, options?: ToastOptions) {
  return addOrUpdate(title, 'info', { duration: 5000, ...options });
}

function promise<T>(promiseValue: Promise<T>, options: ToastPromiseOptions<T>) {
  const pos = options.position ?? _defaultPosition;
  const loadingTitle = typeof options.loading === 'function' ? options.loading() : options.loading;
  const id = loading(loadingTitle as React.ReactNode, { position: pos });

  // Route through our own addOrUpdate so the success/error phase uses our
  // interaction-aware scheduledDismissals instead of Base UI's internal
  // timer system (which has a FocusGuard-related resume bug).
  const handled = promiseValue.then(
    (data) => {
      const title = typeof options.success === 'function' ? options.success(data) : options.success;
      success(title as React.ReactNode, { id, position: pos });
      return data;
    },
    (err) => {
      const title = typeof options.error === 'function' ? options.error(err) : options.error;
      error(title as React.ReactNode, { id, position: pos });
      return Promise.reject(err);
    },
  );

  if (options.finally) {
    handled.finally(options.finally);
  }

  return handled;
}

function dismiss(id: string) {
  clearScheduledDismissal(id);
  const pos = toastOwnership.get(id);
  if (pos) {
    getManager(pos).close(id);
  }
}

function dismissAll() {
  for (const [id, pos] of toastOwnership) {
    clearScheduledDismissal(id);
    getManager(pos).close(id);
  }
  toastOwnership.clear();
}

function update(
  id: string,
  updates: { title?: React.ReactNode; type?: string; description?: React.ReactNode; duration?: number },
) {
  const pos = toastOwnership.get(id);
  if (!pos) return;
  const { duration, ...rest } = updates;
  getManager(pos).update(id, {
    ...rest,
    ...(duration !== undefined ? { timeout: duration } : {}),
  });
}

type CustomToastRenderFn = (props: CustomToastRenderProps) => React.ReactNode;

function custom(render: CustomToastRenderFn, options?: Omit<ToastOptions, 'description' | 'actionProps'>) {
  return addOrUpdate('', 'custom', {
    duration: 5000,
    ...options,
    data: { ...options?.data, render },
  });
}

const toast = Object.assign(
  (titleOrJsx: React.ReactNode, options?: ToastOptions) => {
    return addOrUpdate(titleOrJsx, 'default', options);
  },
  { success, error, loading, info, promise, dismiss, dismissAll, update, custom },
);

export {
  clearOwnershipForPosition,
  getManager,
  managers,
  setDefaultPosition,
  setOnToast,
  setPositionInteracting,
  subscribeBump,
  toast,
};
export type { CustomToastRenderFn, CustomToastRenderProps, ToastEventData, ToastOptions, ToastPromiseOptions, ToastType };
