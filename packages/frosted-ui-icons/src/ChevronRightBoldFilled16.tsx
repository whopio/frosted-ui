import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6.26685 4.53997L9.49781 7.77094C9.62799 7.90112 9.62799 8.11217 9.49781 8.24235L6.26685 11.4733"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBoldFilled16.category = 'Arrows';

export default ChevronRightBoldFilled16;
