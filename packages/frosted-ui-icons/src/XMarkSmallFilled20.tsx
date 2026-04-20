import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.99915 5.99987L9.99928 10M13.9994 14.0001L9.99928 10M9.99928 10L5.99915 14.0001M9.99928 10L13.9994 5.99987"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmallFilled20.category = 'Interface General';

export default XMarkSmallFilled20;
