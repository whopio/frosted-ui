import * as React from 'react';
import { IconProps } from './types';

export const Plane12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.59803 4.98859L6.5 1.75208H4.9375L5.14017 4.98859H3.3501L2.13641 3.7749H0.8125L1.65625 6L0.8125 8.2251H2.13641L3.3501 7.01141H5.14017L4.9375 10.2479H6.5L7.59803 7.01141H9.86359C10.4222 7.01141 11.1875 6.55858 11.1875 6C11.1875 5.44142 10.4222 4.98859 9.86359 4.98859H7.59803Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Plane12;
