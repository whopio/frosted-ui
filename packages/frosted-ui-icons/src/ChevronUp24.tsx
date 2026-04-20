import * as React from 'react';
import { IconProps } from './types';

export const ChevronUp24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.75 16.75L11.6464 6.85355C11.8417 6.65829 12.1583 6.65829 12.3536 6.85356L22.25 16.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUp24.category = 'Arrows';

export default ChevronUp24;
