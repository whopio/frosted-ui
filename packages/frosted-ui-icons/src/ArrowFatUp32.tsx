import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp32 = ({
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
        d="M18.9999 28.3336H13C12.2636 28.3336 11.6666 27.7367 11.6666 27.0003V13.6669H7.12046C6.55018 13.6669 6.24317 12.9974 6.61529 12.5653L14.9896 2.84025C15.5215 2.22252 16.4783 2.22252 17.0103 2.84025L25.3846 12.5653C25.7567 12.9974 25.4498 13.6669 24.8794 13.6669H20.3332V27.0003C20.3332 27.7367 19.7363 28.3336 18.9999 28.3336Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowFatUp32;
