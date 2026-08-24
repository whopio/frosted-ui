import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeftBoldFilled20"
      {...props}
    >
      <path
        d="M12.25 3.5L6.047 9.703c-.164.164-.164.43 0 .594L12.25 16.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftBoldFilled20.category = 'Arrows';

export default ChevronLeftBoldFilled20;
