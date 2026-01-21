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
      <ScrollAreaPrimitive.Viewport ref={ref} className="fui-ScrollAreaViewport">
        <ScrollAreaPrimitive.Content>{children}</ScrollAreaPrimitive.Content>
      </ScrollAreaPrimitive.Viewport>
      <div className="fui-ScrollAreaViewportFocusRing" />

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
