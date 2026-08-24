import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpSmallBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpSmallBold20"
      {...props}
    >
      <path
        d="M5.75 12l3.955-3.955c.163-.163.427-.163.59 0L14.25 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpSmallBold20.category = 'Arrows';

export default ChevronUpSmallBold20;
