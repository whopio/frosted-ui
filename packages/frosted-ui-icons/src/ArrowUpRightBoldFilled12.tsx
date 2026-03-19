import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.75 2.25V8.75M9.75 2.25H3.25M9.75 2.25L2.25 9.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRightBoldFilled12.category = 'Arrows';

export default ArrowUpRightBoldFilled12;
