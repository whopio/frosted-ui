import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.6999 6.95L5.82323 4.82667C5.92086 4.72904 6.07915 4.72904 6.17678 4.82667L8.3001 6.9499"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpSmall12.category = 'Arrows';

export default ChevronUpSmall12;
