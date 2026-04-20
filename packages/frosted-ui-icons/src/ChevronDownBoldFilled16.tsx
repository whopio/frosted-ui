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
        d="M2.5 6.25L7.76665 11.5167C7.89553 11.6455 8.10447 11.6455 8.23335 11.5167L13.5 6.25"
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
