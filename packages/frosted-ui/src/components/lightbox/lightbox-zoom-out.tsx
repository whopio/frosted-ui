'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useOptionalZoomContext } from './lightbox-zoom-context';

interface LightboxZoomOutState extends Record<string, unknown> {
  disabled: boolean;
}

interface LightboxZoomOutProps extends useRender.ComponentProps<'button', LightboxZoomOutState> {}

const stateAttributesMapping = {
  disabled: (value: unknown) => (value ? { 'data-disabled': '' } : null),
};

const LightboxZoomOut = React.forwardRef<HTMLButtonElement, LightboxZoomOutProps>(
  function LightboxZoomOut(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const ctx = useOptionalZoomContext();
    const disabled = ctx ? !ctx.canZoomOut : true;

    const state = React.useMemo<LightboxZoomOutState>(() => ({ disabled }), [disabled]);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      stateAttributesMapping,
      props: mergeProps<'button'>(
        {
          type: 'button',
          className: 'fui-LightboxZoomOut',
          'aria-label': 'Zoom out',
          disabled,
          onClick: ctx?.zoomOut,
        } as React.ComponentPropsWithRef<'button'>,
        elementProps as React.ComponentPropsWithRef<'button'>,
      ),
      defaultTagName: 'button',
    });
  },
);

LightboxZoomOut.displayName = 'LightboxZoomOut';

export { LightboxZoomOut };
export type { LightboxZoomOutProps, LightboxZoomOutState };
