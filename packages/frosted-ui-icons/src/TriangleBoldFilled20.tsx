import * as React from 'react';
import { IconProps } from './types';

export const TriangleBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TriangleBoldFilled20"
      {...props}
    >
      <path
        d="M7.5 3.297c1.07-1.995 3.93-1.995 5 0l6.18 11.525c1.014 1.89-.355 4.178-2.5 4.178H3.82c-2.145 0-3.514-2.288-2.5-4.178L7.5 3.297z"
        fill={color}
      />
    </svg>
  );
};

TriangleBoldFilled20.category = 'Interface General';

export default TriangleBoldFilled20;
