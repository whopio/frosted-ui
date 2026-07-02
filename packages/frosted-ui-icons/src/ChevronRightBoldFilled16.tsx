import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6 3.5L10.2667 7.76665C10.3955 7.89553 10.3955 8.10447 10.2667 8.23335L6 12.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBoldFilled16.category = 'Arrows';

export default ChevronRightBoldFilled16;
