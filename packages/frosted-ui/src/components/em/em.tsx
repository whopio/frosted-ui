import classNames from 'classnames';
import * as React from 'react';

interface EmProps extends React.ComponentProps<'em'> {}

const Em = (props: EmProps) => <em {...props} className={classNames('fui-Em', props.className)} />;
Em.displayName = 'Em';

export { Em };
export type { EmProps };
