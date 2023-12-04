import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { cardPropDefs } from './card.props';

import type { GetPropDefTypes, MarginProps } from '../helpers';

type CardElement = React.ElementRef<'div'>;
type CardOwnProps = GetPropDefTypes<typeof cardPropDefs>;
interface CardProps
  extends React.ComponentPropsWithoutRef<'div'>,
    MarginProps,
    CardOwnProps {
  asChild?: boolean;
}
const Card = React.forwardRef<CardElement, CardProps>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    asChild,
    children,
    className,
    size = cardPropDefs.size.default,
    variant = cardPropDefs.variant.default,
    ...cardProps
  } = marginRest;
  const Comp = asChild ? Slot : 'div';

  function getChild() {
    const firstChild = React.Children.only(children) as React.ReactElement;
    return React.cloneElement(firstChild, {
      children: (
        <div className="fui-CardInner">{firstChild.props.children}</div>
      ),
    });
  }

  return (
    <Comp
      ref={forwardedRef}
      {...cardProps}
      className={classNames(
        'fui-reset',
        'fui-Card',
        className,
        withBreakpoints(size, 'fui-r-size'),
        `fui-variant-${variant}`,
        withMarginProps(marginProps),
      )}
    >
      {asChild ? getChild() : <div className="fui-CardInner">{children}</div>}
    </Comp>
  );
});
Card.displayName = 'Card';

export { Card };
export type { CardProps };
