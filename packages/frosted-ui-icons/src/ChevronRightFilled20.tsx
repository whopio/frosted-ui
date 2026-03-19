import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.875 5.75L11.8305 9.70545C11.9932 9.86817 11.9932 10.132 11.8305 10.2947L7.875 14.2502"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightFilled20.category = 'Arrows';

export default ChevronRightFilled20;
