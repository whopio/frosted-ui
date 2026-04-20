import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.125 2.25L16.5214 11.6464C16.7167 11.8417 16.7167 12.1583 16.5214 12.3536L7.125 21.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightFilled24.category = 'Arrows';

export default ChevronRightFilled24;
