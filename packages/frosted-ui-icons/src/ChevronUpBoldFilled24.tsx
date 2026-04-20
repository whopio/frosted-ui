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
        d="M2.5 16.75L11.6464 7.60355C11.8417 7.40829 12.1583 7.40829 12.3536 7.60355L21.5 16.75"
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
