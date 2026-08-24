import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftSmallFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeftSmallFilled24"
      {...props}
    >
      <path
        d="M14.625 6.75l-4.896 4.896c-.196.196-.196.512 0 .708l4.896 4.896"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftSmallFilled24.category = 'Arrows';

export default ChevronLeftSmallFilled24;
