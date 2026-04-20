import * as React from 'react';
import { IconProps } from './types';

export const XMark12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.99998 5.99999L0.75 11.25M5.99998 5.99999L0.749985 0.75M5.99998 5.99999L11.25 0.75M5.99998 5.99999L11.25 11.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

XMark12.category = 'Interface General';

export default XMark12;
