import * as React from 'react';
import { IconProps } from './types';

export const BanFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BanFilled12"
      {...props}
    >
      <path
        d="M10.738 2.321C11.528 3.337 12 4.613 12 6c0 3.314-2.686 6-6 6-1.387 0-2.663-.472-3.679-1.262l8.417-8.417zM6 0c1.386 0 2.662.471 3.678 1.26L1.26 9.679C.47 8.662 0 7.386 0 6c0-3.314 2.686-6 6-6z"
        fill={color}
      />
    </svg>
  );
};

BanFilled12.category = 'Interface General';

export default BanFilled12;
