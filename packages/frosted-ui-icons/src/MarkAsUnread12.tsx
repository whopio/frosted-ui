import * as React from 'react';
import { IconProps } from './types';

export const MarkAsUnread12 = ({
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
        d="M7 3H11M1 7H11M1 11H11"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1 4.38L2.375 3.005M3.75 1.63L2.375 3.005M2.375 3.005L3.75 4.38M2.375 3.005L1 1.63"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MarkAsUnread12;
