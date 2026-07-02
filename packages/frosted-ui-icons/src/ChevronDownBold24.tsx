import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3 8.25L11.6464 16.8964C11.8417 17.0917 12.1583 17.0917 12.3536 16.8964L21 8.25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBold24.category = 'Arrows';

export default ChevronDownBold24;
