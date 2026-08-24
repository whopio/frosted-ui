import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeftBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowLeftBold32"
      {...props}
    >
      <path
        d="M13.002 27L2 16l11-11m-11 11h28"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeftBold32.category = 'Arrows';

export default ArrowLeftBold32;
