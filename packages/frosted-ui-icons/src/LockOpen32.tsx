import * as React from 'react';
import { IconProps } from './types';

export const LockOpen32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 1C19.6742 1 22.8833 2.98264 24.6211 5.93555C24.9072 6.42178 24.5329 7 23.9688 7C23.6802 6.99989 23.4175 6.83937 23.2676 6.59277C21.7768 4.13955 19.0804 2.5 16 2.5C11.3056 2.5 7.5 6.30558 7.5 11V13.5234C7.66471 13.5086 7.83142 13.5 8 13.5H24C27.0376 13.5 29.5 15.9624 29.5 19V25.5C29.5 28.5376 27.0376 31 24 31H8C4.96243 31 2.5 28.5376 2.5 25.5V19C2.5 16.6641 3.95663 14.6695 6.01074 13.8721C6.00422 13.8323 6 13.7916 6 13.75V11C6 5.47715 10.4772 1 16 1ZM8 15C5.79086 15 4 16.7909 4 19V25.5C4 27.7091 5.79086 29.5 8 29.5H24C26.2091 29.5 28 27.7091 28 25.5V19C28 16.7909 26.2091 15 24 15H8Z"
        fill={color}
      />
    </svg>
  );
};

LockOpen32.category = 'Security';

export default LockOpen32;
