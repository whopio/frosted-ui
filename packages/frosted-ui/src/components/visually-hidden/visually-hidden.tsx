'use client';

import { useRender } from '@base-ui/react';
import * as React from 'react';

/* -------------------------------------------------------------------------------------------------
 * VisuallyHidden
 * -----------------------------------------------------------------------------------------------*/

// See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
const VISUALLY_HIDDEN_STYLES = Object.freeze({
  position: 'absolute',
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  wordWrap: 'normal',
}) satisfies React.CSSProperties;

interface VisuallyHiddenProps extends React.ComponentPropsWithoutRef<'span'> {
  /**
   * Use the `render` prop to override the default rendered element.
   */
  render?: useRender.ComponentProps<'span'>['render'];
}

const VisuallyHidden = React.forwardRef<HTMLSpanElement, VisuallyHiddenProps>((props, forwardedRef) => {
  const { render, style, ...rest } = props;

  return useRender({
    render,
    props: {
      ...rest,
      ref: forwardedRef,
      style: { ...VISUALLY_HIDDEN_STYLES, ...style },
    },
    defaultTagName: 'span',
  });
});

VisuallyHidden.displayName = 'VisuallyHidden';

/* -----------------------------------------------------------------------------------------------*/

export { VISUALLY_HIDDEN_STYLES, VisuallyHidden };
export type { VisuallyHiddenProps };
