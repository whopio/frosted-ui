import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpBoldFilled32"
      {...props}
    >
      <path
        d="M3.5 21.25L15.526 9.224c.262-.262.686-.262.948 0L28.5 21.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpBoldFilled32.category = 'Arrows';

export default ChevronUpBoldFilled32;
