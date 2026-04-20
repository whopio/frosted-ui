import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.125 2.25L10.6417 7.76665C10.7705 7.89553 10.7705 8.10447 10.6417 8.23335L5.125 13.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightFilled16.category = 'Arrows';

export default ChevronRightFilled16;
