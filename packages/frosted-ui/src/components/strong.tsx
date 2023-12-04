import classNames from 'classnames';
import * as React from 'react';

type StrongElement = React.ElementRef<'strong'>;
interface StrongProps extends React.ComponentPropsWithoutRef<'strong'> {}
const Strong = React.forwardRef<StrongElement, StrongProps>(
  (props, forwardedRef) => (
    <strong
      {...props}
      ref={forwardedRef}
      className={classNames('fui-Strong', props.className)}
    />
  ),
);
Strong.displayName = 'Strong';

export { Strong };
export type { StrongProps };
