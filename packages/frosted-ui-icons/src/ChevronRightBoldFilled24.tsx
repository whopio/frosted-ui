import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 3.5L16.1464 11.6464C16.3417 11.8417 16.3417 12.1583 16.1464 12.3536L8 20.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBoldFilled24.category = 'Arrows';

export default ChevronRightBoldFilled24;
