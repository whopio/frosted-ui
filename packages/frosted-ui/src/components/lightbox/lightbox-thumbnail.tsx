'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useLightboxContext } from './lightbox-context';

interface LightboxThumbnailState extends Record<string, unknown> {
  active: boolean;
  index: number;
}

interface LightboxThumbnailProps extends useRender.ComponentProps<'button', LightboxThumbnailState> {
  /** The index of the item this thumbnail navigates to. */
  index: number;
}

const thumbnailStateAttributesMapping = {
  active: (value: unknown) => (value ? { 'data-active': '' } : null),
  index: (value: unknown) => ({ 'data-index': String(value) }),
};

/**
 * A thumbnail button that navigates to a specific item in the lightbox.
 * Uses role="tab" within a ThumbnailGroup (role="tablist"),
 * with roving tabindex for keyboard navigation.
 */
const LightboxThumbnail = React.forwardRef<HTMLButtonElement, LightboxThumbnailProps>(
  function LightboxThumbnail(props, forwardedRef) {
    const { render, index, ...elementProps } = props;
    const { activeIndex, setActiveIndex } = useLightboxContext();

    const isActive = index === activeIndex;

    const handleClick = React.useCallback(() => {
      setActiveIndex(index, 'thumbnail');
    }, [index, setActiveIndex]);

    const state = React.useMemo<LightboxThumbnailState>(() => ({ active: isActive, index }), [isActive, index]);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      stateAttributesMapping: thumbnailStateAttributesMapping,
      props: mergeProps<'button'>(
        {
          className: 'fui-LightboxThumbnail',
          type: 'button',
          role: 'tab',
          'aria-selected': isActive,
          tabIndex: isActive ? 0 : -1,
          onClick: handleClick,
        } as React.ComponentPropsWithRef<'button'>,
        elementProps as React.ComponentPropsWithRef<'button'>,
      ),
      defaultTagName: 'button',
    });
  },
);

LightboxThumbnail.displayName = 'LightboxThumbnail';

export { LightboxThumbnail };
export type { LightboxThumbnailProps, LightboxThumbnailState };
