import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownBoldFilled20"
      {...props}
    >
      <path
        d="M16.5 11.25l-6.5 6.5-6.5-6.5m6.5 6.5V2.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownBoldFilled20.category = 'Arrows';

export default ArrowDownBoldFilled20;
