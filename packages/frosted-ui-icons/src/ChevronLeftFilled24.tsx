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
        d="M15.5 3.25L7.10355 11.6464C6.90829 11.8417 6.90829 12.1583 7.10355 12.3536L15.5 20.75"
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
