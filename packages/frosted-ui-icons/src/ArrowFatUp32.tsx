import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18.9998 28.3336H12.9998C12.2634 28.3336 11.6665 27.7367 11.6665 27.0003V13.6669H7.12034C6.55006 13.6669 6.24305 12.9974 6.61517 12.5653L14.9895 2.84025C15.5214 2.22252 16.4782 2.22252 17.0102 2.84025L25.3844 12.5653C25.7566 12.9974 25.4496 13.6669 24.8792 13.6669H20.3331V27.0003C20.3331 27.7367 19.7362 28.3336 18.9998 28.3336Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowFatUp32;
