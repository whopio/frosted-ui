import * as React from 'react';
import { IconProps } from './types';

export const ChevronDown24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.75 8.25L11.6464 17.1464C11.8417 17.3417 12.1583 17.3417 12.3536 17.1464L21.25 8.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDown24.category = 'Arrows';

export default ChevronDown24;
