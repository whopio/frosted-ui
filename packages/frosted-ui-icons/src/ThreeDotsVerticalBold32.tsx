import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThreeDotsVerticalBold32"
      {...props}
    >
      <path
        d="M13.499 26.241c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5zm0-10.243c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5zm0-10.24c0-1.38 1.12-2.499 2.5-2.5 1.38.001 2.5 1.12 2.5 2.5 0 1.381-1.12 2.5-2.5 2.5s-2.5-1.119-2.5-2.5z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalBold32.category = 'Interface General';

export default ThreeDotsVerticalBold32;
