'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useOptionalZoomContext } from './lightbox-zoom-context';

interface LightboxZoomInState extends Record<string, unknown> {
  disabled: boolean;
}

interface LightboxZoomInProps extends useRender.ComponentProps<'button', LightboxZoomInState> {}

const stateAttributesMapping = {
  disabled: (value: unknown) => (value ? { 'data-disabled': '' } : null),
};

const LightboxZoomIn = React.forwardRef<HTMLButtonElement, LightboxZoomInProps>(
  function LightboxZoomIn(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const ctx = useOptionalZoomContext();
    const disabled = ctx ? !ctx.canZoomIn : true;

    const state = React.useMemo<LightboxZoomInState>(() => ({ disabled }), [disabled]);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      stateAttributesMapping,
      props: mergeProps<'button'>(
        {
          type: 'button',
          className: 'fui-LightboxZoomIn',
          'aria-label': 'Zoom in',
          disabled,
          onClick: ctx?.zoomIn,
        } as React.ComponentPropsWithRef<'button'>,
        elementProps as React.ComponentPropsWithRef<'button'>,
      ),
      defaultTagName: 'button',
    });
  },
);

LightboxZoomIn.displayName = 'LightboxZoomIn';

export { LightboxZoomIn };
export type { LightboxZoomInProps, LightboxZoomInState };
