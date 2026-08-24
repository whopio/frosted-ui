import * as React from 'react';
import { IconProps } from './types';

export const LockOpenBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LockOpenBold32"
      {...props}
    >
      <path
        d="M16 1c3.52 0 6.614 1.82 8.395 4.57.417.644-.088 1.43-.855 1.43-.38 0-.726-.206-.94-.519C21.158 4.38 18.74 3 16 3c-4.418 0-8 3.582-8 8v2.256c.083-.004.166-.006.25-.006h15.5c3.176 0 5.75 2.574 5.75 5.75v6.25c0 3.176-2.574 5.75-5.75 5.75H8.25c-3.176 0-5.75-2.574-5.75-5.75V19c0-2.385 1.452-4.43 3.52-5.302-.013-.064-.02-.13-.02-.198V11C6 5.477 10.477 1 16 1zM8.25 15.25c-2.071 0-3.75 1.679-3.75 3.75v6.25C4.5 27.321 6.179 29 8.25 29h15.5c2.071 0 3.75-1.679 3.75-3.75V19c0-2.071-1.679-3.75-3.75-3.75H8.25z"
        fill={color}
      />
    </svg>
  );
};

LockOpenBold32.category = 'Security';

export default LockOpenBold32;
