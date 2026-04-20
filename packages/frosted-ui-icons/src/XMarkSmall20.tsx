import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.00009 5.99991L10.0002 10M14.0003 14.0001L10.0002 10M10.0002 10L6.00009 14.0001M10.0002 10L14.0003 5.99991"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmall20.category = 'Interface General';

export default XMarkSmall20;
