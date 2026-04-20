import * as React from 'react';
import { IconProps } from './types';

export const ChevronRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.875 1.75L13.828 9.70301C13.992 9.86703 13.992 10.133 13.828 10.297L5.875 18.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRight20.category = 'Arrows';

export default ChevronRight20;
