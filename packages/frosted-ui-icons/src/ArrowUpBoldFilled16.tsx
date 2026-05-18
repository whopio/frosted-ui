import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.4999 7.74994L7.99994 2.25L2.50011 7.74994M7.99994 2.25V13.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpBoldFilled16.category = 'Arrows';

export default ArrowUpBoldFilled16;
