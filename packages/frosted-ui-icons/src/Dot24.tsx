import * as React from 'react';
import { IconProps } from './types';

export const Dot24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Dot24"
      {...props}
    >
      <path
        d="M6.75 12c0-2.9 2.35-5.25 5.25-5.25S17.25 9.1 17.25 12 14.9 17.25 12 17.25 6.75 14.9 6.75 12z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Dot24.category = 'Interface General';

export default Dot24;
