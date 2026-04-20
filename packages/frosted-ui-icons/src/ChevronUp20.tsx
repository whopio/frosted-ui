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
        d="M1.75 13.75L9.70301 5.79699C9.86703 5.63297 10.133 5.63297 10.297 5.79699L18.25 13.75"
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
