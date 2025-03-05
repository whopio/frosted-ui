import * as React from 'react';
import { IconProps } from './types';

export const Gift32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 9.26758L16 29.25M16 9.25L16.6622 5.8065C17.0034 4.03233 18.5558 2.75 20.3625 2.75H21.057C22.8205 2.75 24.25 4.17955 24.25 5.94298C24.25 7.7694 22.7694 9.25 20.943 9.25H16ZM16 9.25L15.3378 5.8065C14.9966 4.03233 13.4442 2.75 11.6375 2.75H10.943C9.17955 2.75 7.75 4.17955 7.75 5.94298C7.75 7.7694 9.2306 9.25 11.057 9.25H16ZM5.25 15.2588H26.75V26.34C26.75 27.9472 25.4471 29.25 23.84 29.25H8.16C6.55285 29.25 5.25 27.9472 5.25 26.34V15.2588ZM2.75 13.6388V10.8876C2.75 9.99288 3.4753 9.26758 4.37 9.26758H27.63C28.5247 9.26758 29.25 9.99288 29.25 10.8876V13.6388C29.25 14.5335 28.5247 15.2588 27.63 15.2588H4.37C3.4753 15.2588 2.75 14.5335 2.75 13.6388Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Gift32;
