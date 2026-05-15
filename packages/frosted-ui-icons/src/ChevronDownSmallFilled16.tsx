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
        d="M4.5332 6.3335L7.76417 9.56446C7.89434 9.69464 8.1054 9.69464 8.23557 9.56446L11.4665 6.3335"
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
