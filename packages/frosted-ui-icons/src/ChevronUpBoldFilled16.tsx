import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpBoldFilled16"
      {...props}
    >
      <path
        d="M3.5 9.5l4.267-4.267c.129-.129.337-.129.466 0L12.5 9.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpBoldFilled16.category = 'Arrows';

export default ChevronUpBoldFilled16;
