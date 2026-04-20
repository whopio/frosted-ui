import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.53332 9.66669L7.76429 6.43572C7.89447 6.30555 8.10552 6.30555 8.2357 6.43572L11.4667 9.66669"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpSmallBold16.category = 'Arrows';

export default ChevronUpSmallBold16;
