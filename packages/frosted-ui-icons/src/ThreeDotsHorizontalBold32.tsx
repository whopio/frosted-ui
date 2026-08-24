import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsHorizontalBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsHorizontalBold32"
      {...props}
    >
      <path
        d="M5.758 13.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zM16 13.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm10.24 0c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5c-1.381 0-2.5-1.12-2.5-2.5s1.119-2.5 2.5-2.5z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsHorizontalBold32.category = 'Interface General';

export default ThreeDotsHorizontalBold32;
