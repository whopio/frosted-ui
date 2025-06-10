import classNames from 'classnames';
import * as React from 'react';
import { Text } from '../text';
import { linkPropDefs } from './link.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type LinkOwnProps = GetPropDefTypes<typeof linkPropDefs>;
interface LinkProps extends PropsWithoutColor<'a'>, LinkOwnProps {
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
