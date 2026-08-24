import * as React from 'react';
import { IconProps } from './types';

export const ArrowRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowRightBold20"
      {...props}
    >
      <path
        d="M11.5 16.5L18 10l-6.5-6.5M18 10H2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRightBold20.category = 'Arrows';

export default ArrowRightBold20;
