import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6 1.25L1.75 5.5M6 1.25L10.25 5.5M6 1.25V10.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpBoldFilled12.category = 'Arrows';

export default ArrowUpBoldFilled12;
