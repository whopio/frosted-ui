import * as React from 'react';
import { IconProps } from './types';

export const XMarkFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.24999 2.25001L11.9999 12M21.75 21.75L11.9999 12M11.9999 12L2.25001 21.75M11.9999 12L21.75 2.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkFilled24.category = 'Interface General';

export default XMarkFilled24;
