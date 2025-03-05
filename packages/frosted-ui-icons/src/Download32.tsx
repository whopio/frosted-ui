import * as React from 'react';
import { IconProps } from './types';

export const Download32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.6667 17.6667L16.9428 22.3906C16.4222 22.9112 15.5779 22.9112 15.0572 22.3906L10.3334 17.6667M16 3.66669V22.3334M25.6667 28.3334H6.33337"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Download32;
