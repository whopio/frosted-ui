import * as React from 'react';
import { IconProps } from './types';

export const DotBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DotBold24"
      {...props}
    >
      <path
        d="M7 12c0-2.761 2.239-5 5-5s5 2.239 5 5-2.239 5-5 5-5-2.239-5-5z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

DotBold24.category = 'Interface General';

export default DotBold24;
