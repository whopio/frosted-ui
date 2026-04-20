import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16.875 2.25L7.47855 11.6464C7.28329 11.8417 7.28329 12.1583 7.47855 12.3536L16.875 21.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftFilled24.category = 'Arrows';

export default ChevronLeftFilled24;
