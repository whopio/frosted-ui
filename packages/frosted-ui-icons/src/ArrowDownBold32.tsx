import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.0006 30L4.99988 18.9993M16.0006 30L27.0013 18.9993M16.0006 30V2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownBold32.category = 'Arrows';

export default ArrowDownBold32;
