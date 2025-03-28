import * as React from 'react';
import { IconProps } from './types';

export const NotificationBellCrossed20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M11.9839 15.25V16C11.9839 17.2426 10.9765 18.25 9.73389 18.25C8.49125 18.25 7.48389 17.2426 7.48389 16V15.25H11.9839ZM11.9839 15.25H16.5391C16.9227 15.25 17.1378 14.8082 16.9012 14.5063L16.4095 13.8787C16.1337 13.5267 15.9839 13.0924 15.9839 12.6452V8C15.9839 7.57882 15.9422 7.16737 15.8628 6.76955M12.4602 2.37437C11.6363 1.97435 10.7113 1.75 9.73389 1.75C6.28211 1.75 3.48389 4.54822 3.48389 8V11.376"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.73389 16L16.7339 2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default NotificationBellCrossed20;
