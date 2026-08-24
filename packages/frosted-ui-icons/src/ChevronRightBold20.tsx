import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRightBold20"
      {...props}
    >
      <path
        d="M7 3l6.703 6.703c.164.164.164.43 0 .594L7 17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBold20.category = 'Arrows';

export default ChevronRightBold20;
