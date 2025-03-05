import * as React from 'react';
import { IconProps } from './types';

export const Logout20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.5 16H10C11.6569 16 13 14.6569 13 13V12.25M1 5V4C1 2.34315 2.34315 1 4 1H10C11.6569 1 13 2.34315 13 4V4.75M12 8.5H18M18 8.5L15.5 6M18 8.5L15.5 11"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 4.23607C1 2.7493 2.56462 1.78231 3.89443 2.44721L7.34164 4.17082C8.35799 4.679 9 5.71779 9 6.8541V16.7639C9 18.2507 7.43538 19.2177 6.10557 18.5528L2.10557 16.5528C1.428 16.214 1 15.5215 1 14.7639V4.23607Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logout20;
