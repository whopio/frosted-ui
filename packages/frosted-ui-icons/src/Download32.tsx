import * as React from 'react';
import { IconProps } from './types';

export const Download32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Download32"
      {...props}
    >
      <path
        d="M30.25 29.5c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h28.5zM16 1c.414 0 .75.336.75.75v22.69l9.22-9.22c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06l-10.5 10.5c-.293.293-.767.293-1.06 0l-10.5-10.5c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0l9.22 9.22V1.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Download32.category = 'Arrows';

export default Download32;
