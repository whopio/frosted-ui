import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.5332 6.33337L7.76417 9.56434C7.89434 9.69452 8.1054 9.69452 8.23557 9.56434L11.4665 6.33337"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBoldFilled16.category = 'Arrows';

export default ChevronDownBoldFilled16;
