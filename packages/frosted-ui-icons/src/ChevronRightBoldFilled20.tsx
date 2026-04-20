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
        d="M6.25 2.5L13.453 9.70302C13.617 9.86704 13.617 10.133 13.453 10.297L6.25 17.5"
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
