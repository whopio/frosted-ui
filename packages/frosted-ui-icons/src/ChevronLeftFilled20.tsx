import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.875 2.25L6.42198 9.70302C6.25796 9.86704 6.25796 10.133 6.42198 10.297L13.875 17.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftFilled20.category = 'Arrows';

export default ChevronLeftFilled20;
