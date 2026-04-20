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
        d="M1.75 7.5L11.6464 17.3964C11.8417 17.5917 12.1583 17.5917 12.3536 17.3964L22.25 7.5"
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
