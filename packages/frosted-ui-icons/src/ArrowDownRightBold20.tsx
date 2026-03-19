import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M17.0001 17L17.0001 6.5M17.0001 17L6.5001 17M17.0001 17L3.00012 3.00006"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownRightBold20.category = 'Arrows';

export default ArrowDownRightBold20;
