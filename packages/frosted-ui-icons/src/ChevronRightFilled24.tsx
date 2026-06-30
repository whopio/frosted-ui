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
        d="M8 3.25L16.3964 11.6464C16.5917 11.8417 16.5917 12.1583 16.3964 12.3536L8 20.75"
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
