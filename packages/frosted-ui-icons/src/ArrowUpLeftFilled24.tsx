import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeftFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpLeftFilled24"
      {...props}
    >
      <path
        d="M16.25 3.25h-13v13m0-13l17.5 17.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeftFilled24.category = 'Arrows';

export default ArrowUpLeftFilled24;
