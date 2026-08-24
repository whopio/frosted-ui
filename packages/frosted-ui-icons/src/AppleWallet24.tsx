import * as React from 'react';
import { IconProps } from './types';

export const AppleWallet24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="AppleWallet24"
      {...props}
    >
      <path
        d="M18.75 3C21.097 3 23 4.903 23 7.25v8.5c0 2.347-1.903 4.25-4.25 4.25H5.25C2.903 20 1 18.097 1 15.75v-8.5C1 4.903 2.903 3 5.25 3h13.5zM2.5 15.75c0 1.519 1.231 2.75 2.75 2.75h13.5c1.519 0 2.75-1.231 2.75-2.75V13h-3.99c-.267 0-.53.074-.758.214l-3.209 1.97c-.946.58-2.139.58-3.085 0l-3.209-1.97c-.228-.14-.491-.214-.759-.214H2.5v2.75zM5.25 4.5C3.731 4.5 2.5 5.731 2.5 7.25v4.25h3.99c.545 0 1.079.15 1.543.435l3.21 1.97c.464.285 1.05.285 1.516 0l3.209-1.97c.464-.284.998-.435 1.543-.435H21.5V7.25c0-1.519-1.231-2.75-2.75-2.75H5.25z"
        fill={color}
      />
    </svg>
  );
};

AppleWallet24.category = 'Money & Shopping';

export default AppleWallet24;
