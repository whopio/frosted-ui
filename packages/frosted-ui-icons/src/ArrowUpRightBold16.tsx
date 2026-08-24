import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightBold16"
      {...props}
    >
      <path d="M4.5 3H13v8.5M13 3L3 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ArrowUpRightBold16.category = 'Arrows';

export default ArrowUpRightBold16;
