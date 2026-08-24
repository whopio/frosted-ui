import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRightBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownRightBold16"
      {...props}
    >
      <path d="M4.5 13H13V4.5m0 8.5L3 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ArrowDownRightBold16.category = 'Arrows';

export default ArrowDownRightBold16;
