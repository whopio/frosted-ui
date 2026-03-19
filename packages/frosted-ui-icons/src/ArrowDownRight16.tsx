import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRight16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.25 13.25V4.75002M13.25 13.25H4.75M13.25 13.25L2.75 2.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownRight16.category = 'Arrows';

export default ArrowDownRight16;
