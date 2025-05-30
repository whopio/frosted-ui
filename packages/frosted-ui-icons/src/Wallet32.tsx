import * as React from 'react';
import { IconProps } from './types';

export const Wallet32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M25.6658 8.66668C25.6658 7.37801 24.6211 6.33334 23.3324 6.33334H5.26567C4.34519 6.33334 3.599 7.07953 3.599 8.00001M3.599 8.00001V23C3.599 24.4728 4.79291 25.6667 6.26567 25.6667H25.599C27.0718 25.6667 28.2656 24.4728 28.2656 23V12.3333C28.2656 10.8606 27.0718 9.66668 25.599 9.66668H5.26567C4.34519 9.66668 3.599 8.92049 3.599 8.00001ZM22.9991 17.6667C22.9991 18.2189 22.5514 18.6667 21.9991 18.6667C21.4468 18.6667 20.9991 18.2189 20.9991 17.6667C20.9991 17.1144 21.4468 16.6667 21.9991 16.6667C22.5514 16.6667 22.9991 17.1144 22.9991 17.6667Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Wallet32;
