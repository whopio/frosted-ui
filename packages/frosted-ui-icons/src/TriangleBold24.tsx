import * as React from 'react';
import { IconProps } from './types';

export const TriangleBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TriangleBold24"
      {...props}
    >
      <path
        d="M10.04 3.414L2.311 17.616C1.481 19.142 2.585 21 4.321 21h15.377c1.732 0 2.836-1.85 2.015-3.374L14.067 3.423c-.862-1.6-3.157-1.606-4.027-.009z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TriangleBold24.category = 'Interface General';

export default TriangleBold24;
