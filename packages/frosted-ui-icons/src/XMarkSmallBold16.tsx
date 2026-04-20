import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.99921 4.99981L7.9994 8M10.9996 11.0002L7.9994 8M7.9994 8L4.99921 11.0002M7.9994 8L10.9996 4.99981"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmallBold16.category = 'Interface General';

export default XMarkSmallBold16;
