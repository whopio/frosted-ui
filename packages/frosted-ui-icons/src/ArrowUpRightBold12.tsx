import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightBold12"
      {...props}
    >
      <path d="M3.5 2H10v6.5M10 2l-8 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ArrowUpRightBold12.category = 'Arrows';

export default ArrowUpRightBold12;
