import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRightFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownRightFilled24"
      {...props}
    >
      <path
        d="M7.75 20.75h13v-13m0 13L3.25 3.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownRightFilled24.category = 'Arrows';

export default ArrowDownRightFilled24;
