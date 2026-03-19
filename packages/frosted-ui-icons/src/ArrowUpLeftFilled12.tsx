import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeftFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.25 2.25V8.75M2.25 2.25H8.75M2.25 2.25L9.75 9.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeftFilled12.category = 'Arrows';

export default ArrowUpLeftFilled12;
