import * as React from 'react';
import { IconProps } from './types';

export const FullScreen16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.6 14H5C3.34315 14 2 12.6569 2 11V10.6087M10.4 14H11C12.6569 14 14 12.6569 14 11V10.6087M10.4 2H11C12.6569 2 14 3.34315 14 5V5.3913M5.6 2H5C3.34315 2 2 3.34315 2 5V5.3913"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default FullScreen16;
