import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownSmallBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9 12.75L15.5286 19.2786C15.7889 19.5389 16.2111 19.5389 16.4714 19.2786L22.9999 12.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownSmallBoldFilled32.category = 'Arrows';

export default ChevronDownSmallBoldFilled32;
