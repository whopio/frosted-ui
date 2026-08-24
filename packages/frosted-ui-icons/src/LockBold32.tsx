import * as React from 'react';
import { IconProps } from './types';

export const LockBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LockBold32"
      {...props}
    >
      <path
        d="M16 1c5.523 0 10 4.477 10 10v2.707c2.057.876 3.5 2.916 3.5 5.293v6.25c0 3.176-2.574 5.75-5.75 5.75H8.25c-3.176 0-5.75-2.574-5.75-5.75V19c0-2.377 1.443-4.417 3.5-5.293V11C6 5.477 10.477 1 16 1zM8.25 15.25c-2.071 0-3.75 1.679-3.75 3.75v6.25C4.5 27.321 6.179 29 8.25 29h15.5c2.071 0 3.75-1.679 3.75-3.75V19c0-2.071-1.679-3.75-3.75-3.75H8.25zM16 3c-4.418 0-8 3.582-8 8v2.256c.083-.004.166-.006.25-.006h15.5c.084 0 .167.002.25.006V11c0-4.418-3.582-8-8-8z"
        fill={color}
      />
    </svg>
  );
};

LockBold32.category = 'Security';

export default LockBold32;
