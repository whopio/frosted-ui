import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M28.0001 28L28.0001 8.49999M28.0001 28L8.50009 28M28.0001 28L4.00012 4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownRightBold32.category = 'Arrows';

export default ArrowDownRightBold32;
