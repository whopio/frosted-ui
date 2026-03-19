import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <circle cx="16" cy="16" r="14" stroke={color} strokeWidth="2" />
      <path
        d="M22.25 12L13.62 20.63L9.75 16.7599"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CheckmarkCircleBold32.category = 'Checkmarks';

export default CheckmarkCircleBold32;
