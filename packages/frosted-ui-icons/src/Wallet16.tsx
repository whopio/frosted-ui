import * as React from 'react';
import { IconProps } from './types';

export const Wallet16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Wallet16"
      {...props}
    >
      <path
        d="M8.75 1.5C10.545 1.5 12 2.955 12 4.75v.26c1.678.127 3 1.53 3 3.24v3c0 1.795-1.455 3.25-3.25 3.25h-7.5C2.455 14.5 1 13.045 1 11.25V4c0-.026 0-.052.003-.077C1.043 2.578 2.145 1.5 3.5 1.5h5.25zM2.5 11.25c0 .966.784 1.75 1.75 1.75h7.5c.966 0 1.75-.784 1.75-1.75v-3c0-.966-.784-1.75-1.75-1.75H3.5c-.356 0-.694-.076-1-.21v4.96zm8.5-2.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zM3.5 3c-.552 0-1 .448-1 1s.448 1 1 1h7v-.25C10.5 3.784 9.716 3 8.75 3H3.5z"
        fill={color}
      />
    </svg>
  );
};

Wallet16.category = 'Money & Shopping';

export default Wallet16;
