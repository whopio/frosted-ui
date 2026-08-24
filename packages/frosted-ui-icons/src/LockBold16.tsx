import * as React from 'react';
import { IconProps } from './types';

export const LockBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LockBold16"
      {...props}
    >
      <path
        d="M8 1c2.761 0 5 2.239 5 5v.742c.9.567 1.5 1.566 1.5 2.708v2.35c0 1.767-1.433 3.2-3.2 3.2H4.7c-1.767 0-3.2-1.433-3.2-3.2V9.45c0-1.142.6-2.141 1.5-2.708V6c0-2.761 2.239-5 5-5zM4.7 8.25c-.663 0-1.2.537-1.2 1.2v2.35c0 .662.537 1.2 1.2 1.2h6.6c.662 0 1.2-.537 1.2-1.2V9.45c0-.663-.537-1.2-1.2-1.2H4.7zM8 3C6.343 3 5 4.343 5 6v.25h6V6c0-1.657-1.343-3-3-3z"
        fill={color}
      />
    </svg>
  );
};

LockBold16.category = 'Security';

export default LockBold16;
