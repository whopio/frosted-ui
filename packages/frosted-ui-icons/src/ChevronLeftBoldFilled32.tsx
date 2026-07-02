import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.25 3.5L9.22376 15.5262C8.96211 15.7879 8.96211 16.2121 9.22376 16.4738L21.25 28.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftBoldFilled32.category = 'Arrows';

export default ChevronLeftBoldFilled32;
