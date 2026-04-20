import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.5 10.75L7.76665 5.48335C7.89553 5.35447 8.10447 5.35447 8.23335 5.48335L13.5 10.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpBoldFilled16.category = 'Arrows';

export default ChevronUpBoldFilled16;
