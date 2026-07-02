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
        d="M6 3.25L10.5167 7.76665C10.6455 7.89553 10.6455 8.10447 10.5167 8.23335L6 12.75"
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
