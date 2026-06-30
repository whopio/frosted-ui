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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3 6L7.76665 10.7667C7.89553 10.8955 8.10447 10.8955 8.23335 10.7667L13 6"
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
