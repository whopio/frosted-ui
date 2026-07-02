import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 3L16.6464 11.6464C16.8417 11.8417 16.8417 12.1583 16.6464 12.3536L8 21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBold24.category = 'Arrows';

export default ChevronRightBold24;
