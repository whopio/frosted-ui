import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.99994 13.75L2.50011 8.25006M7.99994 13.75L13.4999 8.25006M7.99994 13.75V2.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownFilled16.category = 'Arrows';

export default ArrowDownFilled16;
