import * as React from 'react';
import { IconProps } from './types';

export const LightsOff24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.6 23.25H14.4M5.75 12C5.75 14.2639 7.10972 15.691 8.07017 16.4167C8.60537 16.821 9 17.4296 9 18.1003C9 19.2876 9.96244 20.25 11.1497 20.25H12.8503C14.0376 20.25 15 19.2876 15 18.1003C15 17.4296 15.3946 16.821 15.9298 16.4167C16.8903 15.691 18.25 14.2639 18.25 12C18.25 8.5 15.6502 5.75 12 5.75C8.34978 5.75 5.75 8.5 5.75 12Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LightsOff24;
