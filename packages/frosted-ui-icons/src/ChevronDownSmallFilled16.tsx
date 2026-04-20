import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownSmallFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.53332 6.33337L7.76429 9.56434C7.89447 9.69452 8.10552 9.69452 8.2357 9.56434L11.4667 6.33337"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownSmallFilled16.category = 'Arrows';

export default ChevronDownSmallFilled16;
