import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.0008 10.0001L16.0007 16M22.0006 21.9999L16.0007 16M16.0007 16L10.0008 21.9999M16.0007 16L22.0006 10.0001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmall32.category = 'Interface General';

export default XMarkSmall32;
