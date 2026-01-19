'use client';

import { ScrollArea as ScrollAreaPrimitive } from '@base-ui/react/scroll-area';
import classNames from 'classnames';
import * as React from 'react';

import { scrollAreaPropDefs } from './scroll-area.props';

import type { GetPropDefTypes } from '../../helpers';

type ScrollAreaOwnProps = GetPropDefTypes<typeof scrollAreaPropDefs>;

interface ScrollAreaProps
  extends Omit<React.ComponentPropsWithRef<typeof ScrollAreaPrimitive.Root>, 'className' | 'style'>,
    ScrollAreaOwnProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ScrollArea = (props: ScrollAreaProps) => {
  const {
    className,
    style,
    children,
    size = scrollAreaPropDefs.size.default,
    scrollbars = scrollAreaPropDefs.scrollbars.default,
    type = scrollAreaPropDefs.type.default,
    ...rootProps
  } = props;

  return (
    <ScrollAreaPrimitive.Root
      {...rootProps}
      className={classNames('fui-ScrollAreaRoot', className)}
      style={style}
    >
      <ScrollAreaPrimitive.Viewport className="fui-ScrollAreaViewport">
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
};
ScrollArea.displayName = 'ScrollArea';

export { ScrollArea };
export type { ScrollAreaProps };

