import classNames from 'classnames';
import * as React from 'react';

interface QuoteProps extends React.ComponentPropsWithoutRef<'q'> {}

const Quote = (props: QuoteProps) => (
  <q {...props} className={classNames('fui-Quote', props.className)} />
);
Quote.displayName = 'Quote';

export { Quote };
export type { QuoteProps };
