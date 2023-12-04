import classNames from 'classnames';
import * as React from 'react';
import { blockquotePropDefs } from './blockquote.props';
import { Text } from './text';

import type { GetPropDefTypes, PropsWithoutRefOrColor } from '../helpers';

type BlockquoteElement = React.ElementRef<'blockquote'>;
type BlockQuoteOwnProps = GetPropDefTypes<typeof blockquotePropDefs>;
interface BlockquoteProps
  extends PropsWithoutRefOrColor<'blockquote'>,
    BlockQuoteOwnProps {}
const Blockquote = React.forwardRef<BlockquoteElement, BlockquoteProps>(
  (props, forwardedRef) => {
    const { children, className, ...blockquoteProps } = props;
    return (
      <Text
        asChild
        {...blockquoteProps}
        ref={forwardedRef}
        className={classNames('fui-Blockquote', className)}
      >
        <blockquote>{children}</blockquote>
      </Text>
    );
  },
);
Blockquote.displayName = 'Blockquote';

export { Blockquote };
export type { BlockquoteProps };
