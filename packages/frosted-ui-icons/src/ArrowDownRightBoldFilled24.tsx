import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRightBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownRightBoldFilled24"
      {...props}
    >
      <path
        d="M7.75 20.75h13v-13m0 13L3.25 3.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownRightBoldFilled24.category = 'Arrows';

export default ArrowDownRightBoldFilled24;
