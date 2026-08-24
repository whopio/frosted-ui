import * as React from 'react';
import { IconProps } from './types';

export const ControlsFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ControlsFilled16"
      {...props}
    >
      <path
        d="M5.38 9.25c1.512 0 2.773 1.074 3.062 2.5h6.812c.414 0 .75.336.75.75s-.336.75-.75.75H8.38c-.379 1.3-1.578 2.25-3 2.25s-2.622-.95-3-2.25H.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.566c.29-1.426 1.551-2.5 3.063-2.5zM10.625.5c1.512 0 2.773 1.074 3.063 2.5h1.566c.414 0 .75.336.75.75s-.336.75-.75.75h-1.629c-.379 1.3-1.578 2.25-3 2.25s-2.621-.95-3-2.25H.751c-.414 0-.75-.336-.75-.75S.337 3 .751 3h6.812C7.851 1.574 9.113.5 10.624.5z"
        fill={color}
      />
    </svg>
  );
};

ControlsFilled16.category = 'Interface General';

export default ControlsFilled16;
