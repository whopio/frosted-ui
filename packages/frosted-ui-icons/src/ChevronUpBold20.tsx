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
        d="M2 13.75L9.70302 6.04698C9.86704 5.88296 10.133 5.88296 10.297 6.04698L18 13.75"
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
