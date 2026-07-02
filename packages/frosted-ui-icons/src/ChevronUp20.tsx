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
        d="M2.75 13.25L9.70301 6.29699C9.86703 6.13297 10.133 6.13297 10.297 6.29699L17.25 13.25"
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
