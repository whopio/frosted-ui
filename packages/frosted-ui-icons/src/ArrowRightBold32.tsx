import * as React from 'react';
import { IconProps } from './types';

export const ArrowRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M30.0007 16L19.0001 4.99927M30.0007 16L19.0001 27.0007M30.0007 16H2.00073"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRightBold32.category = 'Arrows';

export default ArrowRightBold32;
