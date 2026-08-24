import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUp12"
      {...props}
    >
      <path
        d="M3.75 6.45v4.05c0 .414.336.75.75.75h3c.414 0 .75-.336.75-.75V6.45c0-.11.09-.2.2-.2h2.12c.26 0 .397-.31.221-.502L6.443.985c-.238-.26-.648-.26-.886 0L1.209 5.748c-.176.192-.04.502.221.502h2.12c.11 0 .2.09.2.2z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatUp12.category = 'Arrows';

export default ArrowFatUp12;
