'use client';

import { mergeProps, useRender } from '@base-ui/react';
import * as React from 'react';

import { useLightboxContext } from './lightbox-context';

interface LightboxCloseState extends Record<string, unknown> {}

interface LightboxCloseProps extends useRender.ComponentProps<'button', LightboxCloseState> {}

/**
 * Closes the lightbox when clicked.
 */
const LightboxClose = React.forwardRef<HTMLButtonElement, LightboxCloseProps>(
  function LightboxClose(props, forwardedRef) {
    const { render, ...elementProps } = props;
    const { setOpen } = useLightboxContext();

    const handleClick = React.useCallback(() => {
      setOpen(false);
    }, [setOpen]);

    const state = React.useMemo<LightboxCloseState>(() => ({}), []);

    return useRender({
      render,
      ref: forwardedRef,
      state,
      props: mergeProps<'button'>(
        {
          className: 'fui-LightboxClose',
          type: 'button',
          'aria-label': 'Close',
          onClick: handleClick,
        } as React.ComponentPropsWithRef<'button'>,
        elementProps as React.ComponentPropsWithRef<'button'>,
      ),
      defaultTagName: 'button',
    });
  },
);

LightboxClose.displayName = 'LightboxClose';

export { LightboxClose };
export type { LightboxCloseProps, LightboxCloseState };
