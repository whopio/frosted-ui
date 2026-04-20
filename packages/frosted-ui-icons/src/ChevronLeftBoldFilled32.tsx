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
        d="M22.75 2.5L9.72376 15.5262C9.46211 15.7879 9.46211 16.2121 9.72376 16.4738L22.75 29.5"
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
