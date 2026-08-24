import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDownBold16"
      {...props}
    >
      <path
        d="M3 6l4.767 4.767c.129.129.337.129.466 0L13 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBold16.category = 'Arrows';

export default ChevronDownBold16;
