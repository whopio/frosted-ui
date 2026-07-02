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
        d="M4.5 2.5L7.82322 5.82322C7.92085 5.92085 7.92085 6.07915 7.82322 6.17678L4.5 9.5"
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
