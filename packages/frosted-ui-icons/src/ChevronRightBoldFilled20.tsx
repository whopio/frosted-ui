import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRightBoldFilled20"
      {...props}
    >
      <path
        d="M7 3.5l6.203 6.203c.164.164.164.43 0 .594L7 16.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBoldFilled20.category = 'Arrows';

export default ChevronRightBoldFilled20;
