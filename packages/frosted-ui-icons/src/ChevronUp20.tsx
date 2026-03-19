import * as React from 'react';
import { IconProps } from './types';

export const ChevronUp20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.75 12L9.70545 8.04454C9.86817 7.88183 10.132 7.88183 10.2947 8.04454L14.2502 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUp20.category = 'Arrows';

export default ChevronUp20;
