import * as React from 'react';
import { IconProps } from './types';

export const Parachute32 = ({
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
        d="M1.75 16.25L8.75 23.75M1.75 16.25C1.75 16.25 2.32317 1.75 16 1.75C29.6768 1.75 30.25 16.25 30.25 16.25M1.75 16.25C1.75 16.25 3.85137 12.75 8.875 12.75C13.8986 12.75 16 16.25 16 16.25M23.25 23.75L30.25 16.25M30.25 16.25C30.25 16.25 28.1485 12.75 23.1249 12.75C18.1013 12.75 16 16.25 16 16.25M16 16.25V23.75M8.75 24.25V28.86C8.75 29.6277 9.37232 30.25 10.14 30.25H21.86C22.6277 30.25 23.25 29.6277 23.25 28.86V24.25C23.25 23.9739 23.0261 23.75 22.75 23.75H9.25C8.97386 23.75 8.75 23.9739 8.75 24.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Parachute32;
