import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 10.75L1.75 6.5M6 10.75L10.25 6.5M6 10.75V1.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownBoldFilled12.category = 'Arrows';

export default ArrowDownBoldFilled12;
