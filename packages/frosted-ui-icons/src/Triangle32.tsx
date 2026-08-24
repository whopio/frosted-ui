import * as React from 'react';
import { IconProps } from './types';

export const Triangle32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Triangle32"
      {...props}
    >
      <path
        d="M2.156 25.015L13.26 4.677c1.218-2.229 4.422-2.22 5.627.015L29.855 25.03c1.15 2.132-.395 4.72-2.817 4.72H4.965c-2.43 0-3.974-2.602-2.81-4.735z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Triangle32.category = 'Interface General';

export default Triangle32;
