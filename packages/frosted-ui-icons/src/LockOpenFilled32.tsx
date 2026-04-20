import * as React from 'react';
import { IconProps } from './types';

export const LockOpenFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 1C19.6742 1 22.8833 2.98264 24.6211 5.93555C24.9072 6.42178 24.5329 7 23.9688 7C23.6802 6.99989 23.4175 6.83937 23.2676 6.59277C21.7768 4.13955 19.0804 2.5 16 2.5C11.3056 2.5 7.5 6.30558 7.5 11V13.5234C7.66471 13.5086 7.83142 13.5 8 13.5H24C27.0376 13.5 29.5 15.9624 29.5 19V25.5C29.5 28.5376 27.0376 31 24 31H8C4.96243 31 2.5 28.5376 2.5 25.5V19C2.5 16.6641 3.95663 14.6695 6.01074 13.8721C6.00422 13.8323 6 13.7916 6 13.75V11C6 5.47715 10.4772 1 16 1Z"
        fill={color}
      />
    </svg>
  );
};

LockOpenFilled32.category = 'Security';

export default LockOpenFilled32;
