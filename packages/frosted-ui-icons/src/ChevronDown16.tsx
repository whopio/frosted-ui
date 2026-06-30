import * as React from 'react';
import { IconProps } from './types';

export const ChevronDown16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.75 6L7.76665 11.0167C7.89553 11.1455 8.10447 11.1455 8.23335 11.0167L13.2499 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDown16.category = 'Arrows';

export default ChevronDown16;
