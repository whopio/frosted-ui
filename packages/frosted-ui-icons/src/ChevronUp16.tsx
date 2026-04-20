import * as React from 'react';
import { IconProps } from './types';

export const ChevronUp16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.75 10.75L7.76665 4.73335C7.89553 4.60447 8.10447 4.60447 8.23335 4.73335L14.2499 10.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUp16.category = 'Arrows';

export default ChevronUp16;
