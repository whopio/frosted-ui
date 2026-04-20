import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.25 10.75L7.76665 5.23335C7.89553 5.10447 8.10447 5.10447 8.23335 5.23335L13.75 10.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpFilled16.category = 'Arrows';

export default ChevronUpFilled16;
