'use client';

import classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Theme } from '../../theme';
import { useLightboxContext } from './lightbox-context';
import { useOptionalZoomContext } from './lightbox-zoom-context';

const useLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

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
      </Theme>
    );

    return portalTarget ? ReactDOM.createPortal(content, portalTarget) : content;
  },
);

LightboxContent.displayName = 'LightboxContent';

export { LightboxContent };
export type { LightboxContentProps };

