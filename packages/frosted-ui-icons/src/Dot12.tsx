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
      data-fui-icon="Dot12"
      {...props}
    >
      <path
        d="M3.75 6c0-1.243 1.007-2.25 2.25-2.25S8.25 4.757 8.25 6 7.243 8.25 6 8.25 3.75 7.243 3.75 6z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Dot12.category = 'Interface General';

export default Dot12;
