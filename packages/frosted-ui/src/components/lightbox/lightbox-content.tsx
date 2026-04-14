'use client';

import classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Theme } from '../../theme';
import { useLightboxContext } from './lightbox-context';
import { useOptionalZoomContext } from './lightbox-zoom-context';

const useLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

const TABBABLE_SELECTOR = [
  'a[href]',
  'area[href]',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

function getTabbableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(TABBABLE_SELECTOR)).filter(
    (el) => !el.hasAttribute('data-focus-guard'),
  );
}

const focusGuardStyle: React.CSSProperties = {
  position: 'fixed',
  overflow: 'hidden',
  width: 1,
  height: 1,
  top: 0,
  left: 0,
  padding: 0,
  border: 0,
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
};

interface LightboxContentProps extends React.ComponentPropsWithRef<'div'> {
  className?: string;
  children?: React.ReactNode;
  /** Container element for the portal. Defaults to `document.body`. */
  container?: Element | DocumentFragment | null;
}

const LightboxContent = React.forwardRef<HTMLDivElement, LightboxContentProps>(
  function LightboxContent(props, forwardedRef) {
    const { className, children, container, ...rest } = props;

    const { open, mounted, setOpen, activeIndex, setActiveIndex, itemCount, loop, dialogElementRef } =
      useLightboxContext();
    const zoomContext = useOptionalZoomContext();

    const contentRef = React.useRef<HTMLDivElement | null>(null);

    const mergedRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        contentRef.current = node;
        dialogElementRef.current = node;
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef, dialogElementRef],
    );

    // Focus the content element on mount so keyboard events work immediately.
    useLayoutEffect(() => {
      if (mounted) {
        contentRef.current?.focus();
      }
    }, [mounted]);

    // Lock document scroll while the lightbox is open.
    React.useEffect(() => {
      if (!mounted) return;
      const html = document.documentElement;
      const originalOverflow = html.style.overflow;
      html.style.overflow = 'hidden';
      return () => {
        html.style.overflow = originalOverflow;
      };
    }, [mounted]);

    // Prevent native pinch-zoom on touch (e.g. iOS Safari tab-minimize gesture)
    // and on macOS trackpad (ctrlKey + wheel). Both require { passive: false }
    // so preventDefault() is honoured.
    React.useEffect(() => {
      if (!mounted) return;
      const el = contentRef.current;
      if (!el) return;
      const preventTouchPinch = (event: TouchEvent) => {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      };
      const preventWheelZoom = (event: WheelEvent) => {
        if (event.ctrlKey) {
          event.preventDefault();
        }
      };
      el.addEventListener('touchmove', preventTouchPinch, { passive: false });
      el.addEventListener('wheel', preventWheelZoom, { passive: false });
      return () => {
        el.removeEventListener('touchmove', preventTouchPinch);
        el.removeEventListener('wheel', preventWheelZoom);
      };
    }, [mounted]);

    // Close on Escape key. Listens on the document so it works regardless
    // of focus state, matching native <dialog> cancel behavior.
    React.useEffect(() => {
      if (!mounted) return;
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          setOpen(false);
        }
      };
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }, [mounted, setOpen]);

    // Arrow keys, Home, End for gallery navigation
    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent) => {
        if (itemCount === 0) return;

        // When zoomed in, arrow keys pan the image — don't navigate slides
        const isArrow = event.key.startsWith('Arrow');
        if (isArrow && zoomContext && zoomContext.zoom > 1) return;

        let nextIndex: number | null = null;

        switch (event.key) {
          case 'ArrowRight':
          case 'ArrowDown':
            nextIndex = loop ? (activeIndex + 1) % itemCount : Math.min(activeIndex + 1, itemCount - 1);
            break;
          case 'ArrowLeft':
          case 'ArrowUp':
            nextIndex = loop ? (activeIndex - 1 + itemCount) % itemCount : Math.max(activeIndex - 1, 0);
            break;
          case 'Home':
            nextIndex = 0;
            break;
          case 'End':
            nextIndex = itemCount - 1;
            break;
          default:
            return;
        }

        if (nextIndex !== null && nextIndex !== activeIndex) {
          event.preventDefault();
          setActiveIndex(nextIndex, 'keyboard');
        }
      },
      [activeIndex, itemCount, loop, setActiveIndex, zoomContext],
    );

    // Click on the backdrop or the content container itself (not children)
    // closes the lightbox, matching native <dialog> backdrop click behavior.
    const handleClick = React.useCallback(
      (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
          setOpen(false);
        }
      },
      [setOpen],
    );

    // Focus guard handlers — redirect Tab past the edges back into the content.
    // Before-guard: user Shift+Tabbed past the first element → focus the last.
    // After-guard: user Tabbed past the last element → focus the first.
    const handleBeforeGuardFocus = React.useCallback(() => {
      const el = contentRef.current;
      if (!el) return;
      const tabbables = getTabbableElements(el);
      const target = tabbables[tabbables.length - 1] ?? el;
      target.focus();
    }, []);

    const handleAfterGuardFocus = React.useCallback(() => {
      const el = contentRef.current;
      if (!el) return;
      const tabbables = getTabbableElements(el);
      const target = tabbables[0] ?? el;
      target.focus();
    }, []);

    if (!mounted) return null;

    const portalTarget = container ?? (typeof document !== 'undefined' ? document.body : null);

    const content = (
      <Theme appearance="dark" hasBackground={false}>
        <div
          className="fui-LightboxBackdrop"
          data-open={open || undefined}
          aria-hidden="true"
          onClick={handleClick}
        />
        <span
          tabIndex={0}
          aria-hidden="true"
          data-focus-guard=""
          style={focusGuardStyle}
          onFocus={handleBeforeGuardFocus}
        />
        <div
          ref={mergedRef}
          role="dialog"
          aria-modal="true"
          className={classNames('fui-LightboxContent', className)}
          data-open={open || undefined}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          tabIndex={-1}
          {...rest}
        >
          {children}
        </div>
        <span
          tabIndex={0}
          aria-hidden="true"
          data-focus-guard=""
          style={focusGuardStyle}
          onFocus={handleAfterGuardFocus}
        />
      </Theme>
    );

    return portalTarget ? ReactDOM.createPortal(content, portalTarget) : content;
  },
);

LightboxContent.displayName = 'LightboxContent';

export { LightboxContent };
export type { LightboxContentProps };

