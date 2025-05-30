import * as React from 'react';
import { IconProps } from './types';

export const NotificationBellCrossed32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M19.722 25.5455V26.9091C19.722 29.1684 17.8587 31 15.5603 31C13.2618 31 11.3986 29.1684 11.3986 26.9091V25.5455M19.722 25.5455H28.1476C28.857 25.5455 29.2549 24.7422 28.8173 24.1933L27.9078 23.0521C27.3977 22.4121 27.1206 21.6225 27.1206 20.8095V12.3636C27.1206 11.5979 27 10 26 9M19.722 25.5455H11.3986M11.3986 25.5455H9.5M21.5 3C20 1.5 17.3681 1 15.5603 1C9.17572 1 4 6.08767 4 12.3636V21"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 27L29 1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default NotificationBellCrossed32;
