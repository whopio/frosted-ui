import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeft20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.125 1.75L6.17199 9.70301C6.00797 9.86703 6.00797 10.133 6.17199 10.297L14.125 18.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeft20.category = 'Arrows';

export default ChevronLeft20;
