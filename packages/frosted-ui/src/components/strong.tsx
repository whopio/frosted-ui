import classNames from 'classnames';
import * as React from 'react';

interface StrongProps extends React.ComponentProps<'strong'> {}

const Strong = (props: StrongProps) => <strong {...props} className={classNames('fui-Strong', props.className)} />;
Strong.displayName = 'Strong';

export { Strong };
export type { StrongProps };
