import * as React from 'react';
import { IconProps } from './types';

export const ShareScreen32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShareScreen32"
      {...props}
    >
      <path
        d="M22.5 3.75c3.728 0 6.75 3.022 6.75 6.75v11c0 3.728-3.022 6.75-6.75 6.75h-13c-3.728 0-6.75-3.022-6.75-6.75v-11c0-3.728 3.022-6.75 6.75-6.75h13zm-13 1.5c-2.9 0-5.25 2.35-5.25 5.25v11c0 2.9 2.35 5.25 5.25 5.25h13c2.9 0 5.25-2.35 5.25-5.25v-11c0-2.9-2.35-5.25-5.25-5.25h-13zm5.498 5.191c.519-.518 1.34-.551 1.897-.097l.107.097 4.028 4.029c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0l-3.22-3.22V21c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.69l-3.22 3.22c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l4.028-4.029z"
        fill={color}
      />
    </svg>
  );
};

ShareScreen32.category = 'Interface General';

export default ShareScreen32;
