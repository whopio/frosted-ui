import * as React from 'react';
import { IconProps } from './types';

export const ChevronUp32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUp32"
      {...props}
    >
      <path
        d="M2.75 22L15.526 9.224c.262-.262.686-.262.948 0L29.25 22"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUp32.category = 'Arrows';

export default ChevronUp32;
