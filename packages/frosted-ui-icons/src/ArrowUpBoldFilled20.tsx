import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.0001 2.25L3.5 8.75024M10.0001 2.25L16.5004 8.75024M10.0001 2.25V17.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpBoldFilled20.category = 'Arrows';

export default ArrowUpBoldFilled20;
