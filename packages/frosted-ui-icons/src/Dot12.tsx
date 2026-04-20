import * as React from 'react';
import { IconProps } from './types';

export const Dot12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.75 6C3.75 4.75736 4.75736 3.75 6 3.75C7.24264 3.75 8.25 4.75736 8.25 6C8.25 7.24264 7.24264 8.25 6 8.25C4.75736 8.25 3.75 7.24264 3.75 6Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Dot12.category = 'Interface General';

export default Dot12;
