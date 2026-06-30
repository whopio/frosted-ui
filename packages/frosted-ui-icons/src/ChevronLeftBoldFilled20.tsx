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
        d="M12.25 3.5L6.04698 9.70302C5.88296 9.86704 5.88296 10.133 6.04698 10.297L12.25 16.5"
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
