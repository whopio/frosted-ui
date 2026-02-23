'use client';

import { Toast as ToastPrimitive } from '@base-ui/react/toast';
import classNames from 'classnames';
import * as React from 'react';
import { Theme } from '../../theme';
import { Spinner } from '../spinner';
import { toastManager } from './toast-manager';
import type { SwipeDirection } from './toast.props';
import { toastProviderPropDefs } from './toast.props';

interface ToastData {
  id: string;
  type?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

interface ToastProviderProps {
  children: React.ReactNode;
  /**
   * Default auto-dismiss duration in milliseconds.
   * @default 5000
   */
  timeout?: number;
  /**
   * Maximum number of toasts visible at once.
   * @default 3
   */
  limit?: number;
  /**
   * Direction(s) in which toasts can be swiped to dismiss.
   * @default ['down', 'right']
   */
  swipeDirection?: SwipeDirection | SwipeDirection[];
  /**
   * Callback fired when a toast is added. Useful for telemetry (e.g. Sentry reporting).
   * Receives toast data including id, type, title, and description.
   */
  onToast?: (toast: ToastData) => void;
}

const ToastProvider = (props: ToastProviderProps) => {
  const {
    children,
    timeout = toastProviderPropDefs.timeout.default,
    limit = toastProviderPropDefs.limit.default,
    swipeDirection = ['down', 'right'] as SwipeDirection[],
    onToast,
  } = props;

  return (
    <ToastPrimitive.Provider toastManager={toastManager} timeout={timeout} limit={limit}>
      {children}

      <ToastPrimitive.Portal>
        <ToastPrimitive.Viewport className="fui-ToastViewport" render={<Theme />}>
          <ToastList swipeDirection={swipeDirection} onToast={onToast} />
        </ToastPrimitive.Viewport>
      </ToastPrimitive.Portal>
    </ToastPrimitive.Provider>
  );
};
ToastProvider.displayName = 'Toast.Provider';

interface ToastListProps {
  swipeDirection: SwipeDirection | SwipeDirection[];
  onToast?: (toast: ToastData) => void;
}

function ToastList({ swipeDirection, onToast }: ToastListProps) {
  const { toasts } = ToastPrimitive.useToastManager();
  const reportedRef = React.useRef<Set<string>>(new Set());

  React.useEffect(() => {
    if (!onToast) return;
    for (const t of toasts) {
      if (!reportedRef.current.has(t.id)) {
        reportedRef.current.add(t.id);
        onToast({ id: t.id, type: t.type, title: t.title, description: t.description });
      }
    }
  }, [toasts, onToast]);

  return toasts.map((t) => (
    <ToastPrimitive.Root key={t.id} toast={t} className="fui-ToastRoot" swipeDirection={swipeDirection}>
      <ToastPrimitive.Content className="fui-ToastContent">
        <ToastIcon type={t.type} />
        <div className="fui-ToastBody">
          <ToastPrimitive.Title className="fui-ToastTitle" />
          <ToastPrimitive.Description className="fui-ToastDescription" />
        </div>
        {t.actionProps && (
          <ToastPrimitive.Action className="fui-ToastAction">{t.actionProps.children}</ToastPrimitive.Action>
        )}
        <ToastPrimitive.Close className="fui-ToastClose" aria-label="Close">
          <CloseIcon />
        </ToastPrimitive.Close>
      </ToastPrimitive.Content>
    </ToastPrimitive.Root>
  ));
}

function ToastIcon({ type }: { type?: string }) {
  switch (type) {
    case 'success':
      return (
        <span className={classNames('fui-ToastIcon', 'fui-ToastIcon-success')}>
          <SuccessIcon />
        </span>
      );
    case 'error':
      return (
        <span className={classNames('fui-ToastIcon', 'fui-ToastIcon-error')}>
          <ErrorIcon />
        </span>
      );
    case 'info':
      return (
        <span className={classNames('fui-ToastIcon', 'fui-ToastIcon-info')}>
          <InfoIcon />
        </span>
      );
    case 'loading':
      return (
        <span className={classNames('fui-ToastIcon', 'fui-ToastIcon-loading')}>
          <Spinner size="2" />
        </span>
      );
    default:
      return null;
  }
}

function SuccessIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M5.5 8L7.2 9.9L10.5 6.1"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path d="M6 6L10 10M10 6L6 10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path d="M8 7V11" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <circle cx="8" cy="5" r="0.75" fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3L9 9M9 3L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export { ToastProvider as Provider };
export type { ToastProviderProps as ProviderProps };
