import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.25 13.75L9.70302 6.29698C9.86704 6.13296 10.133 6.13296 10.297 6.29698L17.75 13.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpFilled20.category = 'Arrows';

export default ChevronUpFilled20;
