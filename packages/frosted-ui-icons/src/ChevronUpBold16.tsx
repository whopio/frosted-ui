import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpBold16"
      {...props}
    >
      <path
        d="M3 10l4.767-4.767c.129-.129.337-.129.466 0L13 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpBold16.category = 'Arrows';

export default ChevronUpBold16;
