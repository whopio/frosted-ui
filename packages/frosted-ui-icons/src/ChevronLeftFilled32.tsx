import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M22.875 2.25L9.59876 15.5262C9.33711 15.7879 9.33711 16.2121 9.59876 16.4738L22.875 29.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftFilled32.category = 'Arrows';

export default ChevronLeftFilled32;
