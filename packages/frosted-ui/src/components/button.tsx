import classNames from 'classnames';
import * as React from 'react';
import { BaseButton } from './base-button';

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof BaseButton> {}

const Button = (props: ButtonProps) => (
  <BaseButton
    {...props}
    className={classNames('fui-Button', props.className)}
  />
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
