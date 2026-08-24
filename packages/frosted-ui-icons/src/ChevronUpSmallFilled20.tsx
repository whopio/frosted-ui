import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpSmallFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpSmallFilled20"
      {...props}
    >
      <path
        d="M5.75 12l3.955-3.955c.163-.163.427-.163.59 0L14.25 12"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpSmallFilled20.category = 'Arrows';

export default ChevronUpSmallFilled20;
