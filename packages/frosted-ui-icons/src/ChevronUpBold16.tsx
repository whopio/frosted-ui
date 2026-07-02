import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3 10L7.76665 5.23335C7.89553 5.10447 8.10447 5.10447 8.23335 5.23335L13 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpBold16.category = 'Arrows';

export default ChevronUpBold16;
