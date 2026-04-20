import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.75 12.0001L9.70545 8.04461C9.86817 7.88189 10.132 7.88189 10.2947 8.04461L14.2502 12.0001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpSmall20.category = 'Arrows';

export default ChevronUpSmall20;
