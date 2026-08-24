import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDownBoldFilled20"
      {...props}
    >
      <path
        d="M3.5 7.25l6.203 6.203c.164.164.43.164.594 0L16.5 7.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBoldFilled20.category = 'Arrows';

export default ChevronDownBoldFilled20;
