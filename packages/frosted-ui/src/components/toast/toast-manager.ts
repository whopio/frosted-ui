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

// The provider sets this on mount so imperative calls use the right default
let _defaultPosition: ToastPosition = 'bottom-right';

type ToastType = 'success' | 'error' | 'loading' | 'info' | 'default';

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

const toast = Object.assign(
  (titleOrJsx: React.ReactNode, options?: ToastOptions) => {
    return addOrUpdate(titleOrJsx, 'default', options);
  },
  { success, error, loading, info, promise, dismiss, update },
);

export { getManager, managers, setDefaultPosition, toast };
export type { ToastOptions, ToastPromiseOptions, ToastType };
