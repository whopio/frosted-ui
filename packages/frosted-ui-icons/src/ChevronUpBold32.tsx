import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpBold32"
      {...props}
    >
      <path
        d="M3 21.75L15.526 9.224c.262-.262.686-.262.948 0L29 21.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpBold32.category = 'Arrows';

export default ChevronUpBold32;
