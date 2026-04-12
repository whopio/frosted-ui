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
 *
 * When the item is active, registers its DOM element in context
 * so view transitions can morph to/from it.
 */
const LightboxItem = React.forwardRef<HTMLDivElement, LightboxItemProps>(
  function LightboxItem(props, forwardedRef) {
    const { render, index, caption, children, ...elementProps } = props;

    const { registerCaption, registerItem, activeItemElementRef } = useLightboxContext();
    const groupContext = useLightboxItemGroupContext();

    const activeIndex = groupContext.activeIndex;
    const preload = groupContext.preload;
    const isActive = index === activeIndex;
    const linearDist = Math.abs(index - activeIndex);
    const distance = groupContext.loop && groupContext.itemCount > 0
      ? Math.min(linearDist, groupContext.itemCount - linearDist)
      : linearDist;
    const isVisible = distance <= preload;

    const internalRef = React.useRef<HTMLDivElement | null>(null);

    const mergedRefCallback = React.useCallback(
      (node: HTMLDivElement | null) => {
        internalRef.current = node;
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef],
    );

    // Register active item element for view transitions.
    // useLayoutEffect ensures the ref is set synchronously after
    // commit, which is critical for flushSync in the view transition flow.
    React.useLayoutEffect(() => {
      if (isActive && internalRef.current) {
        activeItemElementRef.current = internalRef.current;
      }
    }, [isActive, activeItemElementRef]);

    React.useEffect(() => {
      return registerItem(index);
    }, [index, registerItem]);

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
      ref: mergedRefCallback,
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
