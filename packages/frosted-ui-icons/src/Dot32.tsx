import * as React from 'react';
import { IconProps } from './types';

export const Dot32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.75 16C7.75 11.4437 11.4437 7.75 16 7.75C20.5563 7.75 24.25 11.4437 24.25 16C24.25 20.5563 20.5563 24.25 16 24.25C11.4437 24.25 7.75 20.5563 7.75 16Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Dot32.category = 'Interface General';

export default Dot32;
