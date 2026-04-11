'use client';

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import classNames from 'classnames';
import * as React from 'react';

import { useLightboxContext } from './lightbox-context';

type PortalProps = React.ComponentProps<typeof DialogPrimitive.Portal>;

interface LightboxContentProps extends Omit<React.ComponentProps<typeof DialogPrimitive.Popup>, 'className' | 'render'> {
  className?: string;
  children?: React.ReactNode;
  container?: PortalProps['container'];
  keepMounted?: PortalProps['keepMounted'];
}

/**
 * The lightbox overlay content. Renders inside a portal with a backdrop
 * and focus trap. Handles arrow-key navigation between items at the
 * dialog level.
 *
 * Internally uses Base UI Dialog primitives for modal semantics:
 * Portal -> Backdrop -> Viewport -> Popup.
 */
const LightboxContent = (props: LightboxContentProps) => {
  const { className, children, keepMounted, container, ...popupProps } = props;

  const { open, setOpen, activeIndex, setActiveIndex, itemCount, loop } = useLightboxContext();

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      event.stopPropagation();

      if (itemCount === 0) return;

      let nextIndex: number | null = null;

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown': {
          if (loop) {
            nextIndex = (activeIndex + 1) % itemCount;
          } else {
            nextIndex = Math.min(activeIndex + 1, itemCount - 1);
          }
          break;
        }
        case 'ArrowLeft':
        case 'ArrowUp': {
          if (loop) {
            nextIndex = (activeIndex - 1 + itemCount) % itemCount;
          } else {
            nextIndex = Math.max(activeIndex - 1, 0);
          }
          break;
        }
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
    [activeIndex, itemCount, loop, setActiveIndex],
  );

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen} modal>
      <DialogPrimitive.Portal container={container} keepMounted={keepMounted}>
        <DialogPrimitive.Backdrop className={classNames('fui-LightboxBackdrop')} />
        <DialogPrimitive.Viewport className="fui-LightboxOverlay" onKeyDown={handleKeyDown}>
          <DialogPrimitive.Popup
            {...popupProps}
            className={classNames('fui-LightboxContent', className)}
          >
            {children}
          </DialogPrimitive.Popup>
        </DialogPrimitive.Viewport>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

LightboxContent.displayName = 'LightboxContent';

export { LightboxContent };
export type { LightboxContentProps };

