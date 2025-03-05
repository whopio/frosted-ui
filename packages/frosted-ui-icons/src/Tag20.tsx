import * as React from 'react';
import { IconProps } from './types';

export const Tag20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16.98 1.75H11.0261C10.6892 1.75 10.3662 1.8838 10.128 2.12197L2.5013 9.7487C2.02025 10.2297 1.75 10.8822 1.75 11.5625C1.75 12.2428 2.02025 12.8953 2.5013 13.3763L6.6237 17.4987C7.10475 17.9797 7.75719 18.25 8.4375 18.25C9.11781 18.25 9.77025 17.9797 10.2513 17.4987L17.878 9.87197C18.1162 9.6338 18.25 9.31077 18.25 8.97395V3.02C18.25 2.3186 17.6814 1.75 16.98 1.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="14"
        cy="6"
        r="1.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Tag20;
