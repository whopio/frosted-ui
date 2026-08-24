import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpBoldFilled32"
      {...props}
    >
      <path
        d="M26.751 13L16.001 2.25 5.251 13m10.75-10.75v27.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpBoldFilled32.category = 'Arrows';

export default ArrowUpBoldFilled32;
