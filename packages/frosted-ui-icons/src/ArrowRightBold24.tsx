import * as React from 'react';
import { IconProps } from './types';

export const ArrowRightBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M22.0005 11.9999L14.0005 4M22.0005 11.9999L14.0005 20M22.0005 11.9999H2.00049"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRightBold24.category = 'Arrows';

export default ArrowRightBold24;
