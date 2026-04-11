'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useLightboxContext } from './lightbox-context';
import { useLightboxItemGroupContext } from './lightbox-item-group';

interface LightboxItemState extends Record<string, unknown> {
  active: boolean;
  index: number;
}

interface LightboxItemProps extends Omit<useRender.ComponentProps<'div', LightboxItemState>, 'children'> {
  /** The index of this item in the collection. */
  index: number;
  /** Optional caption for this item, displayed by Lightbox.Caption. */
  caption?: React.ReactNode;
  /**
   * Children can be a ReactNode or a render function that receives
   * the active state for lazy loading.
   */
  children?: React.ReactNode | ((state: { active: boolean; visible: boolean }) => React.ReactNode);
}

const itemStateAttributesMapping = {
  active: (value: unknown) => (value ? { 'data-active': '' } : null),
  index: (value: unknown) => ({ 'data-index': String(value) }),
};

/**
 * An individual lightbox item. Only renders when within the preload
 * window (active index +/- preload distance). Supports both static
 * children and render-prop children for lazy loading.
 */
const LightboxItem = React.forwardRef<HTMLDivElement, LightboxItemProps>(
  function LightboxItem(props, forwardedRef) {
    const { render, index, caption, children, ...elementProps } = props;

    const { registerCaption, setItemCount } = useLightboxContext();
    const groupContext = useLightboxItemGroupContext();

    const activeIndex = groupContext.activeIndex;
    const preload = groupContext.preload;
    const isActive = index === activeIndex;
    const distance = Math.abs(index - activeIndex);
    const isVisible = distance <= preload;

    React.useEffect(() => {
      setItemCount((prev: number) => Math.max(prev, index + 1));
    }, [index, setItemCount]);

    React.useEffect(() => {
      if (caption !== undefined) {
        return registerCaption(index, caption);
      }
    }, [index, caption, registerCaption]);

    const resolvedChildren = React.useMemo(() => {
      if (!isVisible) return null;
      return typeof children === 'function' ? children({ active: isActive, visible: isVisible }) : children;
    }, [isVisible, isActive, children]);

    const state = React.useMemo<LightboxItemState>(() => ({ active: isActive, index }), [isActive, index]);

    // useRender is a hook — must always be called regardless of visibility
    const rendered = useRender({
      render,
      ref: forwardedRef,
      state,
      stateAttributesMapping: itemStateAttributesMapping,
      props: mergeProps<'div'>(
        {
          className: 'fui-LightboxItem',
          role: 'tabpanel',
          'aria-hidden': !isActive,
          inert: !isActive ? ('' as unknown as boolean) : undefined,
        } as React.ComponentPropsWithRef<'div'>,
        elementProps as React.ComponentPropsWithRef<'div'>,
        { children: resolvedChildren } as React.ComponentPropsWithRef<'div'>,
      ),
      defaultTagName: 'div',
    });

    if (!isVisible) return null;

    return rendered;
  },
);

LightboxItem.displayName = 'LightboxItem';

export { LightboxItem };
export type { LightboxItemProps, LightboxItemState };
