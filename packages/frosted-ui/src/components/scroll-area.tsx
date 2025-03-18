'use client';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import classNames from 'classnames';
import * as React from 'react';
import { extractMarginProps, withMarginProps } from '../helpers';
import { scrollAreaPropDefs } from './scroll-area.props';

import type { GetPropDefTypes, MarginProps } from '../helpers';

type ScrollAreaOwnProps = GetPropDefTypes<typeof scrollAreaPropDefs>;
interface ScrollAreaProps
  extends React.ComponentPropsWithRef<typeof ScrollAreaPrimitive.Root>,
    Omit<React.ComponentPropsWithRef<typeof ScrollAreaPrimitive.Viewport>, 'dir'>,
    MarginProps,
    ScrollAreaOwnProps {}

const ScrollArea = (props: ScrollAreaProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    style,
    type,
    scrollHideDelay = type !== 'scroll' ? 0 : undefined,
    // dir,
    size = scrollAreaPropDefs.size.default,
    scrollbars = scrollAreaPropDefs.scrollbars.default,
    ...viewportProps
  } = marginRest;
  return (
    <ScrollAreaPrimitive.Root
      type={type}
      scrollHideDelay={scrollHideDelay}
      className={classNames('fui-ScrollAreaRoot', className, withMarginProps(marginProps))}
      style={style}
    >
      <ScrollAreaPrimitive.Viewport {...viewportProps} className="fui-ScrollAreaViewport" />
      <div className="fui-ScrollAreaViewportFocusRing" />

      {scrollbars !== 'vertical' ? (
        <ScrollAreaPrimitive.Scrollbar
          orientation="horizontal"
          className={classNames('fui-ScrollAreaScrollbar', `fui-r-size-${size}`)}
        >
          <ScrollAreaPrimitive.Thumb className="fui-ScrollAreaThumb" />
        </ScrollAreaPrimitive.Scrollbar>
      ) : null}

      {scrollbars !== 'horizontal' ? (
        <ScrollAreaPrimitive.Scrollbar
          orientation="vertical"
          className={classNames('fui-ScrollAreaScrollbar', `fui-r-size-${size}`)}
        >
          <ScrollAreaPrimitive.Thumb className="fui-ScrollAreaThumb" />
        </ScrollAreaPrimitive.Scrollbar>
      ) : null}

      {scrollbars === 'both' ? <ScrollAreaPrimitive.Corner className="fui-ScrollAreaCorner" /> : null}
    </ScrollAreaPrimitive.Root>
  );
};
ScrollArea.displayName = 'ScrollArea';

export { ScrollArea };
export type { ScrollAreaProps };
