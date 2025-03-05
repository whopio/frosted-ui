import * as React from 'react';
import { IconProps } from './types';

export const RotateLeft20 = ({
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
        d="M3.53374 12.2917C4.47758 14.9619 7.02416 16.875 10.0176 16.875C13.8145 16.875 16.8926 13.7969 16.8926 10C16.8926 6.20304 13.8145 3.125 10.0176 3.125C7.66991 3.125 6.10083 4.12865 4.58341 5.84076M3.95841 3.33333V6.04167C3.95841 6.38684 4.23824 6.66667 4.58341 6.66667H7.29174"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RotateLeft20;
