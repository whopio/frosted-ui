import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftSmallBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.7334 4.53997L6.50243 7.77094C6.37226 7.90112 6.37226 8.11217 6.50243 8.24235L9.7334 11.4733"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftSmallBold16.category = 'Arrows';

export default ChevronLeftSmallBold16;
