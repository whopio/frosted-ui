import * as React from 'react';
import { IconProps } from './types';

export const Dot20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Dot20"
      {...props}
    >
      <path
        d="M10 14.25c-2.347 0-4.25-1.903-4.25-4.25S7.653 5.75 10 5.75s4.25 1.903 4.25 4.25-1.903 4.25-4.25 4.25z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Dot20.category = 'Interface General';

export default Dot20;
