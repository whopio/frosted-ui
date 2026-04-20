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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M14 2L6.29698 9.70302C6.13296 9.86704 6.13296 10.133 6.29698 10.297L14 18"
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
