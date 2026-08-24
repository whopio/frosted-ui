import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRightFilled32"
      {...props}
    >
      <path
        d="M10 3.25l12.276 12.276c.262.262.262.686 0 .948L10 28.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightFilled32.category = 'Arrows';

export default ChevronRightFilled32;
