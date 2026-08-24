import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpSmallBoldFilled16"
      {...props}
    >
      <path
        d="M4.533 9.667l3.231-3.231c.13-.13.341-.13.472 0l3.23 3.23"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpSmallBoldFilled16.category = 'Arrows';

export default ChevronUpSmallBoldFilled16;
