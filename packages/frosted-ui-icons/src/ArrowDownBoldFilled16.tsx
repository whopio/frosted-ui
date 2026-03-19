import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.00007 13.75L2.50023 8.25006M8.00007 13.75L13.5 8.25006M8.00007 13.75V2.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownBoldFilled16.category = 'Arrows';

export default ArrowDownBoldFilled16;
