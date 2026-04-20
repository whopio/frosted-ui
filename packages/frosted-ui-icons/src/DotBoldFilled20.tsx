import * as React from 'react';
import { IconProps } from './types';

export const DotBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

DotBoldFilled20.category = 'Interface General';

export default DotBoldFilled20;
