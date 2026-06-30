import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.25 7.25L9.70302 13.703C9.86704 13.867 10.133 13.867 10.297 13.703L16.75 7.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownFilled20.category = 'Arrows';

export default ChevronDownFilled20;
