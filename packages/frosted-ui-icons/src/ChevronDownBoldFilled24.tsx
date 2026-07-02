import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.5 8.25L11.6464 16.3964C11.8417 16.5917 12.1583 16.5917 12.3536 16.3964L20.5 8.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBoldFilled24.category = 'Arrows';

export default ChevronDownBoldFilled24;
