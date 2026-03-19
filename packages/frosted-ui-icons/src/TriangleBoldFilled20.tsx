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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.2007 15.2947L8.38095 3.76934C9.07374 2.47739 10.9263 2.4774 11.6191 3.76934L17.7993 15.2947C18.4556 16.5185 17.569 18 16.1802 18H3.81976C2.43103 18 1.54442 16.5185 2.2007 15.2947Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TriangleBoldFilled20.category = 'Product Icons';

export default TriangleBoldFilled20;
