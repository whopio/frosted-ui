'use client';

import classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Theme } from '../../theme';
import { useLightboxContext } from './lightbox-context';
import { useOptionalZoomContext } from './lightbox-zoom-context';

const useLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

interface LightboxContentProps extends React.ComponentPropsWithRef<'dialog'> {
  className?: string;
  children?: React.ReactNode;
  /** Container element for the portal. Defaults to `document.body`. */
  container?: Element | DocumentFragment | null;
}

const LightboxContent = React.forwardRef<HTMLDialogElement, LightboxContentProps>(
  function LightboxContent(props, forwardedRef) {
    const { className, children, container, ...rest } = props;

    const { open, mounted, setOpen, activeIndex, setActiveIndex, itemCount, loop, dialogElementRef } =
      useLightboxContext();
    const zoomContext = useOptionalZoomContext();

    const dialogRef = React.useRef<HTMLDialogElement | null>(null);

    const mergedRef = React.useCallback(
      (node: HTMLDialogElement | null) => {
        dialogRef.current = node;
        dialogElementRef.current = node;
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef, dialogElementRef],
    );

    // Show/close the native dialog in sync with mounted state.
    // useLayoutEffect so .showModal() runs before paint (no flash).
    useLayoutEffect(() => {
      const el = dialogRef.current;
      if (!el) return;
      if (mounted && !el.open) {
        el.showModal();
      } else if (!mounted && el.open) {
        el.close();
      }
    }, [mounted]);

    // Native cancel event fires on ESC regardless of focus state.
    // Prevent default (which would close the dialog directly) and
    // route through our state management for proper exit animations.
    const handleCancel = React.useCallback(
      (event: React.SyntheticEvent) => {
        event.preventDefault();
        setOpen(false);
      },
      [setOpen],
    );

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

    // Click on the dialog itself (not children) closes the lightbox.
    // The dialog is fullscreen so this catches clicks on the "backdrop area".
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

    const dialog = (
      <Theme
        appearance="dark"
        hasBackground={false}
        render={
          <dialog
            ref={mergedRef}
            className={classNames('fui-LightboxContent', className)}
            data-open={open || undefined}
            onCancel={handleCancel}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
            tabIndex={-1}
            {...rest}
          >
            {children}
          </dialog>
        }
      />
    );

    return portalTarget ? ReactDOM.createPortal(dialog, portalTarget) : dialog;
  },
);

LightboxContent.displayName = 'LightboxContent';

export { LightboxContent };
export type { LightboxContentProps };

