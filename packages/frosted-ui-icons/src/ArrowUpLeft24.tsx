import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeft24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.74998 2.74998L2.74999 15.25M2.74998 2.74998L15.25 2.74998M2.74998 2.74998L21.25 21.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeft24.category = 'Arrows';

export default ArrowUpLeft24;
