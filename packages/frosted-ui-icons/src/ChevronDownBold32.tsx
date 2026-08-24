import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDownBold32"
      {...props}
    >
      <path
        d="M3 10.25l12.526 12.526c.262.262.686.262.948 0L29 10.25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBold32.category = 'Arrows';

export default ChevronDownBold32;
