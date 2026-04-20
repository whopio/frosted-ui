import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M23 2L9.47376 15.5262C9.21211 15.7879 9.21211 16.2121 9.47376 16.4738L23 30"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftBold32.category = 'Arrows';

export default ChevronLeftBold32;
