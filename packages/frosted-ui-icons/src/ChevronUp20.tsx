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
      data-fui-icon="ChevronUp20"
      {...props}
    >
      <path
        d="M2.75 13.25l6.953-6.953c.164-.164.43-.164.594 0l6.953 6.953"
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
