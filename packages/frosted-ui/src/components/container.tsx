import classNames from 'classnames';
import * as React from 'react';
import { extractLayoutProps, withBreakpoints, withLayoutProps } from '../helpers';
import { containerPropDefs } from './container.props';

import type { GetPropDefTypes, LayoutProps } from '../helpers';

type ContainerOwnProps = GetPropDefTypes<typeof containerPropDefs>;
interface ContainerProps extends React.ComponentProps<'div'>, LayoutProps, ContainerOwnProps {}

const Container = (props: ContainerProps) => {
  const { rest: layoutRest, ...layoutProps } = extractLayoutProps(props);
  const { children, className, size = containerPropDefs.size.default, ...containerProps } = layoutRest;
  return (
    <div
      {...containerProps}
      className={classNames(
        'fui-Container',
        className,
        withBreakpoints(size, 'fui-r-size'),
        withLayoutProps(layoutProps),
      )}
    >
      <div className="fui-ContainerInner">{children}</div>
    </div>
  );
};
Container.displayName = 'Container';

export { Container };
export type { ContainerProps };
