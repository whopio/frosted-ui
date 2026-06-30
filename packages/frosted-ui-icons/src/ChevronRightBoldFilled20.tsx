import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7 3.5L13.203 9.70302C13.367 9.86704 13.367 10.133 13.203 10.297L7 16.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBoldFilled20.category = 'Arrows';

export default ChevronRightBoldFilled20;
