import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.75 2.5L6.54698 9.70302C6.38296 9.86704 6.38296 10.133 6.54698 10.297L13.75 17.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftBoldFilled20.category = 'Arrows';

export default ChevronLeftBoldFilled20;
