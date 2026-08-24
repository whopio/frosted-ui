import * as React from 'react';
import { IconProps } from './types';

export const Subtract20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Subtract20"
      {...props}
    >
      <path
        d="M18.25 9.25c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h16.5z"
        fill={color}
      />
    </svg>
  );
};

Subtract20.category = 'Interface General';

export default Subtract20;
