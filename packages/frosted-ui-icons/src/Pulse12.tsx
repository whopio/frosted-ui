import * as React from 'react';
import { IconProps } from './types';

export const Pulse12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pulse12"
      {...props}
    >
      <path
        d="M11.25 3.75L7.177 7.823c-.098.098-.256.098-.354 0L4.177 5.177c-.098-.098-.256-.098-.354 0L.75 8.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Pulse12.category = 'Stats & Charts';

export default Pulse12;
