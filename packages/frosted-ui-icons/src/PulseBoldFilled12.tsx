import * as React from 'react';
import { IconProps } from './types';

export const PulseBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseBoldFilled12"
      {...props}
    >
      <path
        d="M10.5 4.199L7.058 7.64c-.088.087-.23.087-.318 0L4.359 5.259c-.088-.088-.23-.088-.319 0L1.5 7.8"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PulseBoldFilled12.category = 'Stats & Charts';

export default PulseBoldFilled12;
