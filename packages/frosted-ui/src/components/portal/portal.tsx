'use client';

import { useRender } from '@base-ui/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useLayoutEffect } from '../../helpers';

/* -------------------------------------------------------------------------------------------------
 * Portal
 * -----------------------------------------------------------------------------------------------*/

interface PortalProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * An optional container where the portaled content should be appended.
   */
  container?: Element | DocumentFragment | null;
  /**
   * Use the `render` prop to override the default rendered element.
   */
  render?: useRender.ComponentProps<'div'>['render'];
}

const Portal = React.forwardRef<HTMLDivElement, PortalProps>((props, forwardedRef) => {
  const { container: containerProp, render, ...portalProps } = props;
  const [mounted, setMounted] = React.useState(false);

  // Use useLayoutEffect for synchronous DOM updates (SSR-safe)
  useLayoutEffect(() => setMounted(true), []);

  const container = containerProp || (mounted && globalThis?.document?.body);

  const element = useRender({
    render,
    props: { ...portalProps, ref: forwardedRef },
    defaultTagName: 'div',
  });

  return container ? ReactDOM.createPortal(element, container) : null;
});

Portal.displayName = 'Portal';

/* -----------------------------------------------------------------------------------------------*/

export { Portal };
export type { PortalProps };

