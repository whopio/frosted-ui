import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2 6.75L9.70302 14.453C9.86704 14.617 10.133 14.617 10.297 14.453L18 6.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBold20.category = 'Arrows';

export default ChevronDownBold20;
