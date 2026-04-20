import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2 5.75L7.76665 11.5167C7.89553 11.6455 8.10447 11.6455 8.23335 11.5167L14 5.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBold16.category = 'Arrows';

export default ChevronDownBold16;
