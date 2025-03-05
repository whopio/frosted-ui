import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown12 = ({
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
        d="M7.12495 1.375H4.87497C4.59882 1.375 4.37497 1.59885 4.37497 1.875V6.875H2.67016C2.4563 6.875 2.34117 7.1261 2.48072 7.28815L5.6211 10.935C5.82055 11.1667 6.17935 11.1667 6.37885 10.935L9.5192 7.28815C9.65875 7.1261 9.54365 6.875 9.32975 6.875H7.62495V1.875C7.62495 1.59886 7.4011 1.375 7.12495 1.375Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowFatDown12;
