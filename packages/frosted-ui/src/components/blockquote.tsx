import classNames from 'classnames';
import * as React from 'react';
import { blockquotePropDefs } from './blockquote.props';
import { Text } from './text';

import type { GetPropDefTypes, PropsWithoutColor } from '../helpers';

type BlockQuoteOwnProps = GetPropDefTypes<typeof blockquotePropDefs>;
interface BlockquoteProps extends PropsWithoutColor<'blockquote'>, BlockQuoteOwnProps {}

const Blockquote = (props: BlockquoteProps) => {
  const { children, className, ...blockquoteProps } = props;
  return (
    <Text asChild {...blockquoteProps} className={classNames('fui-Blockquote', className)}>
      <blockquote>{children}</blockquote>
    </Text>
  );
};
Blockquote.displayName = 'Blockquote';

export { Blockquote };
export type { BlockquoteProps };
