import classNames from 'classnames';
import * as React from 'react';

type QuoteElement = React.ElementRef<'q'>;
interface QuoteProps extends React.ComponentPropsWithoutRef<'q'> {}
const Quote = React.forwardRef<QuoteElement, QuoteProps>(
  (props, forwardedRef) => (
    <q
      {...props}
      ref={forwardedRef}
      className={classNames('fui-Quote', props.className)}
    />
  ),
);
Quote.displayName = 'Quote';

export { Quote };
export type { QuoteProps };
