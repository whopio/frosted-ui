import { useRender } from '@base-ui/react';
import classNames from 'classnames';
import * as React from 'react';
import { Text } from '../text';
import { linkPropDefs } from './link.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type LinkOwnProps = GetPropDefTypes<typeof linkPropDefs>;
interface LinkProps extends PropsWithoutColor<'a'>, LinkOwnProps {
  render?: useRender.ComponentProps<'a'>['render'];
}

const Link = (props: LinkProps) => {
  const { children, className, render, underline = linkPropDefs.underline.default, ...linkProps } = props;
  return (
    <Text
      {...linkProps}
      render={render ?? <a />}
      className={classNames('fui-reset', 'fui-Link', className, `fui-underline-${underline}`)}
    >
      {children}
    </Text>
  );
};
Link.displayName = 'Link';

export { Link };
export type { LinkProps };
