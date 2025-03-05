import * as React from 'react';
import { IconProps } from './types';

export const BarChart12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.25 5.75L7.25 10.25M4.25 4.25L4.25 10.25M10.25 1.75L10.25 10.25M1.25 8.75L1.25 10.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BarChart12;
