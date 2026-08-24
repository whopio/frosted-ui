import * as React from 'react';
import { IconProps } from './types';

export const ArrowUp16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUp16"
      {...props}
    >
      <path
        d="M13.25 7L8 1.75 2.75 7M8 1.75v12.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUp16.category = 'Arrows';

export default ArrowUp16;
