import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.5 13.75L9.70302 6.54698C9.86704 6.38296 10.133 6.38296 10.297 6.54698L17.5 13.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpBoldFilled20.category = 'Arrows';

export default ChevronUpBoldFilled20;
