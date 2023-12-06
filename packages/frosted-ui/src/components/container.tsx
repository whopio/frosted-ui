import classNames from 'classnames';
import * as React from 'react';
import {
  extractLayoutProps,
  extractMarginProps,
  withBreakpoints,
  withLayoutProps,
  withMarginProps,
} from '../helpers';
import { containerPropDefs } from './container.props';

import type { GetPropDefTypes, LayoutProps, MarginProps } from '../helpers';

type ContainerElement = React.ElementRef<'div'>;
type ContainerOwnProps = GetPropDefTypes<typeof containerPropDefs>;
interface ContainerProps
  extends React.ComponentPropsWithoutRef<'div'>,
    MarginProps,
    LayoutProps,
    ContainerOwnProps {}
const Container = React.forwardRef<ContainerElement, ContainerProps>(
  (props, forwardedRef) => {
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);
    const { rest: layoutRest, ...layoutProps } = extractLayoutProps(marginRest);
    const {
      children,
      className,
      size = containerPropDefs.size.default,
      display = containerPropDefs.display.default,
      ...containerProps
    } = layoutRest;
    return (
      <div
        {...containerProps}
        ref={forwardedRef}
        className={classNames(
          'fui-Container',
          className,
          withBreakpoints(size, 'fui-r-size'),
          withBreakpoints(display, 'fui-r-display'),
          withLayoutProps(layoutProps),
          withMarginProps(marginProps),
        )}
      >
        <div className="fui-ContainerInner">{children}</div>
      </div>
    );
  },
);
Container.displayName = 'Container';

export { Container };
export type { ContainerProps };
