'use client';

import { ScrollArea as ScrollAreaPrimitive } from '@base-ui/react/scroll-area';
import classNames from 'classnames';
import * as React from 'react';

import { scrollAreaPropDefs } from './scroll-area.props';

import type { GetPropDefTypes } from '../../helpers';

type ScrollAreaOwnProps = GetPropDefTypes<typeof scrollAreaPropDefs>;

interface ScrollAreaProps
  extends
    Omit<React.ComponentPropsWithRef<typeof ScrollAreaPrimitive.Root>, 'className' | 'style' | 'ref'>,
    ScrollAreaOwnProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLDivElement>;
}

const viewportOverflowStyle = {
  both: 'scroll',
  vertical: 'hidden scroll',
  horizontal: 'scroll hidden',
} as const;

function ScrollArea(props: ScrollAreaProps) {
  const {
    className,
    style,
    children,
    ref,
    size = scrollAreaPropDefs.size.default,
    scrollbars = scrollAreaPropDefs.scrollbars.default,
    type = scrollAreaPropDefs.type.default,
    ...rootProps
  } = props;

  return (
    <ScrollAreaPrimitive.Root {...rootProps} className={classNames('fui-ScrollAreaRoot', className)} style={style}>
      <ScrollAreaPrimitive.Viewport
        ref={ref}
        className="fui-ScrollAreaViewport"
        style={{ overflow: viewportOverflowStyle[scrollbars] }}
        // Base UI sets tabIndex={0} on the viewport, but we override it to restore default
        // browser behavior. Modern browsers (Chrome 130+) automatically make scrollable
        // containers focusable only when they have no focusable children. When focusable
        // children exist, Tab navigates directly to them instead of the scroll container.
        // Base UI's explicit tabIndex={0} forces the container into the tab order even
        // when it has focusable children, which is not ideal UX.
        // See: https://developer.chrome.com/blog/keyboard-focusable-scrollers
        tabIndex={undefined}
      >
        <ScrollAreaPrimitive.Content style={scrollbars === 'vertical' ? { minWidth: 0, width: '100%' } : undefined}>
          {children}
        </ScrollAreaPrimitive.Content>
      </ScrollAreaPrimitive.Viewport>

      {scrollbars !== 'vertical' && (
        <ScrollAreaPrimitive.Scrollbar
          orientation="horizontal"
          className={classNames('fui-ScrollAreaScrollbar', `fui-r-size-${size}`)}
          data-type={type}
        >
          <ScrollAreaPrimitive.Thumb className="fui-ScrollAreaThumb" />
        </ScrollAreaPrimitive.Scrollbar>
      )}

      {scrollbars !== 'horizontal' && (
        <ScrollAreaPrimitive.Scrollbar
          orientation="vertical"
          className={classNames('fui-ScrollAreaScrollbar', `fui-r-size-${size}`)}
          data-type={type}
        >
          <ScrollAreaPrimitive.Thumb className="fui-ScrollAreaThumb" />
        </ScrollAreaPrimitive.Scrollbar>
      )}

      {scrollbars === 'both' && <ScrollAreaPrimitive.Corner className="fui-ScrollAreaCorner" />}
    </ScrollAreaPrimitive.Root>
  );
}

export { ScrollArea };
export type { ScrollAreaProps };
