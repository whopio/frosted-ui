import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.99923 4.99979L7.99943 8M10.9996 11.0002L7.99943 8M7.99943 8L4.99923 11.0002M7.99943 8L10.9996 4.99979"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmallBoldFilled16.category = 'Interface General';

export default XMarkSmallBoldFilled16;
