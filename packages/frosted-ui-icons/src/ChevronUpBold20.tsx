import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3 13L9.70302 6.29698C9.86704 6.13296 10.133 6.13296 10.297 6.29698L17 13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpBold20.category = 'Arrows';

export default ChevronUpBold20;
