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
        d="M3.75 1.5L8.07322 5.82322C8.17085 5.92085 8.17085 6.07915 8.07322 6.17678L3.75 10.5"
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
