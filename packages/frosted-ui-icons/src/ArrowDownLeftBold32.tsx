import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeftBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4 28L4.00001 8.49999M4 28L23.5 28M4 28L28 4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeftBold32.category = 'Arrows';

export default ArrowDownLeftBold32;
