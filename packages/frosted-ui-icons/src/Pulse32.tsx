import * as React from 'react';
import { IconProps } from './types';

export const Pulse32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Pulse32"
      {...props}
    >
      <path
        d="M30.248 9.893L19.192 20.949c-.265.265-.695.265-.96 0l-7.183-7.183c-.265-.265-.694-.265-.96 0l-8.341 8.341"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Pulse32.category = 'Stats & Charts';

export default Pulse32;
