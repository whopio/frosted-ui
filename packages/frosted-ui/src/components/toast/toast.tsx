'use client';

import { Toast as ToastPrimitive } from '@base-ui/react/toast';
import classNames from 'classnames';
import * as React from 'react';

import { Theme } from '../../theme';
import { Button } from '../button';
import { IconButton } from '../icon-button';
import { Spinner } from '../spinner';
import type { CustomToastRenderFn, ToastEventData } from './toast-manager';
import {
  clearOwnershipForPosition,
  managers,
  setDefaultPosition,
  setOnToast,
  setPositionInteracting,
  subscribeBump,
  toast,
} from './toast-manager';
import type { SwipeDirection, ToastPosition } from './toast.props';
import { toastPositions, toastProviderPropDefs } from './toast.props';

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

interface ToasterProps {
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
   * Callback fired when a new toast is created. Useful for telemetry
   * (e.g. reporting error toasts to Sentry).
   */
  onToast?: (toast: ToastEventData) => void;
}

const Toaster = (props: ToasterProps) => {
  const {
    timeout = toastProviderPropDefs.timeout.default,
    limit = toastProviderPropDefs.limit.default,
    position = toastProviderPropDefs.position.default,
    onToast,
  } = props;

  React.useEffect(() => {
    setDefaultPosition(position);
  }, [position]);

  React.useEffect(() => {
    setOnToast(onToast);
    return () => setOnToast(undefined);
  }, [onToast]);

  return (
    <>
      {toastPositions.map((pos) => (
        <PositionProvider key={pos} position={pos} timeout={timeout} limit={limit} />
      ))}
    </>
  );
};
Toaster.displayName = 'Toaster';

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
}

function PositionProvider({ position, timeout, limit }: PositionProviderProps) {
  const manager = managers.get(position) as ReturnType<typeof managers.get> & object;
  const swipeDirection = swipeDirectionsByPosition[position];
  const viewportRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = React.useCallback(() => setPositionInteracting(position, 'hover', true), [position]);
  const handleMouseLeave = React.useCallback(() => setPositionInteracting(position, 'hover', false), [position]);
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
          <PositionToastList position={position} swipeDirection={swipeDirection} />
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
  {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    showDismissButtton?: boolean;
  } & Record<string, unknown>
> = ({ className, style, children, showDismissButton = true, ...rest }) => {
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
      {showDismissButton ? <ToastCloseButton /> : null}
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

function PositionToastList({ position, swipeDirection }: PositionToastListProps) {
  const { toasts, close } = ToastPrimitive.useToastManager();
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
            {t.actionProps && (
              <ToastPrimitive.Action className="fui-ToastAction" render={<Button size="2" variant="solid" />}>
                {t.actionProps.children}
              </ToastPrimitive.Action>
            )}
          </div>
        </ToastPrimitive.Content>
        <ToastCloseButton />
      </ToastPrimitive.Root>
    );
  });
}

function ToastCloseButton() {
  return (
    <ToastPrimitive.Close
      className="fui-ToastClose"
      aria-label="Close"
      render={<IconButton size="1" variant="surface" />}
    >
      <CloseIcon />
    </ToastPrimitive.Close>
  );
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
    case 'warning':
      return (
        <span className={classNames('fui-ToastIcon', 'fui-ToastIcon-warning')}>
          <WarningIcon />
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
        d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C2.57711e-07 3.58172 3.58172 0 8 0ZM8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM10.7197 5.46973C11.0126 5.17683 11.4874 5.17683 11.7803 5.46973C12.0732 5.76262 12.0732 6.23738 11.7803 6.53027L7.28027 11.0303C6.98738 11.3232 6.51262 11.3232 6.21973 11.0303L4.21973 9.03027C3.92683 8.73738 3.92683 8.26262 4.21973 7.96973C4.51262 7.67683 4.98738 7.67683 5.28027 7.96973L6.75 9.43945L10.7197 5.46973Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM9.76758 5.17188C10.0604 4.87906 10.5352 4.87922 10.8281 5.17188C11.121 5.46477 11.121 5.93953 10.8281 6.23242L9.06055 8L10.8281 9.76758C11.121 10.0605 11.121 10.5352 10.8281 10.8281C10.5352 11.121 10.0605 11.121 9.76758 10.8281L8 9.06055L6.23242 10.8281C5.93953 11.121 5.46477 11.121 5.17188 10.8281C4.87922 10.5352 4.87906 10.0604 5.17188 9.76758L6.93945 8L5.17188 6.23242C4.879 5.93954 4.87902 5.46477 5.17188 5.17188C5.46477 4.87898 5.93953 4.87898 6.23242 5.17188L8 6.93945L9.76758 5.17188Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.07227 2.06732C6.92416 0.574072 9.07686 0.574022 9.92871 2.06732L15.6973 12.1806C16.5409 13.6603 15.4728 15.4995 13.7695 15.4999H2.23145C0.527755 15.4999 -0.541109 13.6605 0.302734 12.1806L6.07227 2.06732ZM8.62598 2.81049C8.34971 2.32619 7.65131 2.32625 7.375 2.81049L1.60547 12.9238C1.33208 13.4037 1.679 13.9999 2.23145 13.9999H13.7695C14.3215 13.9995 14.6677 13.4035 14.3945 12.9238L8.62598 2.81049ZM8 10.9999C8.55218 11.0001 8.99998 11.4477 9 11.9999C9 12.5522 8.55219 12.9998 8 12.9999C7.44772 12.9999 7 12.5522 7 11.9999C7.00002 11.4477 7.44773 10.9999 8 10.9999ZM8 4.99994C8.41411 5.00005 8.74998 5.33581 8.75 5.74994V8.99994C8.75 9.41408 8.41412 9.74983 8 9.74994C7.58579 9.74994 7.25 9.41415 7.25 8.99994V5.74994C7.25002 5.33574 7.5858 4.99994 8 4.99994Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM8.25 7C8.66421 7 9 7.33579 9 7.75V10.5H9.75C10.1642 10.5 10.5 10.8358 10.5 11.25C10.4999 11.6642 10.1642 12 9.75 12H6.25C5.83583 12 5.50007 11.6642 5.5 11.25C5.5 10.8358 5.83579 10.5 6.25 10.5H7.5V8.5H6.25C5.83579 8.5 5.5 8.16421 5.5 7.75C5.5 7.33579 5.83579 7 6.25 7H8.25ZM8 4.00391C8.55224 4.00391 8.99993 4.45168 9 5.00391C9 5.55619 8.55229 6.00391 8 6.00391C7.44772 6.00391 7 5.55619 7 5.00391C7.00007 4.45168 7.44776 4.00391 8 4.00391Z"
        fill="currentColor"
      />
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

export { Toaster };
export type { ToasterProps };
