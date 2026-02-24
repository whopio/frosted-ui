'use client';

import { Toast as ToastPrimitive } from '@base-ui/react/toast';
import classNames from 'classnames';
import * as React from 'react';
import { Theme } from '../../theme';
import { Spinner } from '../spinner';
import type { CustomToastRenderFn } from './toast-manager';
import { managers, setDefaultPosition, subscribeBump, toast } from './toast-manager';
import type { SwipeDirection, ToastPosition } from './toast.props';
import { toastPositions, toastProviderPropDefs } from './toast.props';

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
   * Maximum number of toasts visible at once per position.
   * @default 3
   */
  limit?: number;
  /**
   * Default position of toasts on screen. Individual toasts can override
   * this via `toast('msg', { position: 'top-center' })`.
   * @default 'bottom-right'
   */
  position?: ToastPosition;
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
    position = toastProviderPropDefs.position.default,
    onToast,
  } = props;

  React.useEffect(() => {
    setDefaultPosition(position);
  }, [position]);

  return (
    <>
      {children}
      {toastPositions.map((pos) => (
        <PositionProvider key={pos} position={pos} timeout={timeout} limit={limit} onToast={onToast} />
      ))}
    </>
  );
};
ToastProvider.displayName = 'ToastProvider';

const swipeDirectionsByPosition: Record<ToastPosition, SwipeDirection[]> = {
  'bottom-right': ['down', 'right'],
  'bottom-left': ['down', 'left'],
  'bottom-center': ['down'],
  'top-right': ['up', 'right'],
  'top-left': ['up', 'left'],
  'top-center': ['up'],
};

interface PositionProviderProps {
  position: ToastPosition;
  timeout: number;
  limit: number;
  onToast?: (toast: ToastData) => void;
}

function PositionProvider({ position, timeout, limit, onToast }: PositionProviderProps) {
  const manager = managers.get(position) as ReturnType<typeof managers.get> & object;
  const swipeDirection = swipeDirectionsByPosition[position];
  return (
    <ToastPrimitive.Provider toastManager={manager} timeout={timeout} limit={limit}>
      <ToastPrimitive.Portal>
        <ToastPrimitive.Viewport
          className="fui-ToastViewport"
          data-position={position}
          render={<Theme hasBackground={false} />}
        >
          <PositionToastList position={position} swipeDirection={swipeDirection} onToast={onToast} />
        </ToastPrimitive.Viewport>
      </ToastPrimitive.Portal>
    </ToastPrimitive.Provider>
  );
}

// Context carries per-toast bindings so the CustomToastSlot component reference
// stays stable across renders (avoids remounting).
const CustomToastCtx = React.createContext<{
  toast: Parameters<typeof ToastPrimitive.Root>[0]['toast'];
  position: ToastPosition;
  swipeDirection: SwipeDirection | SwipeDirection[];
} | null>(null);

const CustomToastSlot: React.FC<
  { className?: string; style?: React.CSSProperties; children: React.ReactNode } & Record<string, unknown>
> = ({ className, style, children, ...rest }) => {
  const ctx = React.useContext(CustomToastCtx);
  if (!ctx) return null;
  return (
    <ToastPrimitive.Root
      toast={ctx.toast}
      className={classNames('fui-ToastRoot', className)}
      data-toast-id={ctx.toast.id}
      data-position={ctx.position}
      swipeDirection={ctx.swipeDirection}
      style={style}
      {...rest}
    >
      <ToastPrimitive.Content className={classNames('fui-ToastContent', 'fui-ToastContent-custom')}>
        {children}
      </ToastPrimitive.Content>
    </ToastPrimitive.Root>
  );
};

interface PositionToastListProps {
  position: ToastPosition;
  swipeDirection: SwipeDirection | SwipeDirection[];
  onToast?: (toast: ToastData) => void;
}

function animateBump(id: string, type: string) {
  requestAnimationFrame(() => {
    const el = document.querySelector(`[data-toast-id="${CSS.escape(id)}"]`) as HTMLElement | null;
    if (!el || typeof el.animate !== 'function') return;
    const index = getComputedStyle(el).getPropertyValue('--toast-index').trim();
    if (index !== '' && index !== '0') return;

    if (type === 'error') {
      // Damped spring shake — modeled after Apple's "wrong password" oscillation
      el.animate(
        [
          { transform: 'translateX(0)', offset: 0 },
          { transform: 'translateX(-7px)', offset: 0.12 },
          { transform: 'translateX(6px)', offset: 0.24 },
          { transform: 'translateX(-4.5px)', offset: 0.38 },
          { transform: 'translateX(3px)', offset: 0.52 },
          { transform: 'translateX(-1.5px)', offset: 0.68 },
          { transform: 'translateX(0.5px)', offset: 0.84 },
          { transform: 'translateX(0)', offset: 1 },
        ],
        { duration: 500, easing: 'linear' },
      );
    } else {
      el.animate(
        [
          { transform: 'scale(1)', offset: 0 },
          { transform: 'scale(1.035)', offset: 0.22 },
          { transform: 'scale(0.99)', offset: 0.56 },
          { transform: 'scale(1.004)', offset: 0.78 },
          { transform: 'scale(1)', offset: 1 },
        ],
        { duration: 500, easing: 'linear' },
      );
    }
  });
}

function PositionToastList({ position, swipeDirection, onToast }: PositionToastListProps) {
  const { toasts } = ToastPrimitive.useToastManager();
  const reportedRef = React.useRef<Set<string>>(new Set());

  React.useEffect(() => subscribeBump(animateBump), []);

  React.useEffect(() => {
    if (!onToast) return;
    const currentIds = new Set<string>();
    for (const t of toasts) {
      currentIds.add(t.id);
      if (!reportedRef.current.has(t.id)) {
        reportedRef.current.add(t.id);
        onToast({ id: t.id, type: t.type, title: t.title, description: t.description });
      }
    }
    for (const id of reportedRef.current) {
      if (!currentIds.has(id)) reportedRef.current.delete(id);
    }
  }, [toasts, onToast]);

  return toasts.map((t) => {
    const customRender = t.data?.render as CustomToastRenderFn | undefined;
    const isCustom = t.type === 'custom' && typeof customRender === 'function';

    if (isCustom) {
      return (
        <CustomToastCtx.Provider key={t.id} value={{ toast: t, position, swipeDirection }}>
          {customRender({ close: () => toast.dismiss(t.id), id: t.id, Toast: CustomToastSlot })}
        </CustomToastCtx.Provider>
      );
    }

    return (
      <ToastPrimitive.Root
        key={t.id}
        toast={t}
        className="fui-ToastRoot"
        data-toast-id={t.id}
        data-position={position}
        swipeDirection={swipeDirection}
      >
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
    );
  });
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

export { ToastProvider };
export type { ToastProviderProps };
