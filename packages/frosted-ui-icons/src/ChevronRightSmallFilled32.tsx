import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRightSmallFilled32"
      {...props}
    >
      <path
        d="M12.5 9l6.529 6.529c.26.26.26.682 0 .942L12.5 23"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightSmallFilled32.category = 'Arrows';

export default ChevronRightSmallFilled32;
