import * as React from 'react';
import { IconProps } from './types';

export const LockBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LockBoldFilled20"
      {...props}
    >
      <path
        d="M10 1c3.314 0 6 2.686 6 6v1.042c1.466.593 2.5 2.03 2.5 3.708V15c0 2.21-1.79 4-4 4h-9c-2.21 0-4-1.79-4-4v-3.25c0-1.678 1.034-3.115 2.5-3.708V7c0-3.314 2.686-6 6-6zm0 2C7.79 3 6 4.79 6 7v.75h8V7c0-2.21-1.79-4-4-4z"
        fill={color}
      />
    </svg>
  );
};

LockBoldFilled20.category = 'Security';

export default LockBoldFilled20;
