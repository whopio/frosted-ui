import * as React from 'react';
import { IconProps } from './types';

export const BanFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BanFilled32"
      {...props}
    >
      <path
        d="M27.477 5.582C29.977 8.334 31.5 11.989 31.5 16c0 8.56-6.94 15.5-15.5 15.5-4.01 0-7.666-1.523-10.418-4.023L27.477 5.582zM16 .5c4.01 0 7.665 1.522 10.417 4.021L4.521 26.417C2.022 23.665.5 20.01.5 16 .5 7.44 7.44.5 16 .5z"
        fill={color}
      />
    </svg>
  );
};

BanFilled32.category = 'Interface General';

export default BanFilled32;
