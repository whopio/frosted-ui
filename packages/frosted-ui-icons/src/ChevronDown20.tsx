import * as React from 'react';
import { IconProps } from './types';

export const ChevronDown20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.75 8L9.70545 11.9555C9.86817 12.1182 10.132 12.1182 10.2947 11.9555L14.2502 8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDown20.category = 'Arrows';

export default ChevronDown20;
