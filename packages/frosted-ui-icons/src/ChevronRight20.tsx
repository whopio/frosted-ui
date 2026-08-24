import * as React from 'react';
import { IconProps } from './types';

export const ChevronRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRight20"
      {...props}
    >
      <path
        d="M7 2.75l6.953 6.953c.164.164.164.43 0 .594L7 17.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRight20.category = 'Arrows';

export default ChevronRight20;
