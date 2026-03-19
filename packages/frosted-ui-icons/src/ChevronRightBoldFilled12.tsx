import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.69995 3.40002L7.12318 5.82325C7.22081 5.92088 7.22081 6.07917 7.12318 6.1768L4.69995 8.60003"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBoldFilled12.category = 'Arrows';

export default ChevronRightBoldFilled12;
