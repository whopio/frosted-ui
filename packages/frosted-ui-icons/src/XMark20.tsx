import * as React from 'react';
import { IconProps } from './types';

export const XMark20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.99995 9.99999L1.75 18.25M9.99995 9.99999L1.74997 1.75M9.99995 9.99999L18.2499 1.75M9.99995 9.99999L18.2499 18.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

XMark20.category = 'Interface General';

export default XMark20;
