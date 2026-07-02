import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.5 15.5L11.6464 7.35355C11.8417 7.15829 12.1583 7.15829 12.3536 7.35355L20.5 15.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpBoldFilled24.category = 'Arrows';

export default ChevronUpBoldFilled24;
