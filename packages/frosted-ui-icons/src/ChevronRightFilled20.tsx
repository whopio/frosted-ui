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
        d="M6.125 2.25L13.578 9.70302C13.742 9.86704 13.742 10.133 13.578 10.297L6.125 17.75"
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
