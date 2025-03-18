import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import * as React from 'react';

import { cardPropDefs } from './card.props';

import type { GetPropDefTypes } from '../helpers';

type CardOwnProps = GetPropDefTypes<typeof cardPropDefs>;
interface CardProps extends React.ComponentProps<'div'>, CardOwnProps {
  asChild?: boolean;
}

const Card = (props: CardProps) => {
  const {
    asChild,
    children,
    className,
    size = cardPropDefs.size.default,
    variant = cardPropDefs.variant.default,
    ...cardProps
  } = props;
  const Comp = asChild ? Slot : 'div';

  function getChild() {
    const firstChild = React.Children.only(children) as React.ReactElement;
    return React.cloneElement(firstChild, {
      children: <div className="fui-CardInner">{firstChild.props.children}</div>,
    });
  }

  return (
    <Comp
      {...cardProps}
      className={classNames('fui-reset', 'fui-Card', className, `fui-r-size-${size}`, `fui-variant-${variant}`)}
    >
      {asChild ? getChild() : <div className="fui-CardInner">{children}</div>}
    </Comp>
  );
};
Card.displayName = 'Card';

export { Card };
export type { CardProps };
