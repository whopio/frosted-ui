import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownFilled16"
      {...props}
    >
      <path
        d="M13.5 8.25L8 13.75l-5.5-5.5m5.5 5.5V2.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownFilled16.category = 'Arrows';

export default ArrowDownFilled16;
