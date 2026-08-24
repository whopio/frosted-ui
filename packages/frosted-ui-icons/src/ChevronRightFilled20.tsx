import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRightFilled20"
      {...props}
    >
      <path
        d="M7 3.25l6.453 6.453c.164.164.164.43 0 .594L7 16.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightFilled20.category = 'Arrows';

export default ChevronRightFilled20;
