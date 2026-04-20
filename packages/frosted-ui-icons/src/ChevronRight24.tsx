import * as React from 'react';
import { IconProps } from './types';

export const ChevronRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.875 1.75L16.7714 11.6464C16.9667 11.8417 16.9667 12.1583 16.7714 12.3536L6.875 22.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRight24.category = 'Arrows';

export default ChevronRight24;
