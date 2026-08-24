import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftSmallBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeftSmallBold32"
      {...props}
    >
      <path
        d="M19.5 9l-6.529 6.529c-.26.26-.26.682 0 .942L19.5 23"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftSmallBold32.category = 'Arrows';

export default ChevronLeftSmallBold32;
