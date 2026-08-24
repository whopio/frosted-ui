import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRightBold16"
      {...props}
    >
      <path
        d="M6 3l4.767 4.767c.129.129.129.337 0 .466L6 13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBold16.category = 'Arrows';

export default ChevronRightBold16;
