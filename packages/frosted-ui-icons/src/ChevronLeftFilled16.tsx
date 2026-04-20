import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.875 2.25L5.35835 7.76665C5.22947 7.89553 5.22947 8.10447 5.35835 8.23335L10.875 13.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftFilled16.category = 'Arrows';

export default ChevronLeftFilled16;
