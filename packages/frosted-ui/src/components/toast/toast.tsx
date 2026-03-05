'use client';

import { Toast as ToastPrimitive } from '@base-ui/react/toast';
import classNames from 'classnames';
import * as React from 'react';
import { Theme } from '../../theme';
import { IconButton } from '../icon-button';
import { Spinner } from '../spinner';
import type { CustomToastRenderFn } from './toast-manager';
import {
  clearOwnershipForPosition,
  managers,
  setDefaultPosition,
  setPositionInteracting,
  subscribeBump,
  toast,
} from './toast-manager';
import type { SwipeDirection, ToastPosition } from './toast.props';
import { toastPositions, toastProviderPropDefs } from './toast.props';

interface ToastData {
  id: string;
  type?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

// Base UI's ToastRoot swipe handler skips `button,a,input,textarea,[role="button"],[data-swipe-ignore]`
// but NOT ARIA widget roles rendered on non-semantic elements (e.g. <span role="switch">).
// Stopping propagation from Content prevents the Root's handler from calling setPointerCapture,
// which would steal pointerup and suppress the click event on these controls.
const EXTRA_INTERACTIVE_SELECTOR = [
  '[role="switch"]',
  '[role="checkbox"]',
  '[role="radio"]',
  '[role="slider"]',
  '[role="combobox"]',
  '[role="spinbutton"]',
  '[role="menuitem"]',
  '[role="option"]',
  '[role="tab"]',
  'select',
  '[contenteditable]',
  'label',
].join(',');

function guardInteractivePointerDown(event: React.PointerEvent) {
  const target = event.target as HTMLElement;
  if (target.closest?.(EXTRA_INTERACTIVE_SELECTOR)) {
    event.stopPropagation();
  }
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
  const viewportRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = React.useCallback(
    () => setPositionInteracting(position, 'hover', true),
    [position],
  );
  const handleMouseLeave = React.useCallback(
    () => setPositionInteracting(position, 'hover', false),
    [position],
  );
  const handleFocus = React.useCallback(() => {
    const active = document.activeElement;
    try {
      if (active?.matches(':focus-visible')) {
        setPositionInteracting(position, 'focus', true);
      }
    } catch {
      setPositionInteracting(position, 'focus', true);
    }
  }, [position]);
  const handleBlur = React.useCallback(() => {
    // Defer the check until after focus has fully settled. When Tabbing out,
    // focus briefly passes through Base UI's inner FocusGuard (inside the
    // viewport) before jumping to the element outside. The synchronous
    // relatedTarget check would see the FocusGuard and think focus is still
    // inside. requestAnimationFrame lets all intermediate focus moves complete
    // so we can check the final document.activeElement.
    requestAnimationFrame(() => {
      if (viewportRef.current && !viewportRef.current.contains(document.activeElement)) {
        setPositionInteracting(position, 'focus', false);
      }
    });
  }, [position]);

  return (
    <ToastPrimitive.Provider toastManager={manager} timeout={timeout} limit={limit}>
      <ToastPrimitive.Portal>
        <ToastPrimitive.Viewport
          ref={viewportRef}
          className="fui-ToastViewport"
          data-position={position}
          render={<Theme hasBackground={false} />}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
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

const CustomToastRoot: React.FC<
  { className?: string; style?: React.CSSProperties; children?: React.ReactNode } & Record<string, unknown>
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
      {children}
    </ToastPrimitive.Root>
  );
};

const CustomToastContent: React.FC<
  { className?: string; style?: React.CSSProperties; children: React.ReactNode } & Record<string, unknown>
> = ({ className, style, children, ...rest }) => {
  return (
    <ToastPrimitive.Content
      className={classNames('fui-ToastContent', 'fui-ToastContent-custom', className)}
      style={style}
      onPointerDown={guardInteractivePointerDown}
      {...rest}
    >
      {children}
    </ToastPrimitive.Content>
  );
};

const CustomToastTitle: React.FC<
  { className?: string; style?: React.CSSProperties; children: React.ReactNode } & Record<string, unknown>
> = ({ className, ...rest }) => <ToastPrimitive.Title className={classNames('fui-ToastTitle', className)} {...rest} />;

const CustomToastDescription: React.FC<
  { className?: string; style?: React.CSSProperties; children: React.ReactNode } & Record<string, unknown>
> = ({ className, ...rest }) => (
  <ToastPrimitive.Description className={classNames('fui-ToastDescription', className)} {...rest} />
);

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
  const { toasts, close } = ToastPrimitive.useToastManager();
  const reportedRef = React.useRef<Set<string>>(new Set());
  const prevTypesRef = React.useRef<Map<string, string>>(new Map());
  const dismissingRef = React.useRef<Set<string>>(new Set());

  React.useEffect(() => {
    const unsubscribe = subscribeBump(animateBump);
    return () => {
      unsubscribe();
      clearOwnershipForPosition(position);
    };
  }, [position]);

  // Guard against Base UI's recalculateHeight resetting transitionStatus on
  // toasts that are mid-dismiss. Re-close them in a layout effect so the
  // browser never paints the incorrectly-visible frame.
  React.useLayoutEffect(() => {
    const currentIds = new Set<string>();
    for (const t of toasts) {
      currentIds.add(t.id);
      const status = (t as unknown as Record<string, unknown>).transitionStatus;
      if (status === 'ending') {
        dismissingRef.current.add(t.id);
      } else if (dismissingRef.current.has(t.id)) {
        close(t.id);
      }
    }
    for (const id of dismissingRef.current) {
      if (!currentIds.has(id)) dismissingRef.current.delete(id);
    }
  }, [toasts, close]);

  // Detect type changes (e.g. loading → success via toast.promise) and trigger bump
  React.useEffect(() => {
    const prev = prevTypesRef.current;
    for (const t of toasts) {
      const oldType = prev.get(t.id);
      if (oldType !== undefined && oldType !== t.type && t.type) {
        animateBump(t.id, t.type);
      }
    }
    const next = new Map<string, string>();
    for (const t of toasts) {
      if (t.type) next.set(t.id, t.type);
    }
    prevTypesRef.current = next;
  }, [toasts]);

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
      const Render = customRender;
      return (
        <CustomToastCtx.Provider key={t.id} value={{ toast: t, position, swipeDirection }}>
          <Render
            close={() => toast.dismiss(t.id)}
            id={t.id}
            Toast={{
              Root: CustomToastRoot,
              Content: CustomToastContent,
              Title: CustomToastTitle,
              Description: CustomToastDescription,
            }}
          />
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
        <ToastPrimitive.Content className="fui-ToastContent" onPointerDown={guardInteractivePointerDown}>
          <ToastIcon type={t.type} />
          <div className="fui-ToastBody">
            <ToastPrimitive.Title className="fui-ToastTitle" />
            <ToastPrimitive.Description className="fui-ToastDescription" />
          </div>
          {t.actionProps && (
            <ToastPrimitive.Action className="fui-ToastAction">{t.actionProps.children}</ToastPrimitive.Action>
          )}
        </ToastPrimitive.Content>
        <ToastPrimitive.Close
          className="fui-ToastClose"
          aria-label="Close"
          render={<IconButton size="1" variant="surface" />}
        >
          <CloseIcon />
        </ToastPrimitive.Close>
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
