import * as React from 'react';
import { IconProps } from './types';

export const Subtract16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Subtract16"
      {...props}
    >
      <path
        d="M14.25 7.25c.414 0 .75.336.75.75s-.336.75-.75.75H1.75C1.336 8.75 1 8.414 1 8s.336-.75.75-.75h12.5z"
        fill={color}
      />
    </svg>
  );
};

Subtract16.category = 'Interface General';

export default Subtract16;
