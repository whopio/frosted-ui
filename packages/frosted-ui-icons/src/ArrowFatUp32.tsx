import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.9998 28.3336H12.9999C12.2635 28.3336 11.6666 27.7367 11.6666 27.0003V13.6669H7.1204C6.55012 13.6669 6.24311 12.9974 6.61523 12.5653L14.9896 2.84025C15.5214 2.22252 16.4782 2.22252 17.0102 2.84025L25.3845 12.5653C25.7566 12.9974 25.4497 13.6669 24.8793 13.6669H20.3332V27.0003C20.3332 27.7367 19.7362 28.3336 18.9998 28.3336Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowFatUp32;
