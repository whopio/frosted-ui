'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useLightboxContext } from './lightbox-context';

interface LightboxCaptionState extends Record<string, unknown> {
  index: number;
  hasCaption: boolean;
}

interface LightboxCaptionProps extends useRender.ComponentProps<'div', LightboxCaptionState> {}

const captionStateAttributesMapping = {
  index: () => null,
  hasCaption: (value: unknown) => (value ? { 'data-has-caption': '' } : null),
};

/**
 * Renders the caption for the currently active lightbox item.
 * Reads from the caption registry populated by each Lightbox.Item's
 * `caption` prop.
 *
 * Renders nothing visible when no caption is set for the active item,
 * but stays in the DOM for ARIA purposes.
 */
const LightboxCaption = React.forwardRef<HTMLDivElement, LightboxCaptionProps>(
  function LightboxCaption(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const { activeIndex, captionsRef } = useLightboxContext();

    const caption = captionsRef.current.get(activeIndex);
    const hasCaption = caption !== undefined;

    const state = React.useMemo<LightboxCaptionState>(
      () => ({ index: activeIndex, hasCaption }),
      [activeIndex, hasCaption],
    );

    return useRender({
      render,
      ref: forwardedRef,
      state,
      stateAttributesMapping: captionStateAttributesMapping,
      props: mergeProps<'div'>(
        {
          className: 'fui-LightboxCaption',
          'aria-live': 'polite',
          'aria-atomic': true,
        } as React.ComponentPropsWithRef<'div'>,
        elementProps as React.ComponentPropsWithRef<'div'>,
        { children: hasCaption ? caption : null } as React.ComponentPropsWithRef<'div'>,
      ),
      defaultTagName: 'div',
    });
  },
);

LightboxCaption.displayName = 'LightboxCaption';

export { LightboxCaption };
export type { LightboxCaptionProps, LightboxCaptionState };
