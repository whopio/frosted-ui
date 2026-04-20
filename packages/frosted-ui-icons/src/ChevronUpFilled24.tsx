import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.25 16.75L11.6464 7.35355C11.8417 7.15829 12.1583 7.15829 12.3536 7.35355L21.75 16.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpFilled24.category = 'Arrows';

export default ChevronUpFilled24;
