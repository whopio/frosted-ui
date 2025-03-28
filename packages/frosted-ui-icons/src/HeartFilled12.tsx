import * as React from 'react';
import { IconProps } from './types';

export const HeartFilled12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.1835 10.702C10.5433 8.25235 11.5429 5.38355 10.7585 3.42289C10.3749 2.4641 9.57105 1.77961 8.6261 1.5684C7.7669 1.37635 6.8197 1.58156 5.99975 2.27478C5.1798 1.58156 4.23262 1.37635 3.37341 1.5684C2.42847 1.77961 1.62462 2.46411 1.24104 3.4229C0.456646 5.3836 1.45621 8.25235 5.8161 10.702C5.93015 10.7661 6.0694 10.7661 6.1835 10.702Z"
        fill={color}
      />
    </svg>
  );
};

export default HeartFilled12;
