'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useLightboxContext } from './lightbox-context';

interface LightboxThumbnailGroupState extends Record<string, unknown> {
  focusWithin: boolean;
}

interface LightboxThumbnailGroupProps
  extends useRender.ComponentProps<'div', LightboxThumbnailGroupState> {}

const thumbnailGroupStateAttributesMapping = {
  focusWithin: (value: unknown) => (value ? { 'data-focus-within': '' } : null),
};

/**
 * Container for Lightbox.Thumbnail buttons.
 * Uses role="tablist" — each child Thumbnail has role="tab".
 * Keyboard navigation: arrow keys with roving tabindex.
 */
const LightboxThumbnailGroup = React.forwardRef<HTMLDivElement, LightboxThumbnailGroupProps>(
  function LightboxThumbnailGroup(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const { loop } = useLightboxContext();

    const [focusWithin, setFocusWithin] = React.useState(false);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        const group = event.currentTarget;
        const tabs = Array.from(group.querySelectorAll<HTMLElement>('[role="tab"][data-index]'));
        if (tabs.length === 0) return;

        const currentIndex = tabs.findIndex((el) => el === document.activeElement);
        if (currentIndex === -1) return;

        let nextIndex: number | null = null;

        switch (event.key) {
          case 'ArrowRight':
          case 'ArrowDown':
            nextIndex = loop ? (currentIndex + 1) % tabs.length : Math.min(currentIndex + 1, tabs.length - 1);
            break;
          case 'ArrowLeft':
          case 'ArrowUp':
            nextIndex = loop
              ? (currentIndex - 1 + tabs.length) % tabs.length
              : Math.max(currentIndex - 1, 0);
            break;
          case 'Home':
            nextIndex = 0;
            break;
          case 'End':
            nextIndex = tabs.length - 1;
            break;
          default:
            return;
        }

        if (nextIndex === currentIndex) return;

        event.preventDefault();
        tabs[nextIndex].focus();
        tabs[nextIndex].click();
      },
      [loop],
    );

    const state = React.useMemo<LightboxThumbnailGroupState>(() => ({ focusWithin }), [focusWithin]);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      stateAttributesMapping: thumbnailGroupStateAttributesMapping,
      props: mergeProps<'div'>(
        {
          className: 'fui-LightboxThumbnailGroup',
          role: 'tablist',
          onKeyDown: handleKeyDown,
          onFocus: () => setFocusWithin(true),
          onBlur: (e: React.FocusEvent<HTMLDivElement>) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setFocusWithin(false);
            }
          },
        } as React.ComponentPropsWithRef<'div'>,
        elementProps as React.ComponentPropsWithRef<'div'>,
      ),
      defaultTagName: 'div',
    });
  },
);

LightboxThumbnailGroup.displayName = 'LightboxThumbnailGroup';

export { LightboxThumbnailGroup };
export type { LightboxThumbnailGroupProps, LightboxThumbnailGroupState };
