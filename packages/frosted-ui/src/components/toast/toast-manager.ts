'use client';

import { Toast } from '@base-ui/react/toast';
import type * as React from 'react';

const toastManager = Toast.createToastManager();

type ToastType = 'success' | 'error' | 'loading' | 'info' | 'default';

interface ToastOptions {
  id?: string;
  description?: React.ReactNode;
  duration?: number;
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
}

function mapOptions(options?: ToastOptions) {
  if (!options) return {};
  const { duration, id, ...rest } = options;
  return {
    ...(duration !== undefined ? { timeout: duration } : {}),
    ...rest,
  };
}

function addOrUpdate(title: React.ReactNode, type: ToastType, options?: ToastOptions) {
  if (options?.id) {
    toastManager.update(options.id, {
      title,
      type,
      ...(type !== 'loading' ? { timeout: options?.duration ?? 5000 } : {}),
      ...mapOptions({ ...options, id: undefined }),
    });
    return options.id;
  }
  return toastManager.add({
    title,
    type,
    ...mapOptions(options),
  });
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
  const result = toastManager.promise(promiseValue, {
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
  toastManager.close(id);
}

function update(id: string, updates: { title?: React.ReactNode; type?: string; description?: React.ReactNode; duration?: number }) {
  const { duration, ...rest } = updates;
  toastManager.update(id, {
    ...rest,
    ...(duration !== undefined ? { timeout: duration } : {}),
  });
}

const toast = Object.assign(
  (titleOrJsx: React.ReactNode, options?: ToastOptions) => {
    return addOrUpdate(titleOrJsx, 'default', options);
  },
  { success, error, loading, info, promise, dismiss, update, manager: toastManager },
);

export { toast, toastManager };
export type { ToastOptions, ToastPromiseOptions, ToastType };
