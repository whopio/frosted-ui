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
    if (pos === position) toastOwnership.delete(id);
  }
}

// The provider sets this on mount so imperative calls use the right default
let _defaultPosition: ToastPosition = 'bottom-right';

type ToastType = 'success' | 'error' | 'loading' | 'info' | 'default' | 'custom';

interface CustomToastRenderProps {
  close: () => void;
  id: string;
  Toast: React.FC<
    { className?: string; style?: React.CSSProperties; children: React.ReactNode } & Record<string, unknown>
  >;
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

function getManager(position: ToastPosition) {
  // All managers are pre-created in the loop above
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return managers.get(position)!;
}

function resolvePosition(options?: ToastOptions): ToastPosition {
  return options?.position ?? _defaultPosition;
}

function mapOptions(options?: ToastOptions) {
  if (!options) return {};
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { duration, id, position, ...rest } = options;
  return {
    ...(duration !== undefined ? { timeout: duration } : {}),
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

function addOrUpdate(title: React.ReactNode, type: ToastType, options?: ToastOptions) {
  // Update an existing toast on its original manager
  if (options?.id && toastOwnership.has(options.id)) {
    const originalPos = toastOwnership.get(options.id) as ToastPosition;
    const manager = getManager(originalPos);
    manager.update(options.id, {
      title,
      type,
      ...(type !== 'loading' && options?.duration !== undefined ? { timeout: options.duration } : {}),
      ...mapOptions({ ...options, id: undefined }),
    });
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
      userOnRemove?.();
    },
  });
  toastOwnership.set(id, pos);
  return id;
}

function success(title: React.ReactNode, options?: ToastOptions) {
  return addOrUpdate(title, 'success', { duration: 5000, ...options });
}

function error(title: React.ReactNode, options?: ToastOptions) {
  return addOrUpdate(title, 'error', { duration: 5000, ...options });
}

function loading(title: React.ReactNode, options?: ToastOptions) {
  return addOrUpdate(title, 'loading', { duration: 0, ...options });
}

function info(title: React.ReactNode, options?: ToastOptions) {
  return addOrUpdate(title, 'info', { duration: 5000, ...options });
}

function promise<T>(promiseValue: Promise<T>, options: ToastPromiseOptions<T>) {
  const pos = options.position ?? _defaultPosition;
  const manager = getManager(pos);

  const result = manager.promise(promiseValue, {
    loading: {
      title: typeof options.loading === 'function' ? options.loading() : options.loading,
      type: 'loading',
    },
    success: (data: T) => ({
      title: typeof options.success === 'function' ? options.success(data) : options.success,
      type: 'success',
    }),
    error: (err: unknown) => ({
      title: typeof options.error === 'function' ? options.error(err) : options.error,
      type: 'error',
    }),
  });

  if (options.finally) {
    result.finally(options.finally);
  }

  return result;
}

function dismiss(id: string) {
  const pos = toastOwnership.get(id);
  if (pos) {
    getManager(pos).close(id);
  }
}

function dismissAll() {
  for (const [id, pos] of toastOwnership) {
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

export { clearOwnershipForPosition, getManager, managers, setDefaultPosition, subscribeBump, toast };
export type { CustomToastRenderFn, CustomToastRenderProps, ToastOptions, ToastPromiseOptions, ToastType };
