import * as React from 'react';
import { IconProps } from './types';

export const Wallet32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M25.6656 8.66668C25.6656 7.37801 24.621 6.33334 23.3323 6.33334H5.26554C4.34506 6.33334 3.59888 7.07953 3.59888 8.00001M3.59888 8.00001V23C3.59888 24.4728 4.79278 25.6667 6.26554 25.6667H25.5989C27.0717 25.6667 28.2655 24.4728 28.2655 23V12.3333C28.2655 10.8606 27.0717 9.66668 25.5989 9.66668H5.26554C4.34506 9.66668 3.59888 8.92049 3.59888 8.00001ZM22.999 17.6667C22.999 18.2189 22.5513 18.6667 21.999 18.6667C21.4467 18.6667 20.999 18.2189 20.999 17.6667C20.999 17.1144 21.4467 16.6667 21.999 16.6667C22.5513 16.6667 22.999 17.1144 22.999 17.6667Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Wallet32;
