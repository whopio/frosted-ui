import * as React from 'react';
import { IconProps } from './types';

export const Underline32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Underline32"
      {...props}
    >
      <path
        d="M24.335 26.917c.414 0 .75.336.75.75s-.336.75-.75.75H7.668c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h16.667zm0-22.667c.414 0 .75.336.75.75v11c0 5.017-4.068 9.083-9.084 9.083-5.017 0-9.083-4.066-9.083-9.083V5c0-.414.336-.75.75-.75s.75.336.75.75v11c0 4.188 3.395 7.583 7.583 7.583 4.188 0 7.584-3.395 7.584-7.583V5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

Underline32.category = 'Text Formatting';

export default Underline32;
