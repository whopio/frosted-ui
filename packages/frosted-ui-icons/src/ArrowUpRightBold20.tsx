import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightBold20"
      {...props}
    >
      <path d="M6.5 3H17v10.5M17 3L3 17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ArrowUpRightBold20.category = 'Arrows';

export default ArrowUpRightBold20;
