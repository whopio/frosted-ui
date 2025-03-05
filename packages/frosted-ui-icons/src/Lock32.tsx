import * as React from 'react';
import { IconProps } from './types';

export const Lock32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.75 14.25V10C6.75 4.89137 10.8914 0.75 16 0.75C21.1086 0.75 25.25 4.89137 25.25 10V14.25M7.05 31.25H24.95C27.3248 31.25 29.25 29.3248 29.25 26.95V18.55C29.25 16.1752 27.3248 14.25 24.95 14.25H7.05C4.67518 14.25 2.75 16.1752 2.75 18.55V26.95C2.75 29.3248 4.67517 31.25 7.05 31.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Lock32;
