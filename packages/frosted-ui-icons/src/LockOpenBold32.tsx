import * as React from 'react';
import { IconProps } from './types';

export const LockOpenBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 1C19.5206 1 22.6141 2.82033 24.3955 5.57031C24.8123 6.21371 24.3066 6.99992 23.54 7C23.1606 7 22.8142 6.79441 22.5996 6.48145C21.1583 4.37965 18.7411 3 16 3C11.5817 3 8 6.58172 8 11V13.2559C8.0829 13.2523 8.16623 13.25 8.25 13.25H23.75C26.9256 13.25 29.5 15.8244 29.5 19V25.25C29.5 28.4256 26.9256 31 23.75 31H8.25C5.07436 31 2.5 28.4256 2.5 25.25V19C2.5 16.6153 3.95161 14.5693 6.01953 13.6982C6.00665 13.6342 6 13.5679 6 13.5V11C6 5.47715 10.4772 1 16 1ZM8.25 15.25C6.17893 15.25 4.5 16.9289 4.5 19V25.25C4.5 27.3211 6.17893 29 8.25 29H23.75C25.8211 29 27.5 27.3211 27.5 25.25V19C27.5 16.9289 25.8211 15.25 23.75 15.25H8.25Z"
        fill={color}
      />
    </svg>
  );
};

LockOpenBold32.category = 'Security';

export default LockOpenBold32;
