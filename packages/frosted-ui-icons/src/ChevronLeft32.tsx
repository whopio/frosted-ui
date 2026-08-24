import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeft32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeft32"
      {...props}
    >
      <path
        d="M22 2.75L9.224 15.526c-.262.262-.262.686 0 .948L22 29.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeft32.category = 'Arrows';

export default ChevronLeft32;
