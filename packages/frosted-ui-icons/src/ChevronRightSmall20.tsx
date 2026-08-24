import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRightSmall20"
      {...props}
    >
      <path
        d="M7.875 5.75l3.956 3.955c.162.163.162.427 0 .59L7.875 14.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightSmall20.category = 'Arrows';

export default ChevronRightSmall20;
