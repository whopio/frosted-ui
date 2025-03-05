import classNames from 'classnames';
import * as React from 'react';
import { linkPropDefs } from './link.props';
import { Text } from './text';

import type { GetPropDefTypes, MarginProps, PropsWithoutColor } from '../helpers';

type LinkOwnProps = GetPropDefTypes<typeof linkPropDefs>;
interface LinkProps extends PropsWithoutColor<'a'>, MarginProps, LinkOwnProps {
  asChild?: boolean;
}

const Link = (props: LinkProps) => {
  const { children, className, asChild = false, underline = linkPropDefs.underline.default, ...linkProps } = props;
  return (
    <Text
      {...linkProps}
      asChild
      className={classNames('fui-reset', 'fui-Link', className, `fui-underline-${underline}`)}
    >
      {asChild ? children : <a>{children}</a>}
    </Text>
  );
};
Link.displayName = 'Link';

export { Link };
export type { LinkProps };
