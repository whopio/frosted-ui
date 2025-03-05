import * as React from 'react';
import { IconProps } from './types';

export const BarChart16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.25 5.25L6.25 13.25M10.25 7.75L10.25 13.25M14.25 1.75L14.25 13.25M2.25 10.25L2.25 13.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BarChart16;
