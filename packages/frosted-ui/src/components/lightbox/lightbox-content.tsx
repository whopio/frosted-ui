'use client';

import classNames from 'classnames';
import * as React from 'react';
import { createPortal } from 'react-dom';

import { useLightboxContext } from './lightbox-context';

interface LightboxContentProps extends React.ComponentPropsWithRef<'div'> {
  className?: string;
  children?: React.ReactNode;
  /** Portal container element. Defaults to document.body. */
  container?: Element | null;
}

const LightboxContent = React.forwardRef<HTMLDivElement, LightboxContentProps>(
  function LightboxContent(props, forwardedRef) {
    const { className, children, container, ...rest } = props;

    const { open, mounted, setOpen, activeIndex, setActiveIndex, itemCount, loop } = useLightboxContext();

    const contentRef = React.useRef<HTMLDivElement | null>(null);
    const previousFocusRef = React.useRef<Element | null>(null);
    const portalRef = React.useRef<HTMLDivElement | null>(null);

    const mergedContentRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        contentRef.current = node;
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef],
    );

    // --- Scroll lock ---
    React.useEffect(() => {
      if (!mounted) return;
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }, [mounted]);

    // --- Focus management ---
    React.useEffect(() => {
      if (open && contentRef.current) {
        previousFocusRef.current = document.activeElement;
        contentRef.current.focus({ preventScroll: true });
      } else if (!open && previousFocusRef.current) {
        (previousFocusRef.current as HTMLElement)?.focus?.({ preventScroll: true });
        previousFocusRef.current = null;
      }
    }, [open]);

    // --- Focus trap via `inert` ---
    React.useEffect(() => {
      if (!open) return;
      const portal = portalRef.current;
      if (!portal) return;

      const siblings = Array.from(document.body.children).filter((el) => el !== portal);
      siblings.forEach((el) => el.setAttribute('inert', ''));
      return () => siblings.forEach((el) => el.removeAttribute('inert'));
    }, [open]);

    // --- Keyboard handling ---
    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent) => {
        if (event.key === 'Escape') {
          event.stopPropagation();
          setOpen(false);
          return;
        }

        if (itemCount === 0) return;

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
      [activeIndex, itemCount, loop, setActiveIndex, setOpen],
    );

    const handleBackdropClick = React.useCallback(
      (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
          setOpen(false);
        }
      },
      [setOpen],
    );

    if (!mounted) return null;

    const portalTarget = container ?? (typeof document !== 'undefined' ? document.body : null);
    if (!portalTarget) return null;

    return createPortal(
      <div ref={portalRef} data-lightbox-portal="">
        <div
          className="fui-LightboxBackdrop"
          data-open={open || undefined}
          aria-hidden="true"
        />
        <div
          className="fui-LightboxOverlay"
          data-open={open || undefined}
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
        >
          <div
            ref={mergedContentRef}
            {...rest}
            className={classNames('fui-LightboxContent', className)}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            data-open={open || undefined}
          >
            {children}
          </div>
        </div>
      </div>,
      portalTarget,
    );
  },
);

LightboxContent.displayName = 'LightboxContent';

export { LightboxContent };
export type { LightboxContentProps };
