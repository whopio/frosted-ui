import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownBold32"
      {...props}
    >
      <path
        d="M27.001 19l-11 11L5 19m11 11V2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownBold32.category = 'Arrows';

export default ArrowDownBold32;
