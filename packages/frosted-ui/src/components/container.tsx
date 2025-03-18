import classNames from 'classnames';
import * as React from 'react';
import { extractLayoutProps, extractMarginProps, withBreakpoints, withLayoutProps, withMarginProps } from '../helpers';
import { containerPropDefs } from './container.props';

import type { GetPropDefTypes, LayoutProps, MarginProps } from '../helpers';

type ContainerOwnProps = GetPropDefTypes<typeof containerPropDefs>;
interface ContainerProps extends React.ComponentProps<'div'>, MarginProps, LayoutProps, ContainerOwnProps {}

const Container = (props: ContainerProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { rest: layoutRest, ...layoutProps } = extractLayoutProps(marginRest);
  const { children, className, size = containerPropDefs.size.default, ...containerProps } = layoutRest;
  return (
    <div
      {...containerProps}
      className={classNames(
        'fui-Container',
        className,
        withBreakpoints(size, 'fui-r-size'),
        withLayoutProps(layoutProps),
        withMarginProps(marginProps),
      )}
    >
      <div className="fui-ContainerInner">{children}</div>
    </div>
  );
};
Container.displayName = 'Container';

export { Container };
export type { ContainerProps };
