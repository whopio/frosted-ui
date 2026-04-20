import * as React from 'react';
import { IconProps } from './types';

export const XMark16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.99997 7.99999L1.75 14.25M7.99997 7.99999L1.74998 1.75M7.99997 7.99999L14.25 1.75M7.99997 7.99999L14.25 14.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

XMark16.category = 'Interface General';

export default XMark16;
