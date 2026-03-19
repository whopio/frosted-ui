import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeftBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3 21L3.00001 8.49999M3 21L15.5 21M3 21L21 3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeftBold24.category = 'Arrows';

export default ArrowDownLeftBold24;
