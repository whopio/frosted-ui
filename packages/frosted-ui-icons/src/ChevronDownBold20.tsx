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
        d="M3 7.25L9.70302 13.953C9.86704 14.117 10.133 14.117 10.297 13.953L17 7.25"
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
