import * as React from 'react';
import { IconProps } from './types';

export const ArrowRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowRightBoldFilled16"
      {...props}
    >
      <path
        d="M8.25 13.5l5.5-5.5-5.5-5.5m5.5 5.5H2.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowRightBoldFilled16.category = 'Arrows';

export default ArrowRightBoldFilled16;
