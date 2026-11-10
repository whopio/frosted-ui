import * as React from 'react';
import { IconProps } from './types';

export const Triangle20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Triangle20"
      {...props}
    >
      <path
        d="M8.373 3.169L1.979 15.04c-.659 1.224.228 2.709 1.618 2.709h12.723c1.386 0 2.273-1.478 1.62-2.701L11.613 3.176c-.69-1.294-2.543-1.298-3.239-.007z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Triangle20.category = 'Interface General';

export default Triangle20;
