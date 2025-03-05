import classNames from 'classnames';
import * as React from 'react';
import { BaseButton } from './base-button';

interface IconButtonProps extends React.ComponentPropsWithoutRef<typeof BaseButton> {}

const IconButton = (props: IconButtonProps) => (
  <BaseButton {...props} className={classNames('fui-IconButton', props.className)} />
);
IconButton.displayName = 'IconButton';

export { IconButton };
export type { IconButtonProps };
