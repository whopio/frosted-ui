import * as React from 'react';
import { IconProps } from './types';

export const ArrowDown12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDown12"
      {...props}
    >
      <path
        d="M10.25 7L6 11.25 1.75 7M6 11.25V.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDown12.category = 'Arrows';

export default ArrowDown12;
