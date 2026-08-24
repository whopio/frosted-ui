import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeftBold20"
      {...props}
    >
      <path
        d="M12.75 3L6.047 9.703c-.164.164-.164.43 0 .594L12.75 17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftBold20.category = 'Arrows';

export default ChevronLeftBold20;
