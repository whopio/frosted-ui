import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 2L13.703 9.70302C13.867 9.86704 13.867 10.133 13.703 10.297L6 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBold20.category = 'Arrows';

export default ChevronRightBold20;
