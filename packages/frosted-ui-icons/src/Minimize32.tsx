import * as React from 'react';
import { IconProps } from './types';

export const Minimize32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Minimize32"
      {...props}
    >
      <path
        d="M14.25 17c.414 0 .75.336.75.75v12.5c0 .414-.336.75-.75.75-.415 0-.75-.336-.75-.75V19.56L2.28 30.78c-.293.293-.768.293-1.06 0-.293-.293-.294-.768 0-1.06L12.438 18.5H1.749c-.414 0-.75-.336-.75-.75s.337-.75.75-.75h12.5zM29.72 1.22c.292-.293.767-.293 1.06 0 .293.292.293.767 0 1.06L19.56 13.5h10.69c.414 0 .75.336.75.75s-.336.75-.75.75h-12.5c-.415 0-.75-.336-.75-.75V1.75c0-.414.336-.75.75-.75s.75.336.75.75v10.69L29.72 1.22z"
        fill={color}
      />
    </svg>
  );
};

Minimize32.category = 'Arrows';

export default Minimize32;
