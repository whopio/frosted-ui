import * as React from 'react';
import { IconProps } from './types';

export const ChevronUp16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUp16"
      {...props}
    >
      <path
        d="M2.75 10.25l5.017-5.017c.129-.129.337-.129.466 0l5.017 5.017"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUp16.category = 'Arrows';

export default ChevronUp16;
