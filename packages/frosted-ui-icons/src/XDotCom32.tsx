import * as React from 'react';
import { IconProps } from './types';

export const XDotCom32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="XDotCom32"
      {...props}
    >
      <path
        d="M23.204 4.667h3.843l-8.395 9.601 9.876 13.065h-7.733L14.74 19.41l-6.93 7.924H3.964l8.979-10.27L3.469 4.668h7.929l5.474 7.242 6.332-7.242zm-1.348 20.365h2.129L10.24 6.847H7.956l13.9 18.185z"
        fill={color}
      />
    </svg>
  );
};

XDotCom32.category = 'Social & Brands';

export default XDotCom32;
