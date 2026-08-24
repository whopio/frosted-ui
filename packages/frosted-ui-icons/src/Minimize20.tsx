import * as React from 'react';
import { IconProps } from './types';

export const Minimize20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Minimize20"
      {...props}
    >
      <path
        d="M8.75 10.5c.414 0 .75.336.75.75v7c0 .414-.336.75-.75.75-.415 0-.75-.336-.75-.75v-5.19l-5.72 5.72c-.293.293-.768.293-1.06 0-.293-.293-.293-.767 0-1.06L6.938 12h-5.19c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7zm8.97-9.28c.292-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L13.06 8h5.19c.414 0 .75.336.75.75s-.336.75-.75.75h-7c-.415 0-.75-.336-.75-.75v-7c0-.414.335-.75.75-.75.414 0 .75.336.75.75v5.19l5.72-5.72z"
        fill={color}
      />
    </svg>
  );
};

Minimize20.category = 'Arrows';

export default Minimize20;
