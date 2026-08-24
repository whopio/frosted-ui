import * as React from 'react';
import { IconProps } from './types';

export const ChevronUp12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUp12"
      {...props}
    >
      <path
        d="M1.75 8l4.073-4.073c.098-.098.256-.098.354 0L10.25 8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUp12.category = 'Arrows';

export default ChevronUp12;
