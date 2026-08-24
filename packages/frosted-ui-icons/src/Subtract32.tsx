import * as React from 'react';
import { IconProps } from './types';

export const Subtract32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Subtract32"
      {...props}
    >
      <path
        d="M30.25 15.25c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h28.5z"
        fill={color}
      />
    </svg>
  );
};

Subtract32.category = 'Interface General';

export default Subtract32;
