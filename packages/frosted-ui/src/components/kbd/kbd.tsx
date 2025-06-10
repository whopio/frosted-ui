import classNames from 'classnames';
import * as React from 'react';
import { GetPropDefTypes } from '../../helpers';
import { kbdPropDefs } from './kbd.props';

type KbdOwnProps = GetPropDefTypes<typeof kbdPropDefs>;
interface KbdProps extends React.ComponentProps<'kbd'>, KbdOwnProps {}

const Kbd = (props: KbdProps) => {
  const { className, size = kbdPropDefs.size.default, ...kbdProps } = props;
  return <kbd {...kbdProps} className={classNames('fui-Kbd', className, `fui-r-size-${size}`)} />;
};
Kbd.displayName = 'Kbd';

export { Kbd };
export type { KbdProps };
