import * as React from 'react';
import { IconProps } from './types';

export const LockOpen32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.75 14.25V10C6.75 4.89137 10.8914.75 16 .75 20.5106.75 24.2672 3.97857 25.0849 8.25087M2.75 18.55C2.75 16.1752 4.67518 14.25 7.05 14.25H24.95C27.3248 14.25 29.25 16.1752 29.25 18.55V26.95C29.25 29.3248 27.3248 31.25 24.95 31.25H7.05C4.67517 31.25 2.75 29.3248 2.75 26.95V18.55z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LockOpen32;
