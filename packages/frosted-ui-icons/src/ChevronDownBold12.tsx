import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDownBold12"
      {...props}
    >
      <path
        d="M2 4.5l3.823 3.823c.098.098.256.098.354 0L10 4.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBold12.category = 'Arrows';

export default ChevronDownBold12;
