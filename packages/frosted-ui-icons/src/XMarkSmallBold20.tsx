import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.00011 5.99989L10.0002 10M14.0003 14.0001L10.0002 10M10.0002 10L6.00011 14.0001M10.0002 10L14.0003 5.99989"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmallBold20.category = 'Interface General';

export default XMarkSmallBold20;
